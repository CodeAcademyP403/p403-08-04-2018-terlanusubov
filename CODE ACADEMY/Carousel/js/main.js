var next = document.querySelector(".next");
var prev = document.querySelector(".prev");
var allImg = document.getElementsByClassName('imageSlider')
var wrapper = document.querySelector(".wrapper");
var currentImageIndex = 0;
var width = 640;
function switchImg(){
    wrapper.style.left = -width * currentImageIndex + "px";
}
next.addEventListener("click", function () {
    currentImageIndex++;
    if (currentImageIndex >= allImg.length) {
        currentImageIndex = 0;
    }
    switchImg();

    
    console.log("clik");
})

prev.addEventListener("click", function () {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = allImg.length-1;
    } 
    switchImg();
    
    console.log("clik");
})