# Email Setup Guide

The contact form and newsletter subscription are now functional! To make them work, you need to set up an email service.

## Recommended Service: Resend

Resend is a modern email API that's easy to use and has a generous free tier.

### Steps to Set Up:

1. **Sign up for Resend**
   - Go to [resend.com](https://resend.com)
   - Create a free account

2. **Get Your API Key**
   - After signing up, go to API Keys section
   - Create a new API key
   - Copy the API key (it starts with `re_`)

3. **Add API Key to Your Project**
   
   **For Local Development:**
   - Create a `.env` file in your project root (if it doesn't exist)
   - Add this line:
     ```
     RESEND_API_KEY=your_api_key_here
     ```

   **For Production (Cloudflare Pages):**
   - Go to your Cloudflare Pages dashboard
   - Navigate to Settings > Environment Variables
   - Add a new variable:
     - Name: `RESEND_API_KEY`
     - Value: your API key
     - Apply to: Production and Preview

4. **Test the Forms**
   - Contact form at the bottom of your homepage
   - Newsletter subscription in the footer
   - Both will send emails to: web.design.agency.ahmad@gmail.com

## Alternative Email Services

If you prefer a different service, you can easily modify the API endpoints:

### SendGrid
- Sign up at [sendgrid.com](https://sendgrid.com)
- Free tier: 100 emails/day
- Use their API to send emails

### Mailgun
- Sign up at [mailgun.com](https://mailgun.com)
- Free tier: 5,000 emails/month (first 3 months)
- Use their API to send emails

### Amazon SES
- Sign up for AWS
- Configure SES service
- More complex but very cost-effective

## How It Works

1. **Contact Form** (`/api/contact`)
   - User fills out the form
   - Data is sent to the API endpoint
   - Email is sent to your Gmail address
   - User receives confirmation

2. **Newsletter** (`/api/newsletter`)
   - User enters their email
   - Email notification sent to you
   - User sees success message

## Important Notes

- The forms will show an error if the API key is not configured
- In development, check your console for detailed error messages
- Make sure to verify your domain with Resend for better deliverability
- Keep your API key secret and never commit it to Git

## Testing

To test locally:
```bash
npm run dev
```

Then:
1. Fill out the contact form
2. Subscribe to the newsletter
3. Check your email (web.design.agency.ahmad@gmail.com)

## Troubleshooting

- **Forms not working?** Check if RESEND_API_KEY is set correctly
- **Not receiving emails?** Check your spam folder
- **API errors?** Check the browser console and server logs
- **Need help?** Check Resend documentation or contact their support
