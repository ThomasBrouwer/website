# Cloudflare Security Headers Setup Guide

Since GitHub Pages doesn't allow direct configuration of HTTP headers, we need to use Cloudflare to implement proper security headers. This guide will walk you through setting up security headers in Cloudflare.

## Step 1: Log in to Cloudflare

Log in to your Cloudflare account where your domain (thomasbrouwer.com) is managed.

## Step 2: Navigate to Rules

1. Select your domain (thomasbrouwer.com)
2. Go to "Rules" in the left sidebar
3. Click on "Transform Rules"
4. Click "Create Transform Rule"

## Step 3: Create a Transform Rule for Security Headers

1. Name your rule: "Security Headers"
2. Under "When incoming requests match...", set:
   - Field: "Hostname"
   - Operator: "equals"
   - Value: "thomasbrouwer.com"

3. Under "Then...", select "Modify Response Header"
4. Add the following headers one by one:

### X-Content-Type-Options
- Action: "Set static"
- Header name: "X-Content-Type-Options"
- Value: "nosniff"

### Strict-Transport-Security
- Action: "Set static"
- Header name: "Strict-Transport-Security"
- Value: "max-age=31536000; includeSubDomains"

### Content-Security-Policy
- Action: "Set static"
- Header name: "Content-Security-Policy"
- Value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://substackapi.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self'; frame-src 'self' https://thomasbrouwer646203.substack.com; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'self';"

### Referrer-Policy
- Action: "Set static"
- Header name: "Referrer-Policy"
- Value: "strict-origin-when-cross-origin"

5. Click "Deploy" to save and activate the rule

## Step 4: Verify Headers

After deploying the rule, you can verify that the headers are being properly set by:

1. Visiting your website (https://thomasbrouwer.com)
2. Opening browser developer tools (F12 or right-click > Inspect)
3. Going to the Network tab
4. Refreshing the page
5. Clicking on the main document request
6. Looking at the Response Headers section

You should see all the security headers listed above.

## Additional Notes

- The Content-Security-Policy header includes settings for Substack, which is used on your writing page
- The frame-ancestors directive is included in the HTTP header (not in meta tags) to properly protect against clickjacking
- These headers will be applied to all pages on your domain

If you need to make adjustments to the Content Security Policy later, you can edit the transform rule in Cloudflare. 