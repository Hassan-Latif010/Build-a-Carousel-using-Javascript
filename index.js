const slides = document.getElementsByClassName("carousel-item")
const carouselBtnPrev = document.getElementById("carousel-button-prev")
const carouselBtnNext = document.getElementById("carousel-button-next")
const carouselItemVisible = document.getElementsByClassName("carousel-item-visible")


let slidePosition = 0

const totalSlides = slides.length;

carouselBtnNext.addEventListener("click", moveToNextSlide)

carouselBtnPrev.addEventListener("click", moveToPrevSlide)


function hideAllSlides(){
    for(let slide of slides){
        slide.classList.remove("carousel-item-visible")
        slide.classList.add("carousel-item-hidden")
    }
}





function moveToNextSlide(){
    hideAllSlides(); 
    if(slidePosition === totalSlides - 1){
        slidePosition = 0
    }else{
        slidePosition++
    }
    slides[slidePosition].classList.add("carousel-item-visible")
}

function moveToPrevSlide(){
    
    hideAllSlides(); 
    if(slidePosition === 0){
        slidePosition = totalSlides -1
    }else{
        slidePosition --
    }
    slides[slidePosition].classList.add("carousel-item-visible")
}

