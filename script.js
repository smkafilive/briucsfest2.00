// Data for dynamic content
const eventsData = [
    {
        date: "🗓️ 09-11-2025",
        title: "Opening Ceremony",
        time: "9:00 AM",
        description: "Join us for the grand opening of BRIU CS FEST 2.0 with special guests, inspiring speeches, and captivating performances.",
        eligibility: "All Participants",
        fee: "FREE",
        buttonText: "",
        buttonLink: "#"
    },
    {
        date: "🗓️ 09-11-2025",
        title: "Art Competition",
        time: "2:00 PM",
        description: "Showcase your creativity in our digital art competition. Unleash your imagination and win exciting prizes.",
        eligibility: "For Class 1-5 Students",
        fee: "FREE",
        buttonText: "Details and Register",
        buttonLink: "https://forms.gle/m9F6ABLMZz857zn67"
    },
    {
        date: "🗓️ 09-11-2025",
        title: "Math Olympiad",
        time: "10:45 AM",
        description: "Challenge your mathematical skills in this competitive event. Solve complex problems and showcase your analytical thinking.",
        eligibility: "For Class 6-8 Students",
        fee: "BDT 100 tk",
        buttonText: "Details and Register",
        buttonLink: "https://forms.gle/kinvBvVtkMMq7D8V6"
    },
    {
        date: "🗓️ 10-11-2025",
        title: "ICT Olympiad",
        time: "10:00 AM",
        description: "Test your knowledge in information and communication technologies. Challenge yourself and prove your expertise.",
        eligibility: "For Class 11-12 Students",
        fee: "BDT 100 tk",
        buttonText: "Details and Register",
        buttonLink: "https://forms.gle/8NqtXKnR3SZ16yfy7"
    },
    {
        date: "🗓️ 10-11-2025",
        title: "Gaming Contest - Free Fire Grand Finale",
        time: "12:01 PM",
        description: "Compete in Free Fire team tournaments with exciting prizes. Show off your gaming skills and have fun with your team.",
        eligibility: "Team Contest",
        fee: "FREE",
        buttonText: "Details and Register",
        buttonLink: "#"
    },

{
        date: "🗓️ 11-11-2025",
        title: "AI Photography Contest",
        time: "10:00 AM",
        description: "Combine AI and photography in this innovative competition. Create stunning visuals with the help of artificial intelligence.",
        eligibility: "College & University Students",
        fee: "FREE",
        buttonText: "Details and Register",
        buttonLink: "https://forms.gle/fwosXJTsLQNnXNCL6"
    },
    
    {
        date: "🗓️ 11-11-2025",
        title: "Gaming Contest - PUBG Mobile",
        time: "11:30 AM",
        description: "Compete in PUBG team tournaments with exciting prizes. Show off your gaming skills and have fun with your team.",
        eligibility: "Team Contest",
        fee: "FREE",
        buttonText: "Details and Register",
        buttonLink: "#"
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
    loadEvents();
    loadHighlights();
});

// Navbar functionality
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const registerButtons = document.querySelectorAll('a[href="#events"]');

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
    const eventDate = new Date('November 9, 2025 10:00:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = eventDate - now;
        
        if (distance < 0) {
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }
    
    // Update countdown immediately and then every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
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
                <div class="event-time">${event.time}</div>
                <p class="event-description">${event.description}</p>
                <div class="event-details">
                    <div class="event-eligibility">Eligibility: ${event.eligibility}</div>
                    <div class="event-fee">Registration Fee: ${event.fee}</div>
                </div>
                <div class="event-actions">
                    <a href="${event.buttonLink}" target="_blank" class="btn">${event.buttonText}</a>
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
