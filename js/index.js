// typing amination


var typed = new Typed(".typing",{
    strings:["","web Disigner", "web Developer", "Future software engineer", "Future Graphic Disigner", "Future cyber analyist"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})


// navlists

const men = document.querySelector(".aside .nav-toggler");
const asideLists = document.querySelector(".aside");
const mainContent = document.querySelector(".main-content");
const section = document.querySelectorAll(".section");

men.addEventListener("click",()=>{
    asideLists.classList.toggle("open");
    mainContent.classList.toggle("open");
})

// window.addEventListener("click",()=>{
//     if(asideLists.classList.contains("open")){
//         asideLists.classList.remove("open");
//     }

// })

window.addEventListener("scroll", ()=>{
    if(document.querySelector(".aside").classList.contains("open")){
        document.querySelector(".aside").classList.remove("open");

    }
    
})



// reavel


window.addEventListener('scroll', reveal);
function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight -revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}
