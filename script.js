const bars = document.querySelector(".bar"),
close = document.querySelector(".close"),
menu = document.querySelector(".menu");
const toTop= document.querySelector(".to-top");

bars.addEventListener("click", () =>{
    menu.classList.add("active")
    gsap.from(".menu", {
        opacity: 0,
        duration: .9
    })
    gsap.from(".menu ul", {
        opacity: 0,
        x: -300
    })

})

window.addEventListener("scroll", () => {
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollPosition > 300){
        toTop.classList.add("active"); 
    }
    else{
        toTop.classList.remove("active");
    } 
})

close.addEventListener("click", () =>{
    menu.classList.remove("active")
})