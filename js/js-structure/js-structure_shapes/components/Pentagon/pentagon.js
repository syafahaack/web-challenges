import { getRandomColor } from "../../utils/randomColor.js"; // Adjust the path as needed

function Pentagon() {
  const pentagon = document.createElement("div");
  pentagon.classList.add("pentagon");
  pentagon.style.backgroundColor = getRandomColor(); // Set initial random color
  pentagon.addEventListener("click", () => {
    pentagon.style.backgroundColor = getRandomColor(); // Set random color on click
  });
  return pentagon;
}

export default Pentagon;
