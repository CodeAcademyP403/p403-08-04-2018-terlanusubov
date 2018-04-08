var activeImg = document.querySelector('.bottom .active');
var slider = document.querySelector('.top');
var next = document.querySelector('.top .next');
var prev = document.querySelector('.top .prev');
var allImages = document.querySelectorAll('.col img');


UpdateSlider();

next.onclick = function(){
    changeSlider("next");
} 
prev.onclick = function(){
    changeSlider("prev");
} 

function changeSlider(dir){
    if(dir == "next"){
        var nextCol = activeImg.parentElement.nextElementSibling || document.querySelector('.bottom .col');
    }else if(dir == "prev"){
        var nextCol = activeImg.parentElement.previousElementSibling || document.querySelector('.bottom .col:last-child');
    }
    var newActiveImg = nextCol.children[0];
    
    activeImg.classList.remove("active");
    newActiveImg.classList.add("active");

    activeImg = newActiveImg;
    UpdateSlider();
}

function UpdateSlider(){
    slider.style.backgroundImage = "url("+activeImg.src+")";
}

document.addEventListener("keydown", function(e){
    if(e.which == 37){
        changeSlider("prev");
    }else if(e.which == 39){
        changeSlider("next");
    }
});

for(var img of allImages){
    img.addEventListener("click", function(e){
        activeImg.classList.remove("active");
        e.target.classList.add("active");
        activeImg = e.target;
        UpdateSlider();
    });
}