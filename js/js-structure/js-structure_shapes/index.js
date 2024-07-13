console.clear();

import Circle from "./components/Circle/Circle.js"; // Import the Circle component
import Square from "./components/Square/Square.js"; // Import the Square component
import Pentagon from "./components/Pentagon/Pentagon.js"; // Import the Pentagon component

const root = document.getElementById("root");

// Create and append the components
const circleElement = Circle();
const squareElement = Square();
const pentagonElement = Pentagon();

root.append(circleElement, squareElement, pentagonElement);
