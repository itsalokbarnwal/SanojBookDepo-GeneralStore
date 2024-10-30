// Responsive Navigation Menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');

// Toggle navigation menu on smaller screens
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scrolling for Internal Links
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Lightbox Functionality
const productImages = document.querySelectorAll('.product-card img');
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
lightbox.innerHTML = `
    <span id="lightbox-close">&times;</span>
    <img id="lightbox-img" src="" alt="Product Image">
`;
document.body.appendChild(lightbox);

// Open Lightbox on Image Click
productImages.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        const lightboxImg = document.getElementById('lightbox-img');
        lightboxImg.src = image.src;
        lightboxImg.alt = image.alt;
    });
});

// Close Lightbox
document.getElementById('lightbox-close').addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
        lightbox.style.display = 'none';
    }
});

// Resize Event for Lightbox Responsiveness
window.addEventListener('resize', () => {
    if (lightbox.style.display === 'flex') {
        lightbox.style.width = window.innerWidth + 'px';
        lightbox.style.height = window.innerHeight + 'px';
    }
});

// Initialize Lightbox for Responsive Behavior
const lightboxStyle = document.createElement('style');
lightboxStyle.innerHTML = `
    #lightbox {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }
    #lightbox img {
        max-width: 90%;
        max-height: 90%;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }
    #lightbox-close {
        position: absolute;
        top: 20px;
        right: 30px;
        font-size: 30px;
        color: white;
        cursor: pointer;
    }
`;
document.head.appendChild(lightboxStyle);
