'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header & back top btn active when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const showElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", showElemOnScroll);



/**
 * product filter
 */

const filterBtns = document.querySelectorAll("[data-filter-btn]");
const filterBox = document.querySelector("[data-filter]");

let lastClickedFilterBtn = filterBtns[0];

const filter = function () {
  lastClickedFilterBtn.classList.remove("active");
  this.classList.add("active");
  lastClickedFilterBtn = this;

  filterBox.setAttribute("data-filter", this.dataset.filterBtn)
}

addEventOnElem(filterBtns, "click", filter);

const openModal = () =>{
  let modalWindow = document.querySelector('.popup-modal');
  let overlay = document.querySelector('.overlay');
  modalWindow.style.display = 'block';
  overlay.style.display = 'block';

}

const closeModal = () => {
  let modalWindow = document.querySelector('.popup-modal');
  let overlay = document.querySelector('.overlay');
  modalWindow.style.display = 'none';
  overlay.style.display = 'none';
}
<<<<<<< HEAD




var ProductImg = document.getElementById("ProductImg");
var SmallImg = document.getElementsByClassName("small-img");
    SmallImg[0].onclick = function()
    {
      ProductImg.src = SmallImg[0].src;
    }
    SmallImg[1].onclick = function()
    {
      ProductImg.src = SmallImg[1].src;
    }
    SmallImg[2].onclick = function()
    {
      ProductImg.src = SmallImg[2].src;
    }
    SmallImg[3].onclick = function()
    {
      ProductImg.src = SmallImg[3].src;
    }
=======
>>>>>>> fc0698a0b0979046b1a87213468907f16a485e6d
