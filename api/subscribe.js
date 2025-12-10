const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
const MAILCHIMP_LIST_ID = 'b5d57fbac2'; // Brandstudios.ai
const DATACENTER = MAILCHIMP_API_KEY ? MAILCHIMP_API_KEY.split('-')[1] : 'us7';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { email, firstName, lastName, phone } = req.body;

    if (!email || !email.includes('@')) {
        return res.status(400).json({ error: 'Valid email required' });
    }

    try {
        const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`;

        // Mailchimp requires Basic Auth (any string as username, API key as password)
        const authString = `anystring:${MAILCHIMP_API_KEY}`;
        const base64Auth = Buffer.from(authString).toString('base64');

        const data = {
            email_address: email,
            status: 'subscribed',
            merge_fields: {
                FNAME: firstName || '',
                LNAME: lastName || '',
                PHONE: phone || ''
            }
        };

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${base64Auth}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        // Handle response
        if (response.ok) {
            return res.status(200).json({ success: true });
        } else {
            const errorData = await response.json();

            // Mailchimp returns 400 if already exists
            if (errorData.title === 'Member Exists') {
                return res.status(200).json({ success: true, message: 'Already subscribed' });
            }

            console.error('Mailchimp Error:', errorData);
            throw new Error(errorData.detail || 'Failed to subscribe');
        }

    } catch (error) {
        console.error('Subscribe error:', error);
        return res.status(500).json({ error: 'Failed to subscribe' });
    }
}
