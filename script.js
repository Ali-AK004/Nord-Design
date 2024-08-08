// image slider
const imgsContainer = document.querySelector(".features .img");
const dots = document.querySelectorAll(".features .dot-shapes .dot");
const imgsWidth =
  imgsContainer.querySelectorAll("img")[0].offsetWidth +
  parseInt(getComputedStyle(imgsContainer).gap);
let scrollLeft = 0;
let startX = 0;
let isActive = false;

const activeMouse = (e) => {
  isActive = true;
  imgsContainer.style.cursor = "grabbing";

  startX = e.pageX - imgsContainer.offsetLeft;
  scrollLeft = Math.round(imgsContainer.scrollLeft);
};

const numbMouse = () => {
  isActive = false;
  imgsContainer.style.cursor = "grab";
};

const drag = (e) => {
  if (!isActive) return;
  e.preventDefault();

  const lastMousePlacement = e.pageX - imgsContainer.offsetLeft;
  const movement = (lastMousePlacement - startX) * 2;

  imgsContainer.scrollLeft = scrollLeft - movement;
};

// prevent the imgs from being selected or grabbed
imgsContainer.querySelectorAll("img").forEach((img) => {
  img.addEventListener("mousedown", (e) => e.preventDefault());
});

const activateDots = () => {
  const currentIndex = Math.round(imgsContainer.scrollLeft / imgsWidth);

  dots.forEach((dot, i) => {
    if (currentIndex === i) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
};

imgsContainer.addEventListener("mousedown", activeMouse);
imgsContainer.addEventListener("mouseup", numbMouse);
imgsContainer.addEventListener("mouseleave", numbMouse);
imgsContainer.addEventListener("mousemove", drag);
imgsContainer.addEventListener("scroll", activateDots);

dots.forEach((dot, i) => {
  dot.addEventListener("click", function (event) {
    dots.forEach((dot) => {
      dot.classList.remove("active");
    });

    imgsContainer.scrollTo({
      left: imgsWidth * i,
      behavior: "smooth",
    });

    event.currentTarget.classList.add("active");
  });
});

// testimonial slider
const paragraphContent = document.querySelectorAll(
  ".testimonial-holder .text p"
);
const paragraphsHolder = document.querySelector(
  ".testimonial-holder .content-holder"
);
const testimonialIndicators = document.querySelectorAll(
  ".testimonial-holder .dot-shapes .dot"
);

const paragraphWidth =
  paragraphContent[0].offsetWidth +
  parseInt(getComputedStyle(paragraphsHolder).gap);

testimonialIndicators.forEach((dot, i) => {
  dot.addEventListener("click", function () {
    paragraphsHolder.scrollTo({
      left: paragraphWidth * i,
      behavior: "smooth",
    });

    console.log(i);

    testimonialIndicators.forEach((dot) => dot.classList.remove("active"));
    dot.classList.add("active");
  });
});

// scroll to top button
const upArrow = document.querySelector(".upArrow");
upArrow.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
window.addEventListener("scroll", function () {
  if (this.scrollY >= 400) {
    upArrow.style.display = "block";
  } else {
    upArrow.style.display = "none";
  }
});

// footer date
const showDate = document.querySelector(".date");
const date = new Date().getFullYear();
showDate.append(date);
