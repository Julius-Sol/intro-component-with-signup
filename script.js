const signUpForm = document.querySelector(".trial-form");

const formCheck = (e) => {
  // Removal of any previous error messages
  document.querySelectorAll(".error-empty").forEach((errorElement) => {
    errorElement.remove();
  });
  document.querySelectorAll(".error-input").forEach((errorElement) => {
    errorElement.classList.remove("error-input");
  });

  formValidation(e);
};

const formValidation = (e) => {
  // For loop to check each input of the form to make sure the input is not empty
  for (let i = 0; i < signUpForm.length - 1; i++) {
    let formElement = signUpForm[i];

    if (formElement.value == "" || null) {
      e.preventDefault();

      formElement.classList.add("error-input");
      const errorMessage = document.createElement("div");

      const errorLocation = document.querySelector("." + formElement.classList[0]);

      errorMessage.classList.add("error-empty");
      const newContent = document.createTextNode(formElement.placeholder + " cannot be left empty");
      errorMessage.append(newContent);

      errorLocation.after(errorMessage);
    } else {
      // If the email input field is not empty then it checks to see if email is appropiate format. This is done after validating that the email input field is empty to avoid overlapping error messages.
      if (formElement.classList[0] == "email") {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formElement.value)) {
        } else {
          e.preventDefault();
          const errorMessage = document.createElement("div");
          formElement.classList.add("error-input");
          errorMessage.classList.add("error-empty");
          const newContent = document.createTextNode("Looks like this is not an email");
          errorMessage.append(newContent);
          document.querySelector("." + formElement.classList[0]).after(errorMessage);
        }
      }
    }
  }
};

signUpForm.addEventListener("submit", formCheck);
