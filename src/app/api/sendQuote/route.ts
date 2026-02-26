import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const {
            name,
            email,
            phone,
            company,
            jobTitle,
            websiteUrl,
            message,
            service,
            payload,
            subject,
            ...rest
        } = body;

        const transporter = nodemailer.createTransport({
            host: process.env.SEND_EMAIL_HOST || "smtp.gmail.com",
            port: parseInt(process.env.SEND_EMAIL_PORT || '465'),
            secure: true, 
            auth: {
                user: process.env.SEND_EMAIL_USERNAME || 'borderworx403@gmail.com',
                pass: process.env.SEND_EMAIL_PASSWORD || 'wcoocgzqjhvxnthm'
            }
        });

        // Generate email subject
        const emailSubject = subject || `Quote Request: ${service || 'Logistics Services'}${company ? ` - ${company}` : ''}`;

        // Format payload data based on service type
        const formatPayloadData = (payload: any, service: string) => {
            if (!payload) return 'No service-specific data provided.';
            
            let formattedData = '';
            
            switch (service) {
                case 'Freight Shipping':
                    formattedData = `
                        Freight Origin: ${payload.freightOrigin || 'Not specified'}
                        Freight Destination: ${payload.freightDestination || 'Not specified'}
                        Weight: ${payload.weight || 'Not specified'}
                        Commodity: ${payload.commodity || 'Not specified'}
                    `;
                    break;
                    
                case 'Warehousing':
                    formattedData = `
                        Warehouse Location Preference: ${payload.warehouseLocationPreference || 'Not specified'}
                        Square Feet Needed: ${payload.squareFeetNeeded || 'Not specified'}
                        Product Type: ${payload.productType || 'Not specified'}
                        Storage Format: ${payload.storedValue || 'Not specified'}
                        Anticipated Contract Length: ${payload.anticipatedContractLength || 'Not specified'}
                        Monthly Inventory Turns: ${payload.anticipatedMonthlyInventoryTurns || 'Not specified'}
                        Transport Service Needed: ${payload.transportServiceNeeded || 'Not specified'}
                        Co-packing Services Needed: ${payload.copackingServicesNeeded || 'Not specified'}
                    `;
                    break;
                    
                case 'Customs Brokerage – Canada & USA':
                    formattedData = `
                        Shipping Origin: ${payload.shippingOrigin || 'Not specified'}
                        Shipping Destination: ${payload.shippingDestination || 'Not specified'}
                        Product Type: ${payload.productType || 'Not specified'}
                        Date Needed: ${payload.dateNeeded || 'Not specified'}
                        Shipping Type: ${payload.shippingType || 'Not specified'}
                        One Time Shipment: ${payload.oneTimeShipment ? 'Yes' : 'No'}
                    `;
                    break;
                    
                case 'Trade Compliance Consulting':
                    formattedData = `
                        Product Type: ${payload.productType || 'Not specified'}
                        Industry Type: ${payload.industryType || 'Not specified'}
                        Trading Activity: ${payload.tradingActivity || 'Not specified'}
                        Help Needed: ${payload.helpNeededType ? payload.helpNeededType.join(', ') : 'Not specified'}
                    `;
                    break;
                    
                default:
                    formattedData = JSON.stringify(payload, null, 2);
            }
            
            return formattedData.trim();
        };

        // Format payload data as HTML table rows
        const formatPayloadDataHtml = (payload: any, service: string) => {
            if (!payload) return '<tr><td colspan="2" style="padding: 10px; color: #6b7280;">No service-specific data provided.</td></tr>';
            
            let rows = '';
            
            switch (service) {
                case 'Freight Shipping':
                    rows = `
                        <tr><td style="padding: 8px 12px; font-weight: bold; color: #374151; width: 40%;">Freight Origin:</td><td style="padding: 8px 12px; color: #1f2937;">${payload.freightOrigin || 'Not specified'}</td></tr>
                        <tr><td style="padding: 8px 12px; font-weight: bold; color: #374151;">Freight Destination:</td><td style="padding: 8px 12px; color: #1f2937;">${payload.freightDestination || 'Not specified'}</td></tr>
                        <tr><td style="padding: 8px 12px; font-weight: bold; color: #374151;">Weight:</td><td style="padding: 8px 12px; color: #1f2937;">${payload.weight || 'Not specified'}</td></tr>
                        <tr><td style="padding: 8px 12px; font-weight: bold; color: #374151;">Commodity:</td><td style="padding: 8px 12px; color: #1f2937;">${payload.commodity || 'Not specified'}</td></tr>
                    `;
                    break;
                    
                case 'Warehousing':
                    rows = `
                        <tr><td style="padding: 8px 12px; font-weight: bold; color: #374151; width: 40%;">Warehouse Location Preference:</td><td style="padding: 8px 12px; color: #1f2937;">${payload.warehouseLocationPreference || 'Not specified'}</td></tr>
                        <tr><td style="padding: 8px 12px; font-weight: bold; color: #374151;">Square Feet Needed:</td><td style="padding: 8px 12px; color: #1f2937;">${payload.squareFeetNeeded || 'Not specified'}</td></tr>
                        <tr><td style="padding: 8px 12px; font-weight: bold; color: #374151;">Product Type:</td><td style="padding: 8px 12px; color: #1f2937;">${payload.productType || 'Not specified'}</td></tr>
                        <tr><td style="padding: 8px 12px; font-weight: bold; color: #374151;">Storage Format:</td><td style="padding: 8px 12px; color: #1f2937;">${payload.storedValue || 'Not specified'}</td></tr>
                        <tr><td style="padding: 8px 12px; font-weight: bold; color: #374151;">Anticipated Contract Length:</td><td style="padding: 8px 12px; color: #1f2937;">${payload.anticipatedContractLength || 'Not specified'}</td></tr>
                        <tr><td style="padding: 8px 12px; font-weight: bold; color: #374151;">Monthly Inventory Turns:</td><td style="padding: 8px 12px; color: #1f2937;">${payload.anticipatedMonthlyInventoryTurns || 'Not specified'}</td></tr>
                        <tr><td style="padding: 8px 12px; font-weight: bold; color: #374151;">Transport Service Needed:</td><td style="padding: 8px 12px; color: #1f2937;">${payload.transportServiceNeeded || 'Not specified'}</td></tr>
                        <tr><td style="padding: 8px 12px; font-weight: bold; color: #374151;">Co-packing Services Needed:</td><td style="padding: 8px 12px; color: #1f2937;">${payload.copackingServicesNeeded || 'Not specified'}</td></tr>
                    `;
                    break;
                    
                case 'Customs Brokerage – Canada & USA':
                    rows = `
                        <tr><td style="padding: 8px 12px; font-weight: bold; color: #374151; width: 40%;">Shipping Origin:</td><td style="padding: 8px 12px; color: #1f2937;">${payload.shippingOrigin || 'Not specified'}</td></tr>
                        <tr><td style="padding: 8px 12px; font-weight: bold; color: #374151;">Shipping Destination:</td><td style="padding: 8px 12px; color: #1f2937;">${payload.shippingDestination || 'Not specified'}</td></tr>
                        <tr><td style="padding: 8px 12px; font-weight: bold; color: #374151;">Product Type:</td><td style="padding: 8px 12px; color: #1f2937;">${payload.productType || 'Not specified'}</td></tr>
                        <tr><td style="padding: 8px 12px; font-weight: bold; color: #374151;">Date Needed:</td><td style="padding: 8px 12px; color: #1f2937;">${payload.dateNeeded || 'Not specified'}</td></tr>
                        <tr><td style="padding: 8px 12px; font-weight: bold; color: #374151;">Shipping Type:</td><td style="padding: 8px 12px; color: #1f2937;">${payload.shippingType || 'Not specified'}</td></tr>
                        <tr><td style="padding: 8px 12px; font-weight: bold; color: #374151;">One Time Shipment:</td><td style="padding: 8px 12px; color: #1f2937;">${payload.oneTimeShipment ? 'Yes' : 'No'}</td></tr>
                    `;
                    break;
                    
                case 'Trade Compliance Consulting':
                    rows = `
                        <tr><td style="padding: 8px 12px; font-weight: bold; color: #374151; width: 40%;">Product Type:</td><td style="padding: 8px 12px; color: #1f2937;">${payload.productType || 'Not specified'}</td></tr>
                        <tr><td style="padding: 8px 12px; font-weight: bold; color: #374151;">Industry Type:</td><td style="padding: 8px 12px; color: #1f2937;">${payload.industryType || 'Not specified'}</td></tr>
                        <tr><td style="padding: 8px 12px; font-weight: bold; color: #374151;">Trading Activity:</td><td style="padding: 8px 12px; color: #1f2937;">${payload.tradingActivity || 'Not specified'}</td></tr>
                        <tr><td style="padding: 8px 12px; font-weight: bold; color: #374151;">Help Needed:</td><td style="padding: 8px 12px; color: #1f2937;">${payload.helpNeededType ? payload.helpNeededType.join(', ') : 'Not specified'}</td></tr>
                    `;
                    break;
                    
                default:
                    // For unknown services, create rows from JSON object
                    rows = Object.entries(payload)
                        .map(([key, value]) => {
                            const displayKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                            const displayValue = typeof value === 'object' ? JSON.stringify(value) : String(value);
                            return `<tr><td style="padding: 8px 12px; font-weight: bold; color: #374151; width: 40%;">${displayKey}:</td><td style="padding: 8px 12px; color: #1f2937;">${displayValue || 'Not specified'}</td></tr>`;
                        })
                        .join('');
            }
            
            return rows;
        };

        const payloadData = formatPayloadData(payload, service);
        const payloadDataHtml = formatPayloadDataHtml(payload, service);

        // Generate email content
        const emailText = `
New Quote Request
====================

CONTACT INFORMATION:
Name: ${name || 'Not provided'}
Email: ${email || 'Not provided'}
Phone: ${phone || 'Not provided'}
Company: ${company || 'Not provided'}
Job Title: ${jobTitle || 'Not provided'}
Website: ${websiteUrl || 'Not provided'}

SERVICE REQUESTED:
${service || 'Not specified'}

SERVICE-SPECIFIC DETAILS:
${payloadData}

ADDITIONAL MESSAGE:
${message || 'No additional message provided'}

====================
Submitted via BorderWorx Quote Form
        `.trim();

        const emailHtml = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #f97316; border-bottom: 2px solid #f97316; padding-bottom: 10px;">New Quote Request</h2>
                
                <h3 style="color: #374151; margin-top: 20px;">Contact Information</h3>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr><td style="padding: 5px; font-weight: bold;">Name:</td><td style="padding: 5px;">${name || 'Not provided'}</td></tr>
                    <tr><td style="padding: 5px; font-weight: bold;">Email:</td><td style="padding: 5px;">${email || 'Not provided'}</td></tr>
                    <tr><td style="padding: 5px; font-weight: bold;">Phone:</td><td style="padding: 5px;">${phone || 'Not provided'}</td></tr>
                    <tr><td style="padding: 5px; font-weight: bold;">Company:</td><td style="padding: 5px;">${company || 'Not provided'}</td></tr>
                    <tr><td style="padding: 5px; font-weight: bold;">Job Title:</td><td style="padding: 5px;">${jobTitle || 'Not provided'}</td></tr>
                    <tr><td style="padding: 5px; font-weight: bold;">Website:</td><td style="padding: 5px;">${websiteUrl || 'Not provided'}</td></tr>
                </table>
                
                <h3 style="color: #374151; margin-top: 20px;">Service Requested</h3>
                <p style="background: #f3f4f6; padding: 10px; border-radius: 5px;">${service || 'Not specified'}</p>
                
                <h3 style="color: #374151; margin-top: 20px;">Service-Specific Details</h3>
                <div style="background: #f9fafb; padding: 15px; border-radius: 5px;">
                    <table style="width: 100%; border-collapse: collapse;">
                        ${payloadDataHtml}
                    </table>
                </div>
                
                <h3 style="color: #374151; margin-top: 20px;">Additional Message</h3>
                <p style="background: #f3f4f6; padding: 10px; border-radius: 5px;">${message || 'No additional message provided'}</p>
                
                <hr style="margin: 20px 0; border: none; border-top: 1px solid #e5e7eb;">
                <p style="color: #6b7280; font-size: 12px;">Submitted via BorderWorx Quote Form</p>
            </div>
        `;

        const info = await transporter.sendMail({
            from: `"${name || 'Website Visitor'}" <borderworx403@gmail.com>`,
            to: process.env.SEND_EMAIL_TO || 'sales@borderworx.com',
            subject: emailSubject,
            text: emailText,
            html: emailHtml
        });

        console.log('Quote Response: ', info);
        return NextResponse.json({ message: 'Quote email sent successfully', success: true });
        
    } catch (error) {
        console.error('Error sending quote email:', error);
        return NextResponse.json({ message: 'Error sending quote email', success: false }, { status: 500 });
    }
}