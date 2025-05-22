document.addEventListener('DOMContentLoaded', function() {
        // Select elements
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        const navLinks = document.querySelectorAll('.nav-list a');
        
        // Toggle mobile menu
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            this.setAttribute('aria-expanded', this.classList.contains('active'));
        });
        
        // Close menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 800) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    hamburger.setAttribute('aria-expanded', 'false');
                }
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (window.innerWidth <= 800 && 
                !e.target.closest('.nav-container') && 
                navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
        
        // Handle window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 800) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });

        // Filter portfolio items
    const filterButtons = document.querySelectorAll('.category-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-category');
            
            // Filter items
            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Animation on scroll
    const animateOnScroll = function() {
        const items = document.querySelectorAll('.portfolio-item');
        
        items.forEach(item => {
            const itemPosition = item.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (itemPosition < screenPosition) {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial state for animation
    window.addEventListener('load', function() {
        const items = document.querySelectorAll('.portfolio-item');
        items.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });
        
        animateOnScroll();
    });

    window.addEventListener('scroll', animateOnScroll);

    });

     // Add current page indicator to navigation
     const currentPage = window.location.pathname;
     const navLinks = document.querySelectorAll('.nav-list a');
     
     navLinks.forEach(link => {
         // Check if the link's href matches the current page path
         if (link.getAttribute('href') === currentPage) {
             link.classList.add('active-page');
         }
     });

    // Function to style code blocks with simple syntax highlighting
function styleCodeBlocks() {
    const codeBlocks = document.querySelectorAll('.code-block');
    
    codeBlocks.forEach(block => {
        // Get the text content
        let code = block.textContent;
        
        // Simple syntax highlighting
        // Keywords
        code = code.replace(/\b(function|return|if|else|for|while|var|let|const|new|document|window|addEventListener|querySelector|querySelectorAll|true|false|null|undefined)\b/g, 
            '<span class="keyword">$1</span>');
            
        // Strings
        code = code.replace(/(["'])(.*?)\1/g, '<span class="string">$1$2$1</span>');
        
        // Comments
        code = code.replace(/(\/\/.*)/g, '<span class="comment">$1</span>');
        
        // Numbers
        code = code.replace(/\b(\d+)\b/g, '<span class="number">$1</span>');
        
        // Replace the content
        block.innerHTML = code;
        
        // Add CSS for the highlighting
        const style = document.createElement('style');
        style.textContent = `
            .code-block .keyword { color: #569CD6; }
            .code-block .string { color: #CE9178; }
            .code-block .comment { color: #6A9955; font-style: italic; }
            .code-block .number { color: #B5CEA8; }
        `;
        document.head.appendChild(style);
    });
}

var typed = new Typed(".auto-type", {
    strings: ["Greatness", "Excellence", "Thori's World"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})

function opentab(event, tabname) {
    // Remove active class from all tab links
    var tablinks = document.getElementsByClassName("tab-links");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
    }
    
    // Remove active class from all tab contents
    var tabcontents = document.getElementsByClassName("tab-contents");
    for (var i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.remove("active-tab");
    }
    
    // Add active class to clicked tab link
    event.currentTarget.classList.add("active-link");
    
    // Show the selected tab content
    document.getElementById(tabname).classList.add("active-tab");
}

// Back to Top Button JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get the buttons
    const backToTopBtn = document.getElementById('backToTopBtn');
    const backToTopTextBtn = document.getElementById('backToTopTextBtn');

    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) { // Show after scrolling 300px
            if (backToTopBtn) {
                backToTopBtn.classList.add('show');
            }
            // Uncomment the line below to use text version instead
            // if (backToTopTextBtn) backToTopTextBtn.classList.add('show');
        } else {
            if (backToTopBtn) {
                backToTopBtn.classList.remove('show');
            }
            // Uncomment the line below to use text version instead
            // if (backToTopTextBtn) backToTopTextBtn.classList.remove('show');
        }
    });

    // Smooth scroll to top function
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Add click event listeners
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', scrollToTop);
    }
    
    if (backToTopTextBtn) {
        backToTopTextBtn.addEventListener('click', scrollToTop);
    }

    // Alternative: To use the text version instead of arrow version,
    // uncomment these lines:
    // if (backToTopTextBtn) {
    //     backToTopTextBtn.style.display = 'block';
    // }
    // if (backToTopBtn) {
    //     backToTopBtn.style.display = 'none';
    // }
});