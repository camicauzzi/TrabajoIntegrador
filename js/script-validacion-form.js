document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener(
    "submit",
    function (event) {
      let valid = true;

      if (!validateEmail(document.getElementById("correo").value)) {
        document.getElementById("correo").classList.add("is-invalid");
        valid = false;
      }

      if (!form.checkValidity() || !valid) {
        event.preventDefault();
        event.stopPropagation();
        form.classList.add("was-validated");
      } else {
        removeValidationClasses();
        form.reset();
        console.log("Formulario enviado correctamente.");
      }
    },
    false
  );

  form.addEventListener("input", function (event) {
    const target = event.target;
    if (target.id === "correo") {
      if (validateEmail(target.value)) {
        target.classList.remove("is-invalid");
      } else {
        target.classList.add("is-invalid");
      }
    } else {
      if (target.validity.valid) {
        target.classList.remove("is-invalid");
      } else {
        target.classList.add("is-invalid");
      }
    }
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function removeValidationClasses() {
    form.classList.remove("was-validated");
    const invalidElements = form.querySelectorAll(".is-invalid");
    invalidElements.forEach((element) => {
      element.classList.remove("is-invalid");
    });
  }
});
