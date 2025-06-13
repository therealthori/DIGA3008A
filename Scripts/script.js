document.addEventListener('DOMContentLoaded', function() {
    // Get all dropdown elements
    const dropdowns = document.querySelectorAll('.dropdown');
                
    // Add click event for mobile devices
    dropdowns.forEach(dropdown => {
        const dropbtn = dropdown.querySelector('.dropbtn');
        
        dropbtn.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) { // Check if mobile
                e.preventDefault();
                const content = this.nextElementSibling;
                content.style.display = content.style.display === 'block' ? 'none' : 'block';
            }
        });
    });

    function updateProgressBar(){
        const {scrollTop, scrollHeight} = document.documentElement;
        const scrollPercent = scrollTop / (scrollHeight - window.innerHeight) * 100 + '%';
        console.log(scrollPercent);

        document.querySelector('#progress-bar').style.setProperty('--progress', scrollPercent);
    }
    
    document.addEventListener('scroll', updateProgressBar);

    // Highlight current page in navigation
function setActivePage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-list a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        
        // Remove active class from all links first
        link.classList.remove('active-page');
        
        // Add active class to matching link
        if (linkPage === currentPage) {
            link.classList.add('active-page');
        }
        
        // Special case for index page
        if (currentPage === 'index.html' && linkPage === '../../index.html') {
            link.classList.add('active-page');
        }
    });
}

// Call the function when page loads
setActivePage();
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.matches('.dropbtn')) {
            const dropdowns = document.querySelectorAll('.dropdown-content');
            dropdowns.forEach(dropdown => {
                if (dropdown.style.display === 'block' && window.innerWidth <= 768) {
                    dropdown.style.display = 'none';
                }
            });
        }
    });
    
        // Select elements
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        const navLinks = document.querySelectorAll('.nav-list a');
        const currentPage = window.location.pathname;
        
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
                if (link.getAttribute('href') === currentPage) {
                    link.classList.add('active-page');
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

        const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-list a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active-page');
        }
    });

    // Back-to-top button functionality
    const backToTop = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.style.display = 'flex';
        } else {
            backToTop.style.display = 'none';
        }
    });

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/hide back to top button
window.addEventListener('scroll', function() {
    const backToTop = document.querySelector('.back-to-top');
    if (window.pageYOffset > 300) {
        backToTop.style.display = 'flex';
    } else {
        backToTop.style.display = 'none';
    }
});

// Smooth scrolling for internal links
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

// Enhanced image gallery interactions
document.querySelectorAll('.image-gallery img').forEach(img => {
    img.addEventListener('click', function() {
        // Create modal for full-size image viewing
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            cursor: pointer;
        `;
        
        const modalImg = document.createElement('img');
        modalImg.src = this.src;
        modalImg.style.cssText = `
            max-width: 90%;
            max-height: 90%;
            border-radius: 8px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        `;
        
        modal.appendChild(modalImg);
        document.body.appendChild(modal);
        
        modal.addEventListener('click', () => {
            document.body.removeChild(modal);
        });
    });
});

// Add animation to goal cards on scroll
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

// Apply animation to goal cards
document.querySelectorAll('.goal-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// Apply animation to process steps
document.querySelectorAll('.process-step').forEach((step, index) => {
    step.style.opacity = '0';
    step.style.transform = 'translateX(-30px)';
    step.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(step);
});

// Color swatch interaction
document.querySelectorAll('.color-swatch').forEach(swatch => {
    swatch.addEventListener('click', function() {
        const color = window.getComputedStyle(this).backgroundColor;
        const tempInput = document.createElement('input');
        tempInput.value = this.textContent;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        
        // Show feedback
        const feedback = document.createElement('div');
        feedback.textContent = 'Color code copied!';
        feedback.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #552601;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            z-index: 10000;
            font-size: 14px;
        `;
        document.body.appendChild(feedback);
        
        setTimeout(() => {
            document.body.removeChild(feedback);
        }, 2000);
    });
});

// Add hover effect to reference cards
document.querySelectorAll('.reference-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });
});

// Ensure this is defined before the API script loads
function initMap() {
    try {
        const melroseNorth = { lat: -26.1125, lng: 28.0589 };
        
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 15,
            center: melroseNorth,
            mapTypeId: "roadmap",
            styles: [
                {
                    featureType: "poi",
                    stylers: [{ visibility: "off" }]
                }
            ]
        });

        new google.maps.Marker({
            position: melroseNorth,
            map: map,
            title: "Melrose North, Johannesburg",
            icon: {
                url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png"
            }
        });
    } catch (error) {
        console.error("Google Maps initialization error:", error);
        // Fallback content or error message
        document.getElementById("map").innerHTML = 
            '<div style="padding: 20px; background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb;">' +
            'Map could not be loaded. Please check your internet connection and try again.' +
            '</div>';
    }
}

// Make sure the function is available globally
window.initMap = initMap;

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const clearSearch = document.getElementById('clearSearch');
    const blogCards = document.querySelectorAll('.blog-card');
    const noResultsMsg = document.querySelector('.no-results');

    let searchTimeout;

    // Highlight matching text inside element
    function highlightText(element, searchTerm) {
      const text = element.textContent;
      if (!searchTerm) {
        element.textContent = text;
        return;
      }
      const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
      const newHTML = text.replace(regex, '<span class="highlight">$1</span>');
      element.innerHTML = newHTML;
    }

    // Reset highlighting on all blog cards titles and excerpts
    function resetHighlights() {
      blogCards.forEach(card => {
        const title = card.querySelector('.blog-card-title');
        const excerpt = card.querySelector('.blog-card-excerpt');
        title.textContent = title.textContent; // Reset to plain text
        excerpt.textContent = excerpt.textContent;
      });
    }

    // Main search function
    function performSearch() {
      const searchTerm = searchInput.value.toLowerCase().trim();
      resetHighlights();

      let hasResults = false;

      blogCards.forEach(card => {
        const title = card.querySelector('.blog-card-title');
        const excerpt = card.querySelector('.blog-card-excerpt');

        const titleText = title.textContent.toLowerCase();
        const excerptText = excerpt.textContent.toLowerCase();

        if (searchTerm === '' || titleText.includes(searchTerm) || excerptText.includes(searchTerm)) {
          card.style.display = 'flex';
          hasResults = true;
          if (searchTerm) {
            if (titleText.includes(searchTerm)) highlightText(title, searchTerm);
            if (excerptText.includes(searchTerm)) highlightText(excerpt, searchTerm);
          }
        } else {
          card.style.display = 'none';
        }
      });

      // Show or hide no results message
      noResultsMsg.style.display = hasResults ? 'none' : 'block';

      // Show or hide clear button based on input
      if (searchTerm.length > 0) {
        clearSearch.classList.add('visible');
        clearSearch.setAttribute('aria-hidden', 'false');
      } else {
        clearSearch.classList.remove('visible');
        clearSearch.setAttribute('aria-hidden', 'true');
      }
    }

    // Event Listeners
    searchButton.addEventListener('click', performSearch);

    searchInput.addEventListener('keyup', event => {
      if (event.key === 'Enter') {
        performSearch();
      }

      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(performSearch, 300);
    });

    clearSearch.addEventListener('click', () => {
      searchInput.value = '';
      performSearch();
      searchInput.focus();
    });

    searchInput.addEventListener('input', () => {
      if (searchInput.value.trim() === '') {
        performSearch();
      }
    });

    // Initial search to show all
    performSearch();
  });