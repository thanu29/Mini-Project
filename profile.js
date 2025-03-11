document.addEventListener("DOMContentLoaded", function () {
    const carouselContent = document.querySelector(".carousel-content");
    const items = document.querySelectorAll(".carousel-item");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carouselContent.style.transition = "transform 0.5s ease-in-out";
        carouselContent.style.transform = `translateX(${offset}%)`;
    }

    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    });

    prevButton.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    });

    // Auto-scroll every 3 seconds
    setInterval(() => {
        nextButton.click();
    }, 3000);

    // Initial positioning
    updateCarousel();
});
