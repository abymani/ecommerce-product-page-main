const menuBtn = document.querySelector(".menu-btn");
const closeMenu = document.querySelector(".close-menu");
const nav = document.querySelector("nav");
const body = document.querySelector("body");
const overlay= document.getElementById("overlay");


menuBtn.addEventListener('click', (e) => {
        nav.setAttribute("aria-expanded","true");
        closeMenu.setAttribute("data-visibilty","true");
        body.setAttribute("data-nav-menu","true");
        overlay.style.display = "block";
    });
    closeMenu.addEventListener('click', (e) => {
        nav.setAttribute("aria-expanded","false");
        closeMenu.setAttribute("data-visibilty","false");
        body.setAttribute("data-nav-menu","false");
        overlay.style.display = "none";
});


const cartIcon = document.querySelector(".cart-icon");
const cartMenu = document.querySelector(".cart-menu");


cartIcon.addEventListener('click', () => {
    let visibilty = cartMenu.getAttribute("data-cart-visibilty");
    if (visibilty == "false"){
        cartMenu.setAttribute("data-cart-visibilty","true");
    }
    else {
        cartMenu.setAttribute("data-cart-visibilty","false");
    }
});


// image gallery code

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
  console.log("next slide prev slide");
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let imgThumb = document.getElementsByClassName("img-thumb");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < imgThumb.length; i++) {
    imgThumb[i].className = imgThumb[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  imgThumb[slideIndex-1].className += " active";
}


let items=0;
let prevItems=0;
const minusItem = document.querySelector(".minus-item");
const plusItem = document.querySelector(".plus-item");
const addCart = document.querySelector(".add-to-cart-btn");
const numOfItems = document.querySelector(".num-of-items");
const root = document.querySelector(":root");
minusItem.addEventListener('click', () => {
  if(items !== 0){
    items -= 1;
    numOfItems.innerHTML = items;
  }
});
plusItem.addEventListener('click', () => {
    items += 1;
    numOfItems.innerHTML = items;
});


const name = document.getElementById("product-name");
const price = document.getElementById("product-price");
const image = document.getElementById("product-image");
const cartItems = document.getElementById("cart-items");
const totalPrice = document.getElementById("total-price");

const cart = document.querySelector(".cart-items");
const emptyCart = document.querySelector(".empty-cart");


addCart.addEventListener('click', () => {

  let productName = "Fall Limited Edition Sneakers";
  let productPrice = 125.00;
  let productThumbnailAddr = "./images/image-product-1-thumbnail.jpg";
  if(items >0)
  {
    items = items + prevItems;
    root.style.setProperty("--num-of-items",`"${items}"`);
    prevItems =items;
  

    emptyCart.style.display = "none";
    name.innerHTML = productName;
    price.innerHTML = productPrice;
    image.setAttribute("src",productThumbnailAddr);
    cartItems.innerHTML = items;
    totalPrice.innerHTML = "&dollar;" + productPrice * items;

    cart.style.display = "block";

    items= 0;
    numOfItems.innerHTML = items;
  }
});

const deleteItem = document.querySelector(".delete-icon");

deleteItem.addEventListener('click',()=>{
    items = 0;
    root.style.setProperty("--num-of-items",`${items}`);
    prevItems =items;

    emptyCart.style.display = "block";
    cart.style.display = "none";
});