const itsPc = sessionStorage.getItem("pc");
// when my site opens I will send an email about it
let form = document.getElementById("my-form2");
async function handleSubmit(event) {
  document.removeEventListener("mousemove", handleSubmit);
  event.preventDefault();
  let data = new FormData(form);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  }).then((response) => {
    sessionStorage.setItem("pc", "true");
    form.remove();
  });
}

if (itsPc !== "true") {
  document.addEventListener("mousemove", handleSubmit);
} else {
  form.remove();
}
