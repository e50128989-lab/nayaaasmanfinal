/*=====================================
STICKY NAVBAR
=====================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.classList.add("sticky");

    }else{

        header.classList.remove("sticky");

    }

});


/*=====================================
SMOOTH SCROLL
=====================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});


/*=====================================
COUNTER ANIMATION
=====================================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(entries => {

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter = entry.target;

const target = +counter.dataset.target;

let count = 0;

const speed = target/120;

const updateCounter = ()=>{

count += speed;

if(count < target){

counter.innerText = Math.floor(count);

requestAnimationFrame(updateCounter);

}else{

counter.innerText = target + "+";

}

};

updateCounter();

counterObserver.unobserve(counter);

}

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});


/*=====================================
SCROLL REVEAL
=====================================*/

const reveals=document.querySelectorAll(

".about,.mission,.impact,.programs,.gallery,.cta,.contact"

);

const revealObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.15});

reveals.forEach(section=>{

revealObserver.observe(section);

});


/*=====================================
BACK TO TOP BUTTON
=====================================*/

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topButton";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.classList.add("showTop");

}else{

topBtn.classList.remove("showTop");

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


/*=====================================
ACTIVE MENU
=====================================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});


/*=====================================
LOADER
=====================================*/

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

if(loader){

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},600);

}

});


/*=====================================
GALLERY IMAGE CLICK
=====================================*/

const gallery=document.querySelectorAll(".gallery-grid img");

gallery.forEach(img=>{

img.addEventListener("click",()=>{

window.open(img.src,"_blank");

});

});
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
const icon = document.querySelector(".menu-toggle i");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});
const scriptURL = "https://script.google.com/macros/s/AKfycbyIw-F05jw3SzJcu66W_qiwFj81lKY9CG7rWqVgbdU2e_IGPdkWIXNt0DUTQwF9glJb0Q/exec";

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    fetch(scriptURL, {
        method: "POST",
        body: new FormData(form)
    })
    .then(() => {
        alert("Thank you! Your message has been sent successfully.");
        form.reset();
    })
    .catch(() => {
        alert("Something went wrong. Please try again.");
    });
});
