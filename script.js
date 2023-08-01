// Locomotive smooth scrolling code
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


let menu = document.querySelector("#menu-btn");
let header = document.querySelector(".header");
menu.onclick = () => {
    menu.classList.toggle("fa-times");
    header.classList.toggle("active");
}

let themeToggler = document.querySelector("#theme-toggler");

themeToggler.onclick = () => {
    themeToggler.classList.toggle("fa-sun");
    
    if (themeToggler.classList.contains("fa-sun")) {
        themeToggler.classList.remove("fa-moon")
        document.body.classList.add("active")
    }
    else{
        themeToggler.classList.add("fa-moon")
        document.body.classList.remove("active")
    }
}

let allAncherTag = document.querySelectorAll(".navbar a")
allAncherTag.forEach(function(elem){
    elem.addEventListener("click",function(){

        function myFunction(x) {
            if (x.matches) { // If media query matches
                    header.classList.toggle("active");
                    menu.classList.toggle("fa-times");
            }
          }
          var x = window.matchMedia("(max-width: 991px)")
          myFunction(x) // Call listener function at run time
          x.addEventListener('change',myFunction) // Attach listener function on state changes
    })
})
  