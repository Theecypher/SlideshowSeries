const initSlider = () => {
  const imageList = document.querySelector(".slider-wrapper .image-list");
  const sliderButtons = document.querySelectorAll(
    ".slider-wrapper .slide-button"
  );
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth

  sliderButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev-slide" ? -1 : 1;
      const scrollAmount = imageList.clientWidth * direction;
      imageList.scrollBy({ left: scrollAmount, behaviour: "smooth" });
    });
  });

  imageList.addEventListener("scroll", () => {
    sliderButtons[0].style.display =
      imageList.scrollLeft <= 0 ? "none" : "block";
    sliderButtons[1].style.display =
      imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
  });
};

window.addEventListener("load", initSlider);
