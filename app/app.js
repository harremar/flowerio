const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const link = document.querySelector(".links a");
const additembtn = document.getElementsByClassName("additembtn");

const circle = document.querySelector(".circleCount");

//when hamburger is clicked activate mobileMenu function
hamburger.addEventListener("click", mobileMenu);

//this function makes menu active
function mobileMenu() {
  // turns hamburger into X
  hamburger.classList.toggle("active");
  // opens up navigation links
  navMenu.classList.toggle("active");
}

let cartNumbers = 0;
function addCart() {
  alert("Item has been added to cart");
  cartNumbers = cartNumbers + 1;
  console.log(cartNumbers);
  circle.style.display = "flex";
  circle.innerHTML = cartNumbers;
}
