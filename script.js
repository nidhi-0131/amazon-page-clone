// =============== HERO SLIDER ===============
let currentSlide = 0;
const slides = [
    {
        title: "UNDER ₹499",
        subtitle: "Glam face makeup",
        img: "https://via.placeholder.com/800x350/FFB6C1/000000?text=Glam+Makeup+Products"
    },
    {
        title: "BIG SAVINGS",
        subtitle: "On Home Appliances",
        img: "https://via.placeholder.com/800x350/FF9999/000000?text=Home+Appliances"
    },
    {
        title: "FESTIVE DEALS",
        subtitle: "Up to 70% Off",
        img: "https://via.placeholder.com/800x350/FFCC99/000000?text=Festival+Sale"
    }
];

const heroContent = document.querySelector('.banner-content');
const heroImg = document.querySelector('.hero-img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

function showSlide(index) {
    currentSlide = index;
    heroContent.querySelector('h1').textContent = slides[index].title;
    heroContent.querySelector('h2').textContent = slides[index].subtitle;
    heroImg.src = slides[index].img;
}

// Slider Buttons
prevBtn.addEventListener('click', () => {
    let newIndex = currentSlide - 1;
    if (newIndex < 0) newIndex = slides.length - 1;
    showSlide(newIndex);
});

nextBtn.addEventListener('click', () => {
    let newIndex = currentSlide + 1;
    if (newIndex >= slides.length) newIndex = 0;
    showSlide(newIndex);
});

// =============== ADD TO CART FUNCTIONALITY ===============
let cartCount = 0;
const cartCountElement = document.querySelector('.cart-count');

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('add-to-cart')) {
        const productName = e.target.getAttribute('data-name');
        
        cartCount++;
        cartCountElement.textContent = cartCount;
        
        // Simple animation on cart icon
        const cartIcon = document.querySelector('.cart');
        cartIcon.style.transform = 'scale(1.3)';
        setTimeout(() => {
            cartIcon.style.transform = 'scale(1)';
        }, 300);

        // Show notification
        showNotification(productName);
    }
});

function showNotification(productName) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: #232f3e;
        color: white;
        padding: 12px 24px;
        border-radius: 6px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 1000;
        font-size: 14px;
    `;
    notification.textContent = `Added to cart!`;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.transition = 'opacity 0.5s';
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 500);
    }, 2000);
}

// Initialize first slide
showSlide(0);

const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');

searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();

    if (query === "") {
        alert("Please type something to search!");
        return;
    }

    // Show searching effect
    searchBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    searchBtn.disabled = true;

    // Simulate search delay
    setTimeout(() => {
        alert(`Searching for: "${query}"\n\n(We are showing fake results for demo)`);
        
        // Clear the search box after search
        searchInput.value = "";
        
        // Reset search button
        searchBtn.innerHTML = '<i class="fas fa-search"></i>';
        searchBtn.disabled = false;
    }, 800);
});