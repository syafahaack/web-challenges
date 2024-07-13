import { getRandomColor } from "../../utils/randomColor.js"; // Adjust the path as needed

function Circle() {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.style.backgroundColor = getRandomColor(); // Set initial random color
  circle.addEventListener("click", () => {
    circle.style.backgroundColor = getRandomColor(); // Set random color on click
  });
  return circle;
}

export default Circle;
