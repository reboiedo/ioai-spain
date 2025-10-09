// Button.animation.js
// Character stagger animation for Button component

function initButtonCharacterStagger() {
  const offsetIncrement = 0.01; // Transition offset increment in seconds
  const buttons = document.querySelectorAll('[data-button-animate-chars]');

  buttons.forEach(button => {
    // Skip if already initialized
    if (button.hasAttribute('data-chars-initialized')) {
      return;
    }

    const text = button.textContent; // Get the button's text content
    button.innerHTML = ''; // Clear the original content

    [...text].forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.transitionDelay = `${index * offsetIncrement}s`;

      // Handle spaces explicitly
      if (char === ' ') {
        span.style.whiteSpace = 'pre'; // Preserve space width
      }

      button.appendChild(span);
    });

    // Mark as initialized to prevent re-initialization
    button.setAttribute('data-chars-initialized', 'true');
  });
}

// Initialize on page load
document.addEventListener('astro:page-load', () => {
  initButtonCharacterStagger();
});

// Also initialize on DOMContentLoaded for direct page access
document.addEventListener('DOMContentLoaded', () => {
  initButtonCharacterStagger();
});

// Clean up and re-initialize on page swap (Astro view transitions)
document.addEventListener('astro:before-swap', () => {
  // Remove initialization markers so buttons can be re-initialized on new page
  const buttons = document.querySelectorAll('[data-button-animate-chars]');
  buttons.forEach(button => {
    button.removeAttribute('data-chars-initialized');
  });
});

export { initButtonCharacterStagger };