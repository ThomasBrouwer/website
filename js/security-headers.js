/**
 * Security Headers Implementation
 * 
 * This script adds security-related meta tags to the document head
 * to address security headers that cannot be set directly on GitHub Pages.
 * Note: Some security headers like frame-ancestors cannot be set via meta tags
 * and require proper HTTP headers via Cloudflare or similar services.
 */
document.addEventListener('DOMContentLoaded', function() {
  // Content Security Policy (CSP) - without frame-ancestors
  const cspMeta = document.createElement('meta');
  cspMeta.httpEquiv = 'Content-Security-Policy';
  cspMeta.content = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self'; frame-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self';";
  
  // Referrer Policy
  const referrerMeta = document.createElement('meta');
  referrerMeta.name = 'referrer';
  referrerMeta.content = 'strict-origin-when-cross-origin';
  
  // Add meta tags to head
  document.head.appendChild(cspMeta);
  document.head.appendChild(referrerMeta);
}); 