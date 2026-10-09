/* Shared project image expansion, without frameworks or HTML duplication.
   Images in featured homepage cards continue to open their project case studies.
   Images in case-study sections open their original source in a new tab. */
(function () {
  "use strict";

  function enhanceProjectImages() {
    // Support both hand-authored case-study figures and new auto-generated pages.
    var images = document.querySelectorAll(
      "#main figure img, #main .case-hero img, #main .case-section img, #dynamic-project img"
    );

    images.forEach(function (image) {
      if (image.closest(".project-card, .project-cover")) return;

      var figure = image.closest("figure");
      if (!figure) {
        figure = document.createElement("figure");
        figure.className = "portfolio-auto-image";
        image.parentNode.insertBefore(figure, image);
        figure.appendChild(image);
      }

      // Prefer the actual linked high-resolution image when one already exists.
      var source = image.getAttribute("src");
      if (!source) return;
      var originalLink = image.closest("a");
      if (!originalLink) {
        originalLink = document.createElement("a");
        originalLink.href = source;
        originalLink.target = "_blank";
        originalLink.rel = "noopener noreferrer";
        originalLink.className = "portfolio-image-expander";
        originalLink.title = "Open full resolution image";
        originalLink.setAttribute("aria-label", "Expand " + (image.alt || "project image"));
        image.parentNode.insertBefore(originalLink, image);
        originalLink.appendChild(image);
      } else {
        // Existing gimbal and Brayton image links already open the full-size asset.
        originalLink.classList.add("portfolio-image-expander");
      }

      var caption = figure.querySelector("figcaption");
      if (!caption) {
        caption = document.createElement("figcaption");
        figure.appendChild(caption);
      }
      var hasExpandLink = Array.prototype.some.call(
        caption.querySelectorAll("a"),
        function (link) {
          return /expand|full resolution|full graph/i.test(link.textContent) ||
            link.href === originalLink.href;
        }
      );
      if (hasExpandLink) return;

      // Add a visible link for sighted and keyboard users; avoid duplicated
      // captions when the image already had an explicit expansion link.
      if (caption.textContent.trim()) {
        caption.appendChild(document.createTextNode(" · "));
      }
      var link = document.createElement("a");
      link.className = "portfolio-expand-link";
      link.href = originalLink.href || source;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = "Expand ↗";
      link.setAttribute("aria-label", "Expand " + (image.alt || "project image"));
      caption.appendChild(link);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", enhanceProjectImages);
  } else {
    enhanceProjectImages();
  }
})();
