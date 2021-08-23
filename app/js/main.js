$(function () {
  // === SLICK SLIDER JQ (ABOUT-US) ===
  // === LEFT SLIDER ===
  $(".about-us__slider-lg").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: ".about-us__slider-sm",
    arrows: false
  });
  // === / LEFT SLIDER===
  // === RIGHT SLIDER===
  $(".about-us__slider-sm").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: ".about-us__slider-lg",
    prevArrow:
      "<button type='button' class='slick-prev'><img src='images/icons/slider-arrow-left.svg'></button>",
    nextArrow:
      "<button type='button' class='slick-next'><img src='images/icons/slider-arrow-right.svg'></button>",
  });
  // === / RIGHT SLIDER===
  // === / SLICK SLIDER JQ (ABOUT-US) ===

  // === SLICK SLIDER JQ (LOCATIONS) ===
  $(".locations__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:
      "<button type='button' class='slick-prev'><svg width='46' height='10' viewBox='0 0 46 10'><path opacity='1' d='M0.540382 5.45962C0.286541 5.20578 0.286541 4.79422 0.540382 4.54038L4.67696 0.403806C4.9308 0.149965 5.34235 0.149965 5.5962 0.403806C5.85003 0.657647 5.85003 1.0692 5.5962 1.32304L1.91924 5L5.5962 8.67696C5.85003 8.9308 5.85003 9.34235 5.5962 9.59619C5.34235 9.85003 4.9308 9.85003 4.67696 9.59619L0.540382 5.45962ZM46 5.65H1V4.35H46V5.65Z' fill='black'/></svg></button>",
    nextArrow:
      "<button type='button' class='slick-next'><svg width='46' height='10' viewBox='0 0 46 10'><path d='M45.4596 5.45962C45.7135 5.20578 45.7135 4.79422 45.4596 4.54038L41.323 0.403806C41.0692 0.149965 40.6576 0.149965 40.4038 0.403806C40.15 0.657647 40.15 1.0692 40.4038 1.32304L44.0808 5L40.4038 8.67696C40.15 8.9308 40.15 9.34235 40.4038 9.59619C40.6576 9.85003 41.0692 9.85003 41.323 9.59619L45.4596 5.45962ZM0 5.65H45V4.35H0V5.65Z' fill='black'/></svg></button>",
    infinite: false,
  });
  // === / SLICK SLIDER JQ (LOCATIONS) ===

  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

// "use strict";
// === scroll on click ===

// const menuLinks = document.querySelectorAll(".navigation__btn-link[data-goto]");
// if (menuLinks.length > 0) {
//   menuLinks.forEach((menuLink) => {
//     menuLink.addEventListener("click", onMenuLinkClick);
//   });

//   function onMenuLinkClick(e) {
//     const menuLink = e.target;
//     if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
//       const gotoBlock = document.querySelector(menuLink.dataset.goto);
//       const gotoBlockValue =
//         gotoBlock.getBoundingClientRect().top + pageYOffset;

//       window.scrollTo({
//         top: gotoBlockValue,
//         behavior: "smooth",
//       });

//       e.preventDefault();
//     }
//   }
// }
// ==========================================================================================================
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
