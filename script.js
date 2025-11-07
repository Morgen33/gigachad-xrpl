// Smooth scroll for anchor links
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

// Copy XRPL address functionality
const copyAddressBtn = document.getElementById('copyAddress');
if (copyAddressBtn) {
    copyAddressBtn.addEventListener('click', function() {
        // Get the contract address from the displayed element or use default
        const contractAddressEl = document.getElementById('contractAddress');
        const xrplAddress = contractAddressEl ? contractAddressEl.textContent.trim() : 'ra74RsrET14Jzz9sGBgzdo1C1AdzMQTZ65';
        
        navigator.clipboard.writeText(xrplAddress).then(() => {
            const originalText = this.textContent;
            this.textContent = 'COPIED!';
            this.style.backgroundColor = '#00ff00';
            
            setTimeout(() => {
                this.textContent = originalText;
                this.style.backgroundColor = '';
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy:', err);
            alert('Failed to copy address. Please copy manually: ' + xrplAddress);
        });
    });
}

// Buy button handlers - scroll to exchanges section
document.querySelectorAll('.buy-btn-nav, .buy-btn-hero, .buy-btn-cta').forEach(btn => {
    btn.addEventListener('click', function() {
        const exchangesSection = document.getElementById('exchanges');
        if (exchangesSection) {
            exchangesSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Read thesis button handler
const readThesisBtn = document.querySelector('.read-thesis-btn');
if (readThesisBtn) {
    readThesisBtn.addEventListener('click', function() {
        const thesisSection = document.getElementById('thesis');
        if (thesisSection) {
            thesisSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.98)';
    } else {
        navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
    }
    
    lastScroll = currentScroll;
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Exchange item click handlers
document.querySelectorAll('.exchange-item').forEach(item => {
    item.addEventListener('click', function() {
        // Add your exchange link logic here
        console.log('Exchange clicked:', this.textContent);
    });
});

