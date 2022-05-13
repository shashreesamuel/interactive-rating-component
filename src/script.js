let inputfield = document.querySelectorAll(".input-group");

function processSelection() {
  inputfield.forEach((input) => {
    input.addEventListener("click", () => {
      input.classList.add("active-rating");
      console.log("Active rating enabled");
    });
  });
}
