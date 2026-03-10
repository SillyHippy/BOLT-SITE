import { NextRequest, NextResponse } from 'next/server';

const N8N_WEBHOOK = 'https://just-legal-solutions.app.n8n.cloud/webhook/jls-chat';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const n8nResponse = await fetch(N8N_WEBHOOK, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });

        if (!n8nResponse.ok) {
            throw new Error(`n8n responded with ${n8nResponse.status}`);
        }

        const data = await n8nResponse.json();

        return NextResponse.json(data);
    } catch (err) {
        console.error('Chat proxy error:', err);
        return NextResponse.json(
            {
                reply:
                    "I'm having trouble right now. Please call or text (539) 367-6832 for immediate help.",
            },
            { status: 200 }
        );
    }
}
