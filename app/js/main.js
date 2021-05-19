"use strict";
// === scroll on click ===

const menuLinks = document.querySelectorAll(".navigation__btn-link[data-goto]");
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top + pageYOffset;

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });

      e.preventDefault();
    }
  }
}
// if menu opened (contains class _active), in this moment we shall remove all classes, that been added to open menu
// if (iconMenu.classList.contains("_active")) {
//   document.body.classList.remove("_lock");
//   iconMenu.classList.remove("_active");
//   menuBody.classList.remove("_active");
// }



// === / scroll on click ===
// === following code helps to detect on which device the page being browsed ===

// const isMobile = {
//   Android: function () {
//     return navigator.userAgent.match(/Android/i);
//   },
//   BlackBerry: function () {
//     return navigator.userAgent.match(/BlackBerry/i);
//   },
//   iOS: function () {
//     return navigator.userAgent.match(/iPhone|iPad|iPod/i);
//   },
//   Opera: function () {
//     return navigator.userAgent.match(/Opera Mini/i);
//   },
//   Windows: function () {
//     return navigator.userAgent.match(/IEMobile/i);
//   },
//   any: function () {
//     return (
//       isMobile.Android() ||
//       isMobile.BlackBerry() ||
//       isMobile.iOS() ||
//       isMobile.Opera() ||
//       isMobile.Windows()
//     );
//   },
// };
// === / following code helps to detect on which device the page being browsed ===

// if any of devices above detected -> add class '_touch'

// if (isMobile.any()) {
//   document.body.classList.add("--touch");

//   let menuArrows = document.querySelectorAll(".menu__arrow");
//   if (menuArrows.length > 0) {
//     for (let index = 0; index < menuArrows.length; index++) {
//       const menuArrow = menuArrows[index];
//       menuArrow.addEventListener("click", function (e) {
//         menuArrow.parentElement.classList.toggle("--active");
//       });
//     }
//   }
// } else {
//   document.body.classList.add("--pc");
// }

// === burger menu ===
// const iconMenu = document.querySelector(".menu__icon");
// const menuBody = document.querySelector(".menu__body");
// checking if object exists

// if (iconMenu) {
//   // creating a click event
//   iconMenu.addEventListener("click", function (e) {
//     // to avoid scrolling while adaptive menu is on
//     document.body.classList.toggle("_lock");
//     // switching between having and not having "._active"
//     iconMenu.classList.toggle("_active");
//     menuBody.classList.toggle("_active");
//   });
// }
// === / burger menu ===
