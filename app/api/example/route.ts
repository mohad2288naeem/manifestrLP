import { NextResponse } from 'next/server'

// Example API endpoint
// Access at: http://localhost:3000/api/example
export async function GET() {
    return NextResponse.json({
        message: 'API endpoint is working!',
        timestamp: new Date().toISOString()
    })
}

export async function POST(request: Request) {
    const body = await request.json()

    return NextResponse.json({
        message: 'Data received',
        data: body
    })
}

