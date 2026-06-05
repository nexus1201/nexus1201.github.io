// ===========================
// Smooth Scrolling Navigation
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Resume button uses direct link to resume.pdf (download attribute on anchor)

// ===========================
// Contact Form Handler
// ===========================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Show success message
        showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
        
        // Reset form
        this.reset();
        
        // Uncomment to send email via service (requires backend setup)
        // sendEmail(name, email, message);
    });
}

// ===========================
// Notification System
// ===========================
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add notification styles dynamically
    const style = document.createElement('style');
    if (!document.querySelector('style[data-notification]')) {
        style.setAttribute('data-notification', 'true');
        style.innerHTML = `
            .notification {
                position: fixed;
                bottom: 20px;
                right: 20px;
                padding: 1rem 1.5rem;
                border-radius: 8px;
                font-weight: 600;
                z-index: 9999;
                animation: slideIn 0.3s ease-out;
                max-width: 400px;
            }
            
            .notification-success {
                background: linear-gradient(135deg, #10b981, #059669);
                color: white;
                border: 1px solid #047857;
            }
            
            .notification-error {
                background: linear-gradient(135deg, #ef4444, #dc2626);
                color: white;
                border: 1px solid #b91c1c;
            }
            
            .notification-info {
                background: linear-gradient(135deg, #3b82f6, #1d4ed8);
                color: white;
                border: 1px solid #1e40af;
            }
            
            @keyframes slideIn {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(400px);
                    opacity: 0;
                }
            }
            
            .notification-exit {
                animation: slideOut 0.3s ease-out forwards;
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        notification.classList.add('notification-exit');
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// ===========================
// Intersection Observer for Animations
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project cards, skill categories, and certificate cards
document.querySelectorAll('.project-card, .skill-category, .certificate-card, .experience-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// ===========================
// Active Navigation Link Highlight
// ===========================
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add active link style
const style = document.createElement('style');
style.innerHTML = `
    .nav-link.active {
        color: var(--primary);
    }
    
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// ===========================
// Email Form Integration (Optional)
// ===========================
// To enable email sending, uncomment and configure with a service like EmailJS
/*
function sendEmail(name, email, message) {
    // Example using EmailJS (https://www.emailjs.com/)
    // First, install: npm install @emailjs/browser
    // Then, initialize in your HTML before this script
    
    emailjs.init('YOUR_PUBLIC_KEY_HERE'); // Get from EmailJS dashboard
    
    emailjs.send('service_ID', 'template_ID', {
        from_name: name,
        from_email: email,
        message: message,
        to_email: 'your@email.com'
    })
    .then(() => {
        showNotification('Email sent successfully!', 'success');
    })
    .catch((error) => {
        console.error('Error sending email:', error);
        showNotification('Failed to send email. Please try again.', 'error');
    });
}
*/

// ===========================
// Initialize on Page Load
// ===========================
window.addEventListener('load', () => {
    console.log('Portfolio loaded successfully!');
    // Add any initialization code here
});
