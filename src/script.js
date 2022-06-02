let buttons = document.querySelectorAll(".btn");
let modal = document.querySelector(".modal");
let submitButton = document.querySelector(".submit-btn");
let mainContainer = document.querySelector("body");
let ratingGroup = document.querySelector(".rating-group");

// Function responsible for displaying the text on the screen

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.add("active-rating");
    document.getElementById("selected-rating").innerHTML = btn.value;

    const submitted = () => {
      const htmlText = `<div class="rating-group">
      <img src="./assets/images/illustration-thank-you.svg" alt="" />
      <p>You selected <span id="selected-rating"></span> out of 5</p>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>`;

      mainContainer.innerHTML = htmlText;
    };
  });
  submitButton.addEventListener("click", () => {
    submitted();
  });
});

processSelection();

// Function responsible for opening and closing the modal

// openModal.addEventListener("click", () => {
//   modal.show();
// })

// closeModal.addEventListener("click", () => {
//   modal.close();
// })
