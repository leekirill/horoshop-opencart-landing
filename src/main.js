const heroImages = document.querySelectorAll(".js-image");
let count = 0;

setInterval(() => {
  handleImage(count, "remove");

  count === 2 ? (count = 0) : (count += 1);

  handleImage(count, "add");
}, 4000);

const handleImage = (count, func) =>
  heroImages[count].classList[func]("hero__image--visible");
