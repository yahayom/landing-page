// js code for side menu
var sidemenu = document.getElementById("sidemenu");

function opnmenu(){
  sidemenu.style.right = "0";
}
function closemenu(){
  sidemenu.style.right = "-200px";
}
//highlighted in the nav bar onclick  
$(document).ready(function(){
  $('nav ul li a').click(function(){
    $('li a').removeClass("active");
    $(this).addClass("active");
  })

})
//add active class in the list 
window.addEventListener('scroll', (e) => {
  const sections = document.querySelectorAll('section');
  sections.forEach( section => {
    const topDistance = section.getBoundingClientRect().top;
    if (topDistance > -1 && topDistance < 99) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
});
//highlighted in the nav bar on scroll 
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active2");
    if (li.classList.contains(current)) {
      li.classList.add("active2");
    }
  });
});