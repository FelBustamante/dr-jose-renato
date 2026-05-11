// Mobile menu
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('navLinks');
        function toggleMenu() { hamburger.classList.toggle('open'); navLinks.classList.toggle('open'); }
        function closeMenu() { hamburger.classList.remove('open'); navLinks.classList.remove('open'); }

        // FAQ accordion
        function toggleFaq(btn) {
            const item = btn.parentElement;
            const wasActive = item.classList.contains('active');
            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
            if (!wasActive) item.classList.add('active');
        }

        // Reveal on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    const siblings = entry.target.parentElement?.querySelectorAll('.reveal') || [];
                    const idx = Array.from(siblings).indexOf(entry.target);
                    entry.target.style.transitionDelay = `${Math.min(idx * 80, 400)}ms`;
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // Lightbox
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightboxImg');
        function openLightbox(src) { lightboxImg.src = src; lightbox.classList.add('active'); }
        function closeLightbox() { lightbox.classList.remove('active'); }

        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#') return;
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) target.scrollIntoView({ behavior: 'smooth' });
            });
        });