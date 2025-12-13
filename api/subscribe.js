export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { email, firstName, lastName } = req.body;

    if (!email || !email.includes('@')) {
        return res.status(400).json({ error: 'Valid email required' });
    }

    try {
        // Mailchimp API
        const apiKey = process.env.MAILCHIMP_API_KEY;
        const listId = 'b5d57fbac2';
        const dataCenter = apiKey.split('-')[1]; // 'us7'

        const response = await fetch(
            `https://${dataCenter}.api.mailchimp.com/3.0/lists/${listId}/members`,
            {
                method: 'POST',
                headers: {
                    'Authorization': `apikey ${apiKey}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email_address: email,
                    status: 'subscribed',
                    merge_fields: {
                        FNAME: firstName || '',
                        LNAME: lastName || '',
                    },
                }),
            }
        );

        const data = await response.json();

        if (!response.ok) {
            console.error('Mailchimp error:', data);

            // Already subscribed
            if (data.title === 'Member Exists') {
                return res.status(200).json({ success: true, message: 'Already subscribed' });
            }

            throw new Error(data.detail || 'Failed to subscribe');
        }

        console.log('Email subscribed to Mailchimp:', email);
        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('Subscribe error:', error);
        return res.status(500).json({ error: 'Failed to subscribe' });
    }
}
