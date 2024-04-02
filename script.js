const dots = document.querySelectorAll(".dot-shapes .dot");

dots.forEach((dot) => {
  dot.addEventListener("click", function (event) {
    dots.forEach((dot) => {
      dot.classList.remove("active");
    });
    event.currentTarget.classList.add("active");
  });
});
