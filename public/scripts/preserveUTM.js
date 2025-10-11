// File: src/scripts/preserveUTM.js
// Simple UTM preservation for all internal links + button context for forms

function addUtmsToLinks() {
  // Get UTM parameters from current URL
  const currentUrl = new URL(window.location.href);
  const utmParams = [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_term',
    'utm_content',
    'gclid',    // Google Ads click ID
    'fbclid',   // Facebook click ID
  ]
    .filter((param) => currentUrl.searchParams.has(param))
    .map((param) => `${param}=${currentUrl.searchParams.get(param)}`)
    .join('&');

  // Get current page context for button attribution
  const currentPath = window.location.pathname.replace(/^\/es\//, '/').replace(/\/$/, '') || '/';
  const pageContextMap = {
    '/': 'home',
    '/eligibility': 'eligibility',
    '/about': 'about',
    '/privacy': 'privacy',
    '/faq': 'faq',
  };
  const pageContext = pageContextMap[currentPath] || 'page';

  // If we have UTM parameters, add them to all internal links
  if (utmParams) {
    document.querySelectorAll('a[href^="/"]').forEach((link) => {
      const linkUrl = new URL(link.href, window.location.origin);

      // Don't modify if the link already has these UTM parameters
      const existingUtms = [
        'utm_source',
        'utm_medium',
        'utm_campaign',
        'utm_term',
        'utm_content',
      ].some((param) => linkUrl.searchParams.has(param));

      if (!existingUtms) {
        // Add UTM parameters
        link.href = link.href + (link.href.includes('?') ? '&' : '?') + utmParams;

        // Add button context for form links
        if (link.href.includes('/form/')) {
          const buttonId = link.getAttribute('data-button-id') || 'button';
          const buttonContext = `${pageContext}-${buttonId}`;
          link.href += `&btn=${buttonContext}`;
        }
      }
    });

    console.log('🎯 UTM parameters preserved on internal links:', utmParams);
  }

  // Always inject tracking fields into forms (even without UTMs for timestamp/context)
  injectTrackingFieldsIntoForms();
}

function injectTrackingFieldsIntoForms() {
  // Find all forms and inject tracking data as hidden fields
  document.querySelectorAll('form').forEach((form) => {
    // Skip if already processed
    if (form.hasAttribute('data-tracking-injected')) return;

    const urlParams = new URLSearchParams(window.location.search);
    const trackingData = {};

    // Extract UTM parameters
    const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'gclid', 'fbclid'];
    utmParams.forEach((param) => {
      const value = urlParams.get(param);
      if (value) trackingData[param] = value;
    });

    // Extract tracking parameters
    const trackingParams = ['ref', 'btn'];
    trackingParams.forEach((param) => {
      const value = urlParams.get(param);
      if (value) trackingData[param] = value;
    });

    // Add timestamp and landing page
    trackingData.tracking_timestamp = new Date().toISOString();
    trackingData.landing_page = window.location.pathname;

    // Add referrer if available and not already captured
    if (document.referrer && !trackingData.ref) {
      trackingData.referrer_page = document.referrer;
    }

    // Create and inject hidden input fields
    Object.entries(trackingData).forEach(([key, value]) => {
      // Check if field already exists
      if (!form.querySelector(`input[name="${key}"]`)) {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value;
        form.appendChild(input);
      }
    });

    // Mark as processed
    form.setAttribute('data-tracking-injected', 'true');

    if (Object.keys(trackingData).length > 0) {
      console.log('🎯 Tracking fields injected into form:', trackingData);
    }
  });
}

// Debug: Log when script loads
console.log('🎯 preserveUTM.js script loaded');

// Debug helper function - call this from browser console to test UTM tracking
window.debugUTMTracking = function() {
  console.group('🔍 UTM Tracking Debug');
  console.log('Current URL:', window.location.href);
  console.log('UTM Parameters found:', new URLSearchParams(window.location.search));

  // Show all forms and their hidden fields
  document.querySelectorAll('form').forEach((form, index) => {
    console.log(`Form ${index + 1}:`, form);
    const hiddenFields = form.querySelectorAll('input[type="hidden"]');
    console.log(`  Hidden fields (${hiddenFields.length}):`, Array.from(hiddenFields).map(field => `${field.name}=${field.value}`));
  });

  // Show all internal links and their URLs
  const internalLinks = document.querySelectorAll('a[href^="/"]');
  console.log(`Internal links (${internalLinks.length}):`, Array.from(internalLinks).map(link => link.href));

  console.groupEnd();
};

// Run on initial page load
document.addEventListener('DOMContentLoaded', () => {
  console.log('🎯 DOMContentLoaded - running addUtmsToLinks');
  addUtmsToLinks();
});

// Run again after each View Transition (Astro)
document.addEventListener('astro:page-load', () => {
  console.log('🎯 astro:page-load - running addUtmsToLinks');
  addUtmsToLinks();
});