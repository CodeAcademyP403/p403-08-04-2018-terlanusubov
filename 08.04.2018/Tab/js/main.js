var tags = document.querySelectorAll('.leftMenu a');

for(var tag of tags){
    tag.addEventListener("mouseenter", function(e){
        e.preventDefault();
        var activeTag = document.querySelector('li.active');
        var activeTextDiv = document.querySelector('div.active');

        if(activeTextDiv){
            activeTag.classList.remove("active");
            activeTextDiv.classList.remove("active");
        }

        var address  = e.target.getAttribute("data-address");
        var textDiv  = document.querySelector(`[data-location = "${address}" ]`);
        
        e.target.parentElement.classList.add('active');
        textDiv.classList.add("active");
        
    });
}
