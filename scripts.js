const buttonElement = document.getElementById("hamburger");
const navigationElement = document.getElementById("navigation");

buttonElement.title = "Open menu";

buttonElement.addEventListener("click", () => {
  navigationElement.classList.toggle("show");
  buttonElement.classList.toggle("show");

  if (navigationElement.classList.contains("show")) {
    buttonElement.title = "Close menu";
  } else {
    buttonElement.title = "Open menu";
  }
});
