document.addEventListener("DOMContentLoaded", function () {
  fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
      document.body.insertAdjacentHTML("afterbegin", data);

      // Re-initialize plugins after header is loaded
      if (typeof $.fn.slicknav !== "undefined") {
        $("#navigation").slicknav({
          prependTo: ".mobile_menu",
          closedSymbol: "+",
          openedSymbol: "-",
        });
      }

      // Call any other initialization functions here
      if (typeof initializeOtherPlugins === "function") {
        initializeOtherPlugins();
      }
    });
});

// Function to initialize other plugins
function initializeOtherPlugins() {
  // Add initialization code for other plugins here
  // For example:
  // if (typeof $.fn.owlCarousel !== 'undefined') {
  //   $('.owl-carousel').owlCarousel();
  // }
}
