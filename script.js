// Simple animation on scroll
window.addEventListener("scroll",()=>{
document.querySelectorAll(".card").forEach(card=>{
card.style.transform="scale(1.05)";
});
});





const toggle = document.getElementById("toggleIcon");

toggle.addEventListener("click",()=>{
document.body.classList.toggle("light");

if(document.body.classList.contains("light")){
toggle.classList.replace("fa-moon","fa-sun");
}else{
toggle.classList.replace("fa-sun","fa-moon");
}
});
