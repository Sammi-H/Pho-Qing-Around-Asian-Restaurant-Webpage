
const callButton = document.querySelector(".contact-info button");

callButton.addEventListener("click", () => {

  window.location.href = "tel:031123456";
});





const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector("#main-menu");

document.addEventListener("DOMContentLoaded", () => {
  
  menuBtn.addEventListener("click", (event) => {
    const isExpanded = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-expanded", !isExpanded);
    menu.classList.toggle("show");  
    event.stopPropagation(); 
  });

 
  document.addEventListener("click", (event) => {
   
    if (!menu.contains(event.target) && event.target !== menuBtn) {
      menu.classList.remove("show");
      menuBtn.setAttribute("aria-expanded", "false");
    }
  });
});