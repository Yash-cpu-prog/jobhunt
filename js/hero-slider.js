// Array of hero images
const heroImages = [
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920",
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920"
];

let currentIndex = 0;
const heroSection = document.querySelector(".hero");

// Initial background
heroSection.style.backgroundImage = `url(${heroImages[currentIndex]})`;

// Auto change every 5 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % heroImages.length;
  heroSection.style.backgroundImage = `url(${heroImages[currentIndex]})`;
}, 5000);


