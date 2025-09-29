# Calendly Integration Setup Guide

## Overview
The BorderWorx website now includes Calendly integration for seamless meeting scheduling with automatic email invitations.

## Features Implemented

### 1. Meeting Booking Modal
- **Two Options**: Direct calendar booking or form-first approach
- **Inline Widget**: Embedded Calendly scheduler within the modal
- **Pre-filled Information**: User details automatically populate the calendar
- **Brand Customization**: Orange color scheme matching BorderWorx branding

### 2. Automatic Email Invitations
- **Calendar Invites**: Sent automatically when meetings are booked
- **Email Confirmations**: Both host and guest receive confirmation emails
- **Meeting Details**: Include meeting purpose, contact information, and logistics focus

### 3. Chatbot Integration
- **Direct Scheduling**: Users can book meetings directly from chat
- **FAQ Integration**: Suggests meeting booking when questions can't be answered
- **Popup Widget**: Quick scheduling without leaving the chat interface

## Setup Instructions

### Step 1: Create Calendly Account
1. Go to [Calendly.com](https://calendly.com)
2. Sign up with your business email: `sharipov@sheridancollege.ca`
3. Complete the onboarding process

### Step 2: Configure Event Types
1. Create a new event type: "BorderWorx Logistics Consultation"
2. Set duration: 30 minutes (recommended)
3. Configure availability based on your schedule
4. Add event description:
   ```
   Schedule a consultation with BorderWorx Logistics to discuss your shipping and freight forwarding needs. Our experts will help you optimize your supply chain and find the best logistics solutions for your business.
   ```

### Step 3: Customize Calendly Settings
1. **Branding**: Upload BorderWorx logo and set primary color to `#FF6B35`
2. **Email Notifications**: Enable confirmations and reminders
3. **Questions**: Add custom questions:
   - Company Name
   - Shipping Volume (monthly)
   - Current Logistics Challenges
   - Preferred Communication Method

### Step 4: Get Your Calendly URL
1. Go to your event type
2. Copy the public URL (e.g., `https://calendly.com/your-username/consultation`)
3. Update the URL in `src/data/contactInfo.json`:

```json
{
  "calendly": {
    "url": "https://calendly.com/your-actual-username/consultation",
    "prefill": {
      "email": "sharipov@sheridancollege.ca",
      "firstName": "",
      "lastName": "",
      "name": ""
    }
  }
}
```

### Step 5: Email Templates (Calendly Pro)
If you have Calendly Pro, customize email templates:

**Confirmation Email Template**:
```
Hi {{invitee_name}},

Thanks for scheduling a logistics consultation with BorderWorx! 

📅 Meeting Details:
- Date: {{event_start_time}}
- Duration: 30 minutes
- Meeting Link: {{join_url}}

We'll discuss your shipping needs and how BorderWorx can optimize your supply chain. Please prepare any questions about:
- Freight forwarding
- Warehousing solutions
- Customs clearance
- Supply chain optimization

Looking forward to speaking with you!

Best regards,
BorderWorx Logistics Team
Phone: +1 (905) 877-6036
Email: sharipov@sheridancollege.ca
```

### Step 6: Integration Testing
1. Test the booking flow from the website
2. Verify email notifications are sent
3. Check calendar integration works properly
4. Test mobile responsiveness

## Features

### Current Implementation
- ✅ Embedded Calendly widget in meeting modal
- ✅ Pre-filled user information
- ✅ Brand customization (orange theme)
- ✅ Chatbot integration
- ✅ Mobile responsive design
- ✅ UTM tracking for analytics

### Email Automation (via Calendly)
- ✅ Automatic confirmation emails
- ✅ Calendar invites (ICS files)
- ✅ Reminder notifications
- ✅ Cancellation/rescheduling notifications
- ✅ Meeting preparation information

### Analytics & Tracking
- UTM parameters automatically added:
  - Campaign: "BorderWorx Meeting"
  - Source: "website"
  - Medium: "booking_form" or "chatbot"

## Customization Options

### Color Scheme
The integration uses BorderWorx brand colors:
- Primary: `#FF6B35` (Orange)
- Background: `#FFFFFF` (White)
- Text: `#000000` (Black)

### Pre-fill Options
The system automatically pre-fills:
- Email address from contact form
- Name (split into first/last)
- Company information (if provided)

## Usage

### From Chatbot
1. User asks question chatbot can't answer
2. Chatbot suggests booking a meeting
3. User clicks "Book a Meeting" button
4. Meeting booking modal opens with two options

### From Contact Form
1. User fills out contact form
2. Clicks "Schedule Meeting" option
3. Information pre-fills in Calendly
4. User selects preferred time slot

### Direct Calendar Access
1. User clicks "Open Calendar" button
2. Calendly widget loads inline
3. User selects time and confirms
4. Automatic emails sent to both parties

## Benefits

### For Users
- **Instant Booking**: No back-and-forth emails
- **Email Confirmations**: Automatic calendar invites
- **Mobile Friendly**: Works on all devices
- **Time Zone Support**: Automatic conversion
- **Preparation Info**: Clear meeting expectations

### For BorderWorx
- **Automated Scheduling**: No manual calendar management
- **Lead Qualification**: Custom questions collect business info
- **Professional Image**: Branded booking experience
- **Analytics**: Track booking sources and conversion
- **Integration Ready**: Works with existing website flow

## Next Steps

1. Set up your actual Calendly account
2. Replace the placeholder URL in `contactInfo.json`
3. Customize event types and availability
4. Test the complete booking flow
5. Monitor analytics and optimize as needed

The integration is ready to go live once you have your Calendly account configured!
