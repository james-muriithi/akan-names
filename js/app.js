// Business Logic

// UI Logic
const akanForm = document.getElementById("akan-form");
const numberInputs = akanForm.querySelectorAll("input[type='number']");
const genderInputs = akanForm.querySelectorAll("input[name='gender']");

akanForm.addEventListener("submit", function (event) {
  event.preventDefault();
  validateForm()
});

function validateForm() {

  numberInputs.forEach((input) => {
      if(!input.value){
          input.classList.add('is-invalid')
      }
  });

  const checkedGender = akanForm.querySelectorAll("input[name='gender']:checked");

  if(checkedGender.length == 0){
    genderInputs[genderInputs.length - 1].classList.add('is-invalid')
  }
  
}
