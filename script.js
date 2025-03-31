// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize navigation highlighting
    initNavHighlighting();
    
    // Initialize form handling
    initFormHandling();
});

// Scroll Animations
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-visible');
                // Unobserve after animation
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });

    // Observe all sections and items
    const elements = document.querySelectorAll('.info-section, .project-item, .experience-item, .service-item, .contact-item, .skill-item, .about-grid, .skills-grid, .projects-grid, .contact-grid');
    
    elements.forEach(element => {
        element.classList.add('scroll-hidden');
        observer.observe(element);
    });
}

// Navigation Highlighting
function initNavHighlighting() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.main-nav a');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// Form Handling
function initFormHandling() {
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Show loading state
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            try {
                // Simulate form submission (replace with actual API endpoint)
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                // Show success message
                showNotification('Message sent successfully!', 'success');
                contactForm.reset();
            } catch (error) {
                // Show error message
                showNotification('Failed to send message. Please try again.', 'error');
            } finally {
                // Reset button state
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }
}

// Notification System
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Project Image Hover Effect
document.querySelectorAll('.project-item').forEach(project => {
    const image = project.querySelector('.project-image img');
    if (image) {
        project.addEventListener('mousemove', (e) => {
            const rect = project.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            image.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        project.addEventListener('mouseleave', () => {
            image.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    }
});

// Add CSS for notifications
const style = document.createElement('style');
style.textContent = `
    .notification {
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 1rem 2rem;
        border-radius: 8px;
        background: #64ffda;
        color: #0a192f;
        transform: translateY(100px);
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 1000;
    }
    
    .notification.show {
        transform: translateY(0);
        opacity: 1;
    }
    
    .notification.error {
        background: #ff6b6b;
    }
`;
document.head.appendChild(style);

// Timeline scroll effect
function updateTimelineGradient() {
    const timeline = document.querySelector('.experience-timeline');
    if (!timeline) return;

    const timelineRect = timeline.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // Calculate how far the timeline is in the viewport
    const timelineTop = timelineRect.top;
    const timelineHeight = timelineRect.height;
    
    // Calculate the percentage of the timeline that's visible
    let visiblePercentage = 0;
    if (timelineTop < windowHeight && timelineTop + timelineHeight > 0) {
        const visibleHeight = Math.min(windowHeight, timelineTop + timelineHeight) - Math.max(0, timelineTop);
        visiblePercentage = (visibleHeight / timelineHeight) * 100;
    }

    // Update the gradient position based on scroll
    const timelineLine = timeline.querySelector('::before');
    if (timelineLine) {
        const scrollPosition = (window.scrollY - timelineTop) / timelineHeight;
        timeline.style.setProperty('--gradient-position', `${scrollPosition * 100}%`);
    }
}

// Add scroll event listener
window.addEventListener('scroll', updateTimelineGradient);
window.addEventListener('resize', updateTimelineGradient);

// Initial call
updateTimelineGradient();

// Scroll Progress Indicator
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.querySelector('.scroll-progress').style.setProperty('--scroll', scrolled + '%');
});

// Back to Top Button
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

// Add animation to elements when they come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.scroll-hidden').forEach((element) => {
    observer.observe(element);
}); 