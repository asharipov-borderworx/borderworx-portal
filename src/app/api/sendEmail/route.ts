import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';


export async function POST(request: Request){
    const body = await request.json();
    const {name, email, phone, subject, message} = body;
    try{
        const transporter = nodemailer.createTransport({
            host: process.env.SEND_EMAIL_HOST || "smtp.gmail.com",
            port: parseInt(process.env.SEND_EMAIL_PORT || '465'),
            secure: true, 
            auth: {
                user: process.env.SEND_EMAIL_USERNAME || 'borderworx403@gmail.com',
                pass: process.env.SEND_EMAIL_PASSWORD || 'wcoocgzqjhvxnthm'
            }
        });

        const info = await transporter.sendMail({
            from: `"${name}" <borderworx403@gmail.com>`,
            to: process.env.SEND_EMAIL_TO || 'sales@borderworx.com',
            subject: 'New Contact Form Submission',
            text: `
                Name: ${name}
                Email: ${email}
                Phone: ${phone ? phone : ''}
                Subject: ${subject}
                Message: ${message}
            `,
            html: `
                <h3>New Contact Form Submission</h3>
                <p><b>Name:</b> ${name}</p>
                <p><b>Email:</b> ${email}</p>
                <p><b>Phone:</b> ${phone ? phone : ''}</p>
                <p><b>Subject:</b> ${subject}</p>
                <p><b>Message:</b><br/>${message}</p>
            `
        });
        console.log('Response: ', info);
        return NextResponse.json({ message: 'Email sent', success: true });
    } catch (error) {
        return NextResponse.json({ message: 'Error sending email', success: false });
    }
    return NextResponse.json({ message: 'Email not sent', success: false });
}