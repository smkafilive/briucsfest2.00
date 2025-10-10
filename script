// Data for dynamic content
const eventsData = [
    {
        date: "🗓️ October 27",
        title: "Opening Ceremony",
        description: "Join us for the grand opening of BRIU CS FEST 2.0 with special guests, inspiring speeches, and captivating performances."
    },
    {
        date: "🗓️ October 27",
        title: "Art Competition",
        description: "Showcase your creativity in our digital art competition. Unleash your imagination and win exciting prizes."
    },
    {
        date: "🗓️ October 27",
        title: "ICT Olympiad",
        description: "Test your knowledge in information and communication technologies. Challenge yourself and prove your expertise."
    },
    {
        date: "🗓️ October 28",
        title: "Math Olympiad",
        description: "Challenge your mathematical skills in this competitive event. Solve complex problems and showcase your analytical thinking."
    },
    {
        date: "🗓️ October 28",
        title: "AI Photography Contest",
        description: "Combine AI and photography in this innovative competition. Create stunning visuals with the help of artificial intelligence."
    },
    {
        date: "🗓️ October 29",
        title: "Science Project Showcase",
        description: "Present your innovative science projects to a panel of judges. Demonstrate your research and win recognition."
    },
    {
        date: "🗓️ October 29",
        title: "Gaming Contest",
        description: "Compete in various gaming tournaments with exciting prizes. Show off your gaming skills and have fun."
    },
    {
        date: "🗓️ October 29",
        title: "Line Following Car Contest",
        description: "Showcase your robotics skills in this autonomous car competition. Build and program your own line-following vehicle."
    },
    {
        date: "🗓️ October 29",
        title: "Prize Giving Ceremony & Cultural Night",
        description: "Celebrate the winners and enjoy cultural performances. A night of recognition, entertainment, and celebration."
    }
];

const highlightsData = [
    {
        icon: "fas fa-lightbulb",
        title: "Innovation Hub",
        description: "Explore cutting-edge technologies and innovative projects from students and professionals."
    },
    {
        icon: "fas fa-users",
        title: "Networking Opportunities",
        description: "Connect with industry experts, potential employers, and like-minded tech enthusiasts."
    },
    {
        icon: "fas fa-trophy",
        title: "Competitions & Prizes",
        description: "Participate in various competitions and win exciting prizes and recognition."
    },
    {
        icon: "fas fa-chalkboard-teacher",
        title: "Workshops & Seminars",
        description: "Learn from industry leaders through interactive workshops and informative seminars."
    }
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavbar();
    initCountdown();
    initScrollAnimations();
    initCodingRain();
    loadEvents();
    loadHighlights();
});

// Navbar functionality
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const registerButtons = document.querySelectorAll('a[href="#registration"]');

    // Sticky navbar on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Hamburger menu toggle
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.innerHTML = navMenu.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });

    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Close mobile menu if open
                navMenu.classList.remove('active');
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
                
                // Scroll to section
                window.scrollTo({
                    top: targetSection.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Smooth scroll for register buttons
    registerButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = button.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Countdown timer
function initCountdown() {
    const eventDate = new Date('October 27, 2024 09:00:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = eventDate - now;
        
        if (distance < 0) {
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    }
    
    // Update countdown immediately and then every minute
    updateCountdown();
    setInterval(updateCountdown, 60000);
}

// Coding Rain Animation
function initCodingRain() {
    const codingRain = document.getElementById('codingRain');
    const characters = '01{}[]()<>;:.,!?@#$%^&*+-=~|/\\abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    // Create multiple rain columns
    for (let i = 0; i < 50; i++) {
        const column = document.createElement('div');
        column.className = 'rain-column';
        column.style.left = `${Math.random() * 100}%`;
        column.style.animationDelay = `${Math.random() * 15}s`;
        column.style.animationDuration = `${10 + Math.random() * 10}s`;
        
        // Add random characters to the column
        let content = '';
        for (let j = 0; j < 30; j++) {
            content += characters.charAt(Math.floor(Math.random() * characters.length)) + '<br>';
        }
        column.innerHTML = content;
        
        codingRain.appendChild(column);
    }
}

// Load events dynamically
function loadEvents() {
    const eventsGrid = document.querySelector('.events-grid');
    
    eventsData.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        eventCard.innerHTML = `
            <div class="event-header">
                <div class="event-date">${event.date}</div>
            </div>
            <div class="event-content">
                <h3 class="event-title">${event.title}</h3>
                <p class="event-description">${event.description}</p>
                <div class="event-actions">
                    <a href="#" class="btn btn-outline">Details</a>
                    <a href="#registration" class="btn">Registration</a>
                </div>
            </div>
        `;
        eventsGrid.appendChild(eventCard);
    });
}

// Load highlights dynamically
function loadHighlights() {
    const highlightsGrid = document.querySelector('.highlights-grid');
    
    highlightsData.forEach(highlight => {
        const highlightCard = document.createElement('div');
        highlightCard.className = 'highlight-card';
        highlightCard.innerHTML = `
            <div class="highlight-icon">
                <i class="${highlight.icon}"></i>
            </div>
            <h3 class="highlight-title">${highlight.title}</h3>
            <p class="highlight-description">${highlight.description}</p>
        `;
        highlightsGrid.appendChild(highlightCard);
    });
}

// Scroll animations
function initScrollAnimations() {
    const developerCredit = document.querySelector('.developer-credit');
    
    function checkScroll() {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        
        // Show developer credit when near bottom of page
        if (scrollPosition + windowHeight > documentHeight - 100) {
            developerCredit.classList.add('visible');
        } else {
            developerCredit.classList.remove('visible');
        }
    }
    
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on initial load
}
