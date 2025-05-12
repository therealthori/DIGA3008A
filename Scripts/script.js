// Image hover functionality
document.addEventListener('DOMContentLoaded', function() {
    // First fix: Proper image hover functionality
    const services = document.querySelectorAll('.service2');
    const serviceImages = document.querySelectorAll('.service_container .service2 .service_Title img');

    if (services.length && serviceImages.length) {
        services.forEach((elem, index) => {
            elem.addEventListener('mouseenter', () => {
                serviceImages.forEach((img) => {
                    img.classList.remove('image_show');
                });
                serviceImages[index].classList.add('image_show');
            });

            elem.addEventListener('mouseleave', () => {
                serviceImages[index].classList.remove('image_show');
            });
        });
    }

    // Mobile navigation functionality
    const check = document.getElementById('check');
    const bars = document.querySelector('.bars');
    const navLinks = document.querySelectorAll('nav ul li a');
    const navUl = document.querySelector('nav ul');

    if (!check || !bars || !navUl) {
        console.error("Essential navigation elements not found!");
        return;
    }

    // Toggle mobile menu
    bars.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent event from bubbling to document
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 800) {
                check.checked = false;
                navUl.style.left = '-100%';
                navUl.classList.remove('menu-open');
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 800 && check.checked && 
            !e.target.closest('.navbar') && 
            !e.target.closest('.bars')) {
            check.checked = false;
            navUl.style.left = '-100%';
            navUl.classList.remove('menu-open');
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId.length > 1) { // Skip if just "#"
                e.preventDefault();
                const target = document.querySelector(targetId);
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 60,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Menu open/close animation
    check.addEventListener('change', function() {
        if (this.checked) {
            navUl.style.left = '0';
            navUl.classList.add('menu-open');
        } else {
            navUl.style.left = '-100%';
            navUl.classList.remove('menu-open');
        }
    });

    console.log("All JavaScript functionality initialized");
});