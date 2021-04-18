window.formValid = function () {
  let fromError = 0;
  const myForm = document.getElementById("my-form");
  Array.from(myForm.querySelectorAll("input")).forEach((inp) => {
    if (inp.value.length === 0) {
      var status = document.getElementById("my-form-status");
      inp.classList.add("error_form");
      status.innerHTML = "Please Enter All Forms";
      status.classList.add("error");
      fromError++;
      inp.addEventListener("change", () => {
        inp.classList.remove("error_form");
        status.classList.remove("error");
      });
    }
  });
  if (fromError > 0) {
    return false;
  } else {
    return true;
  }
};
