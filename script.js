const form = document.querySelector("#request-form");
const successPanel = document.querySelector("#success-panel");
const cvDemo = document.querySelector("#cv-demo");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;

  form.hidden = true;
  successPanel.hidden = false;
  successPanel.querySelector("h3").focus();
});

document.querySelector("#show-cv").addEventListener("click", () => {
  cvDemo.hidden = false;
  cvDemo.scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelector("#edit-request").addEventListener("click", () => {
  successPanel.hidden = true;
  form.hidden = false;
  form.querySelector("input").focus();
});
