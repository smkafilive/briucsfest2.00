// Data for dynamic content
const eventsData = [
    {
        date: "📅 Day 1 – [9 November]",
        events: [
            {
                time: "10:00-12:00 AM",
                name: "Opening Ceremony"
            },
            {
                time: "12:00 PM-1:00 PM",
                name: "Art Olympiad"
            },
            {
                time: "2:00 PM–4:00 PM",
                name: "Math Olympiad"
            }
        ],
        eligibility: "All Participants",
        fee: "FREE",
        buttonText: "Register for Day 1",
        buttonLink: "#"
    },
    {
        date: "📅 Day 2 – [10 November]",
        events: [
            {
                time: "10:00 AM-12:00 PM",
                name: "ICT Olympiad"
            },
            {
                time: "12:00 PM-4:00 PM",
                name: "Free Fire Grand Finale"
            },
            {
                time: "4:30 PM",
                name: "Prize Giving Ceremony"
            }
        ],
        eligibility: "Class 11-12 & Team Contest",
        fee: "ICT Olympiad: BDT 100, Free Fire: FREE",
        buttonText: "Register for Day 2",
        buttonLink: "#"
    },
    {
        date: "📅 Day 3 – [11 November]",
        events: [
            {
                time: "10:00 AM-11:00 AM",
                name: "AI Photography"
            },
            {
                time: "11:30 AM-3:30 PM",
                name: "PUBG Mobile Grand Finale"
            },
            {
                time: "3:30 PM",
                name: "Final Prize Giving Ceremony"
            }
        ],
        eligibility: "College & University Students",
        fee: "FREE",
        buttonText: "Register for Day 3",
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
    
    eventsData.forEach(day => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        
        let eventsHTML = '';
        day.events.forEach(event => {
            eventsHTML += `
                <div class="event-item">
                    <div class="event-time">${event.time}</div>
                    <div class="event-name">${event.name}</div>
                </div>
            `;
        });
        
        eventCard.innerHTML = `
            <div class="event-header">
                <div class="event-date">${day.date}</div>
            </div>
            <div class="event-content">
                <div class="event-schedule">
                    ${eventsHTML}
                </div>
                <div class="event-details">
                    <div class="event-eligibility">Eligibility: ${day.eligibility}</div>
                    <div class="event-fee">Registration Fee: ${day.fee}</div>
                </div>
                <div class="event-actions">
                    <a href="${day.buttonLink}" target="_blank" class="btn">${day.buttonText}</a>
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
