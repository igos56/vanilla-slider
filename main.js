const prevBtn = document.getElementById("btn-prev"),
      nextBtn = document.getElementById("btn-next"),
      slides = document.querySelectorAll(".slide"),
      dots = document.querySelectorAll(".dot");

let index = 0;

const activeSlide = (index) => {
    for (let slide of slides) {
        slide.classList.remove("active");
    }
    slides[index].classList.add("active");
};

const activeDot = (index) => {
    for (let dot of dots) {
        dot.classList.remove("active");
    }
    dots[index].classList.add("active");
};

const prepareActiveElements = (index) => {
    activeSlide(index);
    activeDot(index);
};

const prevSlide = () => {
    if (index === 0) {
        index = slides.length -1;
        prepareActiveElements(index);
    } else {
        index--;
        prepareActiveElements(index);
    } 
};

const nextSlide = () => {
    if (index === slides.length - 1) {
        index = 0;
        prepareActiveElements(index);
    } else {
        index++;
        prepareActiveElements(index);
    }
};

dots.forEach((dot, dotIndex) => {
    dot.addEventListener("click", () => {
        index = dotIndex;
        prepareActiveElements(index);
    });
});

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

setInterval(nextSlide, 2500);