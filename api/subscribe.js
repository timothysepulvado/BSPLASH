export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { email } = req.body;

    if (!email || !email.includes('@')) {
        return res.status(400).json({ error: 'Valid email required' });
    }

    try {
        // Store in Supabase
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const supabaseKey = process.env.SUPABASE_API_KEY;

        const response = await fetch(`${supabaseUrl}/rest/v1/email_signups`, {
            method: 'POST',
            headers: {
                'apikey': supabaseKey,
                'Authorization': `Bearer ${supabaseKey}`,
                'Content-Type': 'application/json',
                'Prefer': 'return=minimal',
            },
            body: JSON.stringify({
                email: email,
                source: 'splash_page',
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Supabase error:', errorData);

            // Check if duplicate email
            if (errorData.code === '23505') {
                return res.status(200).json({ success: true, message: 'Already subscribed' });
            }

            throw new Error(errorData.message || 'Failed to save email');
        }

        console.log('Email saved:', email);
        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('Subscribe error:', error);
        return res.status(500).json({ error: 'Failed to subscribe' });
    }
}
