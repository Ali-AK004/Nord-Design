const dots = document.querySelectorAll(".dot-shapes .dot");
const upArrow = document.querySelector(".upArrow");

dots.forEach((dot) => {
  dot.addEventListener("click", function (event) {
    dots.forEach((dot) => {
      dot.classList.remove("active");
    });
    event.currentTarget.classList.add("active");
  });
});

upArrow.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

window.addEventListener("scroll", function () {
  if (this.scrollY >= 500) {
    upArrow.style.display = "block";
  } else {
    upArrow.style.display = "none";
  }
});
