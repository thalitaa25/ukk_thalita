// Navbar active link effect
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.school-navbar-minimal-link');
  const sections = Array.from(navLinks).map(link => {
    const href = link.getAttribute('href');
    return document.querySelector(href);
  });

  // Active on click
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Active on scroll
  window.addEventListener('scroll', function() {
    let current = '';
    sections.forEach((section, idx) => {
      if (!section) return;
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = navLinks[idx].getAttribute('href');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === current) {
        link.classList.add('active');
      }
    });
  });

  // Back to top button
  const backToTopBtn = document.getElementById('backToTop');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = 'flex';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function() {
      const heroSection = document.getElementById('beranda');
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }
});
// Navbar scroll effect
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('schoolNavbar');
  if (!navbar) return;
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
// SMK Thalita Website Main JavaScript

class ThalitaWebsite {
    constructor() {
        this.init();
    }

    init() {
        this.setupSmoothScrolling();
        this.setupScrollEffects();
        this.setupBackToTop();
        this.setupFormSubmission();
        this.setupAnimations();
        this.setupCounterAnimation();
    }

    // Smooth scrolling for navigation links
    setupSmoothScrolling() {
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
    }

    // Navbar active link highlighting and scroll effects
    setupScrollEffects() {
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            const backToTopBtn = document.getElementById('backToTop');
            
            // Navbar scroll effect
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            
            // Back to top button
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
            
            // Active link highlighting
            this.updateActiveNavLink();
        });
    }

    // Update active navigation link based on scroll position
    updateActiveNavLink() {
        let current = '';
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }

    // Back to top button functionality
    setupBackToTop() {
        const backToTopBtn = document.getElementById('backToTop');
        if (backToTopBtn) {
            backToTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }

    // Form submission with loading state
    setupFormSubmission() {
        const form = document.querySelector('form');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmit(e.target);
            });
        }
    }

    handleFormSubmit(form) {
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.innerHTML = '<span class="loading-spinner me-2"></span>Mengirim...';
        submitBtn.disabled = true;
        
        // Simulate sending (replace with actual form submission)
        setTimeout(() => {
            alert('Terima kasih! Pesan Anda telah terkirim. Tim kami akan segera menghubungi Anda.');
            form.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    }

    // Fade in animation on scroll
    setupAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        }, observerOptions);

        // Add fade-in class to cards and observe them
        document.querySelectorAll('.feature-card').forEach(card => {
            card.classList.add('fade-in');
            observer.observe(card);
        });
    }

    // Counter animation for statistics
    setupCounterAnimation() {
        const heroSection = document.querySelector('.hero-section');
        if (!heroSection) return;

        const heroObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounters();
                    heroObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        heroObserver.observe(heroSection);
    }

    animateCounters() {
        const counters = document.querySelectorAll('.stats-counter');
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            
            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                counter.textContent = Math.floor(current);
            }, 16);
        });
    }

    // Utility method to load component
    static async loadComponent(selector, componentPath) {
        try {
            const response = await fetch(componentPath);
            const html = await response.text();
            const element = document.querySelector(selector);
            if (element) {
                element.innerHTML = html;
            }
        } catch (error) {
            console.error(`Error loading component ${componentPath}:`, error);
        }
    }
}

// Initialize website when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ThalitaWebsite();
});
