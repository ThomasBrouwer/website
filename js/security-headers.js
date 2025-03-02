/**
 * Security Headers Implementation
 * 
 * This script adds security-related meta tags to the document head
 * to address security headers that cannot be set directly on GitHub Pages.
 * Note: Most security headers are now handled through Cloudflare HTTP headers.
 * This script only adds the Referrer Policy as a fallback.
 */
document.addEventListener('DOMContentLoaded', function() {
  // Referrer Policy only - CSP is now handled by Cloudflare
  const referrerMeta = document.createElement('meta');
  referrerMeta.name = 'referrer';
  referrerMeta.content = 'strict-origin-when-cross-origin';
  
  // Add meta tag to head
  document.head.appendChild(referrerMeta);
}); 