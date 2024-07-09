console.clear();

const form = document.querySelector('[data-js="form"]');
console.log("form:", form);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log("data:", data);
  event.target.reset();

  const formElements = event.target.elements;
  formElements.firstName.focus();

  const sum = Number(data.age) + Number(data.badness);
  console.log(`The age-badness-sum of ${data.firstName} is ${sum}`);
});
