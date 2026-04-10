let currentIndex = 0;
let images = document.querySelectorAll(".gallery img");
let lightbox = document.getElementById("lightbox");
let lightboxImg = document.getElementById("lightbox-img");

function openLightbox(index) {
    currentIndex = index;
    lightbox.style.display = "flex";
    lightboxImg.src = images[currentIndex].src;
}

function closeLightbox() {
    lightbox.style.display = "none";
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImg.src = images[currentIndex].src;
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentIndex].src;
}
function filterImages(category, button) {
    let images = document.querySelectorAll(".gallery img");
    let buttons = document.querySelectorAll(".buttons button");

    // Remove active class from all buttons
    buttons.forEach(btn => btn.classList.remove("active"));

    // Add active class to clicked button
    button.classList.add("active");

    images.forEach(img => {
        if (category === "all") {
            img.style.display = "block";
        } else {
            if (img.classList.contains(category)) {
                img.style.display = "block";
            } else {
                img.style.display = "none";
            }
        }
    });
}

function toggleDarkMode() {
    document.body.classList.toggle("dark");
}