function initializeScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1  // Trigger when 10% of the item is visible
    });

    // Observe all timeline items and table rows
    document.querySelectorAll('.timeline-item, table tr').forEach((item) => {
        observer.observe(item);
    });
}

// Initialize when the document is loaded
document.addEventListener('DOMContentLoaded', initializeScrollAnimations); 