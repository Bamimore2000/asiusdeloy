import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { firstName, lastName, email, phone, message, services } = body as {
            firstName: string;
            lastName: string;
            email: string;
            phone: string;
            message: string;
            services: string[];
        };

        if (!firstName || !lastName || !email || !phone || !message || !services?.length) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        // Send email via Resend
        const data = await resend.emails.send({
            from: "onboarding@resend.dev", // Use your verified domain email
            to: ["enquiries@asiusdeloyltd.co.uk"],
            subject: "New Contact Form Submission",
            html: `
                <h3>New Contact Request</h3>
                <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Services:</strong> ${services.join(", ")}</p>
                <p><strong>Message:</strong> ${message}</p>
            `,
        });

        return NextResponse.json({ message: "Email sent successfully", data }, { status: 200 });
    } catch (err: unknown) {
        console.error("Email sending error:");
        return NextResponse.json({ error: err || "Failed to send email" }, { status: 500 });
    }
}
