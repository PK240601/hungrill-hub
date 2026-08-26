/* -------------------------------------------------------------
   Hungrill Hub - Interactive JavaScript Components
   ------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. Mobile Menu Drawer Toggle
    // ==========================================
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close drawer when a nav link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // ==========================================
    // 2. Interactive Menu Filter & Live Search
    // ==========================================
    const searchInput = document.getElementById('menu-search');
    const filterPills = document.querySelectorAll('.filter-pill');
    const menuCards = document.querySelectorAll('.menu-card');
    const noResults = document.getElementById('no-results');

    let currentCategory = 'all';
    let searchQuery = '';

    function filterMenu() {
        let visibleCount = 0;

        menuCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            const cardTitle = card.querySelector('h3').textContent.toLowerCase();
            const cardDesc = card.querySelector('.menu-desc').textContent.toLowerCase();

            const matchesCategory = (currentCategory === 'all' || cardCategory === currentCategory);
            const matchesSearch = (cardTitle.includes(searchQuery) || cardDesc.includes(searchQuery));

            if (matchesCategory && matchesSearch) {
                card.classList.remove('hidden');
                visibleCount++;
            } else {
                card.classList.add('hidden');
            }
        });

        if (visibleCount === 0) {
            noResults.classList.remove('hidden');
        } else {
            noResults.classList.add('hidden');
        }
    }

    // Category click handler
    filterPills.forEach(pill => {
        pill.addEventListener('click', () => {
            filterPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            currentCategory = pill.getAttribute('data-category');
            filterMenu();
        });
    });

    // Live search typing handler
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase().trim();
            filterMenu();
        });
    }

    // ==========================================
    // 3. Testimonials Carousel
    // ==========================================
    const track = document.getElementById('carousel-track');
    const slides = Array.from(track ? track.children : []);
    const nextButton = document.getElementById('next-btn');
    const prevButton = document.getElementById('prev-btn');
    const dotsContainer = document.getElementById('carousel-dots');

    if (track && slides.length > 0) {
        let currentIndex = 0;
        let slideInterval;
        const autoPlayDelay = 5000;

        // Generate navigation dots dynamically
        slides.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.classList.add('carousel-dot');
            if (index === 0) dot.classList.add('active');
            dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
            dotsContainer.appendChild(dot);
        });

        const dots = Array.from(dotsContainer.children);

        // Move to specific slide index
        const moveToSlide = (index) => {
            if (index < 0) {
                currentIndex = slides.length - 1;
            } else if (index >= slides.length) {
                currentIndex = 0;
            } else {
                currentIndex = index;
            }

            track.style.transform = `translateX(-${currentIndex * 100}%)`;
            
            // Update active dot indicators
            dots.forEach(dot => dot.classList.remove('active'));
            dots[currentIndex].classList.add('active');
        };

        // Event listeners for arrows
        nextButton.addEventListener('click', () => {
            moveToSlide(currentIndex + 1);
            resetAutoPlay();
        });

        prevButton.addEventListener('click', () => {
            moveToSlide(currentIndex - 1);
            resetAutoPlay();
        });

        // Event listeners for dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                moveToSlide(index);
                resetAutoPlay();
            });
        });

        // Setup Autoplay
        const startAutoPlay = () => {
            slideInterval = setInterval(() => {
                moveToSlide(currentIndex + 1);
            }, autoPlayDelay);
        };

        const resetAutoPlay = () => {
            clearInterval(slideInterval);
            startAutoPlay();
        };

        // Pause on Hover
        track.addEventListener('mouseenter', () => clearInterval(slideInterval));
        track.addEventListener('mouseleave', startAutoPlay);

        // Initialize Carousel autoplay
        startAutoPlay();
    }

    // ==========================================
    // 4. Scroll Active Nav Link Highlight & Reveal
    // ==========================================
    const sections = document.querySelectorAll('section');
    const scrollRevealElements = document.querySelectorAll('.scroll-reveal');

    // Section scroll indicator options
    const sectionObserverOptions = {
        root: null,
        threshold: 0.35, // Trigger when 35% of the section is visible
        rootMargin: "-80px 0px 0px 0px" // Account for fixed navbar height
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeId = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${activeId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, sectionObserverOptions);

    sections.forEach(section => sectionObserver.observe(section));

    // Scroll reveal fade-in animations
    const revealObserverOptions = {
        root: null,
        threshold: 0.1, // Trigger when 10% is visible
        rootMargin: "0px"
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Stop observing once revealed
                revealObserver.unobserve(entry.target);
            }
        });
    }, revealObserverOptions);

    scrollRevealElements.forEach(element => revealObserver.observe(element));
});
