document.addEventListener("DOMContentLoaded", function () {
  function initBurgerMenu() {
    const burgerButton = document.querySelector(".header__burger");
    const mobileMenu = document.querySelector(".header__mobile-menu");
    const closeButton = document.querySelector(".header__menu-close");

    if (burgerButton && mobileMenu && closeButton) {
      burgerButton.addEventListener("click", function () {
        mobileMenu.classList.add("header__mobile-menu--visible");
      });

      closeButton.addEventListener("click", function () {
        mobileMenu.classList.remove("header__mobile-menu--visible");
      });
    }
  }

  initBurgerMenu();

  // Reinitialize the burger menu when the mobile menu content is loaded using htmx
  document.body.addEventListener("htmx:afterSwap", function (event) {
    if (
      event.detail.requestConfig &&
      event.detail.requestConfig.path.includes("global.header-nav.partial")
    ) {
      initBurgerMenu();
    }
  });
});
