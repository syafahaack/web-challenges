console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  const newCard = document.createElement("li");
  toastContainer.append(newCard);
  newCard.textContent = "Hello, World!";
  newCard.classList.add("toast-container_message");
  // Exercise: Append a new entry to the toast messages container
});

clearButton.addEventListener("click", () => {
  toastContainer.innerHTML = "";
  // Exercise: Clear the stack of toast messages
});

/* Alternative Solution:
addButton.addEventListener("click", () => {
  // Not necessary for the challenge, just adding some flavor.
  const date = new Date().toDateString();
  const message = `A new message! Received at: ${date}`;

  addToast(message);
});

clearButton.addEventListener("click", () => {
  clearToasts();
});

function clearToasts() {
  toastContainer.innerHTML = "";
}

function addToast(message) {
  const toast = document.createElement("li");
  toast.classList.add("toast-container__message");
  toast.textContent = message;
  toastContainer.append(toast);
}
*/
