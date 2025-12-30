        // Create floating particles for background
        function createParticles() {
            const container = document.getElementById('particles');
            const particleCount = 30;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                // Random size between 2px and 6px
                const size = Math.random() * 4 + 2;
                particle.style.width = ${size}px;
                particle.style.height = ${size}px;
                
                // Random position
                particle.style.left = ${Math.random() * 100}%;
                
                // Random animation delay and duration
                const delay = Math.random() * 20;
                const duration = 15 + Math.random() * 20;
                particle.style.animationDelay = ${delay}s;
                particle.style.animationDuration = ${duration}s;
                
                // Random opacity
                particle.style.opacity = Math.random() * 0.5 + 0.1;
                
                container.appendChild(particle);
            }
        }
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Navbar background on scroll
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.style.backgroundColor = 'rgba(18, 18, 18, 0.98)';
                navbar.style.padding = '10px 0';
            } else {
                navbar.style.backgroundColor = 'rgba(18, 18, 18, 0.95)';
                navbar.style.padding = '15px 0';
            }
        });
        
        // Form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
        
        // Animate skill bars when they come into view
        const observerOptions = {
            threshold: 0.5
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const skillBars = entry.target.querySelectorAll('.skill-progress');
                    skillBars.forEach(bar => {
                        // Trigger the animation by reapplying the width
                        const width = bar.style.getPropertyValue('--target-width');
                        bar.style.width = '0';
                        setTimeout(() => {
                            bar.style.width = width;
                        }, 100);
                    });
                }
            });
        }, observerOptions);
        
        // Initialize particles and observer
        document.addEventListener('DOMContentLoaded', function() {
            createParticles();
            
            // Observe skills section
            const skillsSection = document.getElementById('skills');
            if (skillsSection) {
                observer.observe(skillsSection);
            }
        });
