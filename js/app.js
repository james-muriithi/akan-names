// Business Logic
const akanNames = {
  Sunday: {
    male: "Kwasi",
    female: "Akosua",
  },
  Monday: {
    male: "Kwadwo",
    female: "Adwoa",
  },
  Tuesday: {
    male: "Kwabena",
    female: "Abenaa",
  },
  Wednesday: {
    male: "Kwaku",
    female: "Akua",
  },
  Thursday: {
    male: "Yaw",
    female: "Yaa",
  },
  Friday: {
    male: "Kofi",
    female: "Afua",
  },
  Saturday: {
    male: "Kwame",
    female: "Ama",
  },
};

function getDayIndex(year, month, day) {
  const date = new Date(year + "/" + month + "/" + day);
  return date.getDay();
}

function getAkanName(gender, year, month, day) {
  const dayIndex = getDayIndex(year, month, day);

  let data = {};

  Object.keys(akanNames).forEach((day, index) => {
    if (+dayIndex === index) {
      data = {
        day,
        name: akanNames[day][gender],
      };
    }
  });

  return data;
}

// UI Logic
const akanForm = document.getElementById("akan-form");
const numberInputs = akanForm.querySelectorAll("input[type='number']");
const genderInputs = akanForm.querySelectorAll("input[name='gender']");
const successMessageAlert = document.querySelector(".success-message");

akanForm.addEventListener("submit", function (event) {
  event.preventDefault();
  validateForm();
});

function validateForm() {
  let isFormValid = true;
  numberInputs.forEach((input) => {
    if (!input.value) {
      input.classList.add("is-invalid");
      isFormValid = false;
    }
  });

  if (!akanForm.querySelector("input[name='gender']:checked")) {
    genderInputs[genderInputs.length - 1].classList.add("is-invalid");
    isFormValid = false;
  }

  if (!validateYear() || !validateDay() || !validateMonth()) {
    isFormValid = false;
  }

  if (isFormValid) {
    let day = document.querySelector("input#day").value;
    let month = document.querySelector("input#month").value;
    let year = document.querySelector("input#year").value;
    let gender = akanForm.querySelector("input[name='gender']:checked").value;

    const akanData = getAkanName(gender, year, month, day);

    successMessageAlert.textContent = `Your Akan name is ${akanData.name} and born on ${akanData.day} 👨`;
    successMessageAlert.classList.remove("d-none")
  }

  return isFormValid;
}

function removeInputErrors() {
  numberInputs.forEach((input) => {
    input.addEventListener("keydown", function () {
      this.classList.remove("is-invalid");
    });
  });

  genderInputs.forEach((input) => {
    input.addEventListener("change", function () {
      genderInputs[genderInputs.length - 1].remove("is-invalid");
    });
  });
}

removeInputErrors();

function validateDay() {
  const day = +document.querySelector("input#day").value;
  if (day > 0 && day <= 31) {
    return true;
  }
  document.querySelector("input#day").classList.add("is-invalid");
  return false;
}

function validateMonth() {
  const month = +document.querySelector("input#month").value;
  if (month > 1 && month <= 12) {
    return true;
  }
  document.querySelector("input#month").classList.add("is-invalid");
  return false;
}

function validateYear() {
  const year = +document.querySelector("input#year").value;
  const currentYear = new Date().getFullYear();
  if (year >= 1800 && year <= currentYear) {
    return true;
  }
  document.querySelector("input#year").classList.add("is-invalid");
  return false;
}
