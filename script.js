
let menu = document.querySelector("#menu-btn");
let header = document.querySelector(".header");
menu.onclick = () => {
    menu.classList.toggle("fa-times");
    header.classList.toggle("active");
}
  
// Code for manually change theme
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
// code to change theme according to day or night
let d = new Date()
let houre = d.getHours()
if(!(houre>=7 && houre<=18)){          //excluding day time
    themeToggler.classList.remove("fa-moon")
    themeToggler.classList.add("fa-sun")
    document.body.classList.add("active")
}

// closing the sideBar(navBar) when user click on nav Menu. This code works for only small devices like cellPhone or tablet etc. 
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
  