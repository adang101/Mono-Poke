document.addEventListener("DOMContentLoaded", function () {
  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.body.insertAdjacentHTML("beforeend", data);
      styleFooterGallery();
      styleFooterCopyright();
    })
    .catch((error) => console.error("Error loading footer:", error));
});
function styleFooterGallery() {
  const galleryGrid = document.querySelector(
    ".instagram-gallery .gallery-grid"
  );
  if (galleryGrid) {
    galleryGrid.style.display = "grid";
    galleryGrid.style.gridTemplateColumns = "repeat(3, 1fr)";
    galleryGrid.style.gap = "10px";

    const images = galleryGrid.querySelectorAll("img");
    images.forEach((img) => {
      img.style.width = "100%";
      img.style.height = "auto";
      img.style.objectFit = "cover";
      img.style.aspectRatio = "1 / 1";
    });
  }
}
function styleFooterCopyright() {
  const copyrightParagraphs = document.querySelectorAll(".footer-copy-right p");
  copyrightParagraphs.forEach((p) => {
    p.style.color = "#ff7000";
  });
}
