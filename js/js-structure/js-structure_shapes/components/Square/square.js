import { getRandomColor } from "../../utils/randomColor.js"; // Adjust the path as needed

function Square() {
  const square = document.createElement("div");
  square.classList.add("square");
  square.style.backgroundColor = getRandomColor(); // Set initial random color
  square.addEventListener("click", () => {
    square.style.backgroundColor = getRandomColor(); // Set random color on click
  });
  return square;
}

export default Square;
