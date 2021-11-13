// Business Logic

// UI Logic
const akanForm = document.getElementById("akan-form");

akanForm.addEventListener("submit", function (event) {
  event.preventDefault();
  validateForm()
});

function validateForm() {
  const numberInputs = akanForm.querySelectorAll("input[type='number']");
  const genderInputs = akanForm.querySelectorAll("input[name='gender']");
  numberInputs.forEach((input) => {
      if(!input.value){
          input.classList.add('is-invalid')
      }
  })
  console.log(numberInputs);
  console.log(genderInputs);
}
