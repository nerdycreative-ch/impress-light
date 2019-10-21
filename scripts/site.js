// Change image on thumbnail click 
function showImage(imgPath, imgText) {
    var curImage = document.getElementById('currentImg');
    
    curImage.src = imgPath; //change img path
    curImage.alt = imgText; //change img alt
}
$(document).ready(function () {

    // Swipe elements
    var swiper = new Swiper(".swiper-container", {
        loopedSlides: 8,
        loop: false,
        slidesPerView: "auto",
        freeMode: true,
        mousewheel: {
            releaseOnEdges: true,
        },
    });

    var thumb = document.querySelectorAll(".thumbContainer");

    thumb.forEach(function(image, index) {
        var delay = index * 90;
        image.classList.add("fadeInSlide");
        image.style.animationDelay = delay + "ms";
    });
    
});