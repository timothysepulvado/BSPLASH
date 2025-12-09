export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { email } = req.body;

    if (!email || !email.includes('@')) {
        return res.status(400).json({ error: 'Valid email required' });
    }

    try {
        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: process.env.EMAIL_FROM,
                to: process.env.EMAIL_TO_TEAM.split(',').map(e => e.trim()),
                subject: 'New BrandStudios.AI Signup',
                html: `<p>New signup from: <strong>${email}</strong></p>`,
            }),
        });

        const data = await response.json();
        console.log('Resend response:', response.status, data);

        if (!response.ok) {
            console.error('Resend error:', data);
            throw new Error(data.message || 'Failed to send email');
        }

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('Email error:', error);
        return res.status(500).json({ error: 'Failed to subscribe' });
    }
}
