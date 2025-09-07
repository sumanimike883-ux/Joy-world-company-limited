// Fade In Animation on Scroll
const sections = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {  
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(section => {
  observer.observe(section);
});

// ================== STORE FUNCTIONALITY ==================

// Replace with your WhatsApp number (international format, no + or spaces)
const whatsappNumber = "233549896239"; // e.g., 233540123456 for Ghana

// Dynamic Store Products
const products = [
  { name: 'Fast Charger', price: 60, img: 'download (2).jpeg' },
  { name: 'iPhone LCD', price: 799, img: 'images (2).jpeg' },
  { name: 'Earbuds ENG-01Pro', price: 250, img: '20250325_121745.jpg' },
  { name: 'Smart Watch X-D10', price: 250, img: 'IMG-20250328-WA0002.jpg' },
  { name: '4-port USB Hub', price: 95, img: 'IMG-20250405-WA0010.jpg' },
  { name: 'Bible Cover', price: 50, img: 'IMG-20250331-WA0015.jpg' },
  { name: 'Iphone Back Case', price: 30, img: 'c9219522763346fcadbfd62f12dbb5da.jpg' },
  { name: 'XR Cover', price: 35, img: '20250404_165531.jpg' },
  // Add more here
];

const productContainer = document.getElementById('product-container');

// Function to send WhatsApp message
function sendToWhatsApp(product) {
  const message = `Hello, I would like to order:\n\n📦 Product: ${product.name}\n💵 Price: GHC ${product.price}`;
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank'); // opens WhatsApp chat in new tab
}

// Render products
products.forEach(product => {
  const div = document.createElement('div');
  div.className = 'product-card';
  div.innerHTML = `
    <img src="${product.img}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>GHC ${product.price}</p>
    <button onclick='sendToWhatsApp(${JSON.stringify(product)})'>Add to Cart</button>
  `;
  productContainer.appendChild(div);
});


  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent normal form submission

    // Collect form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // WhatsApp number (international format without +)
    const whatsappNumber = "233549896239";

    // Construct message
    const whatsappMessage = `Hello, my name is ${name}.\n\n📧 Email: ${email}\n💬 Message: ${message}`;

    // Open WhatsApp
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, "_blank");
  });

  const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});