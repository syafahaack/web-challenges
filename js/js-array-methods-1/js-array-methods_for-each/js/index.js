const colors = [
  "#343434",
  "#7FB5B5",
  "#633A34",
  "#354D73",
  "#F3A505",
  "#2A6478",
  "#CC0605",
  "#497E76",
  "#D36E70",
  "#FF2301",
  "#4C514A",
  "#2E3A23",
  "#5D9B9B",
  "#474A51",
  "#EFA94A",
  "#4D5645",
  "#606E8C",
  "#A5A5A5",
];

// Function to create and append a color box
function renderColorBox(color) {
  // Create a new div element
  const colorBox = document.createElement("div");

  // Add the class 'color-box' to the div
  colorBox.classList.add("color-box");

  // Set the background-color of the div to the current color
  colorBox.style.backgroundColor = color;

  // Append the div to the body
  document.body.appendChild(colorBox);
}

// Use the forEach method with renderColorBox to create the color boxes
colors.forEach(renderColorBox);
