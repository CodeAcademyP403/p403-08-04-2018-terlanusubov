var button = document.querySelectorAll("button");
var IconMinus = document.querySelector("button .fa-minus");
var IconPlus =document.querySelector("button .fa-plus");
for(var i = 0; i < button.length ; i++){
  button[i].addEventListener("click", function(){

      var ActiveText = this.nextElementSibling;
      ActiveText.classList.add("active");

      this.children[1].classList.remove("fa");
      this.children[2].classList.add("fa");
    
  })
}

function CloseAccordion(){
  IconMinus.addEventListener("click", function(){
    this.nextElementSibling.style.height = 0 + "px"
  })
}