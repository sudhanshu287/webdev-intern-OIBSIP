let menuBtn = document.getElementById("menu-icon");

let menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle('show__menu');
});
// menuBtn.addEventListener('click',()=>{
//     menuBtn.classList.remove
// })


// slider JS
let flag=0;
function controller(x){
    flag=flag+x;
    slideshow(flag);
}
slideshow(flag);
function slideshow(num){
    let slides=document.getElementsByClassName("slide");
    if(num==slides.length){
        flag=0;
        num=0;
    }
    if(num<0){
        flag=slides.length-1;
        num=slides.length-1;
    }
    for(let y of slides){
        y.style.display="none";
    }
    slides[num].style.display="block";
}