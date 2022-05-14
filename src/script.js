let buttons = document.querySelectorAll(".btn");
let modal = document.querySelector(".modal");
let openModal = document.querySelector(".submit-btn");
let closeModal = document.querySelector(".close-btn");

// Function responsible for displaying the text on the screen


function processSelection() {
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.classList.add('active-rating')
      document.getElementById("selected-rating").innerHTML = btn.value;
    })
  });
}

processSelection();


// Function responsible for opening and closing the modal

openModal.addEventListener("click", () => {
  modal.show();
})

closeModal.addEventListener("click", () => {
  modal.close();
})