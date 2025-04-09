// particles.js configuration
document.addEventListener('DOMContentLoaded', function() {
    // initialize particles.js
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#64FFDA"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#64FFDA",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
});

// mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    mobileMenu.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // close mobile menu when clicking on a nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});

// experience tabs
document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const experienceItems = document.querySelectorAll('.experience-item');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.dataset.id;
            
            // remove active class from all buttons and items
            tabBtns.forEach(btn => btn.classList.remove('active'));
            experienceItems.forEach(item => item.classList.remove('active'));
            
            // add active class to clicked button and corresponding item
            btn.classList.add('active');
            document.getElementById(id).classList.add('active');
        });
    });
});

// scroll animation
document.addEventListener('DOMContentLoaded', function() {
    // add fade-in animation to sections when scrolled into view
    const sections = document.querySelectorAll('section');
    
    const fadeInOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
    };
    
    const fadeInObserver = new IntersectionObserver(function(entries, fadeInObserver) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('fade-in');
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, fadeInOptions);
    
    sections.forEach(section => {
        section.classList.add('fade-out');
        fadeInObserver.observe(section);
    });
});

// form submission (placeholder for now)
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // display confirmation message (in a real implementation, this would send data to a server)
            alert(`Thank you for your message, ${name}! This is only for showcase purposes doesn't actually send emails.`);
            
            contactForm.reset();
        });
    }
});

// typewriter effect for hero section
document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.querySelector('.name');
    const titleElement = document.querySelector('.title');
    
    // add CSS classes for animation
    nameElement.classList.add('typewriter');
    setTimeout(() => {
        titleElement.classList.add('typewriter');
    }, 300);
});

// add smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // offset for fixed navbar
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// add CSS class to navbar on scroll
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});

// add additional CSS for animations again
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        .fade-out {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .fade-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .typewriter {
            overflow: hidden;
            border-right: .15em solid var(--teal);
            white-space: nowrap;
            margin: 0;
            animation: 
                typing 3.5s steps(40, end),
                blink-caret .75s step-end infinite;
        }
        
        @keyframes typing {
            from { width: 0 }
            to { width: 100% }
        }
        
        @keyframes blink-caret {
            from, to { border-color: transparent }
            50% { border-color: var(--teal); }
        }
        
        .navbar.scrolled {
            box-shadow: 0 10px 30px -10px var(--navy-shadow);
        }
    `;
    document.head.appendChild(style);
});