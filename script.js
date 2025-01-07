const textArea = document.getElementById('input_text');
const yourText = document.getElementById('your_text');


// background image set function
function setBackground(image) {
  // Set the background image for the body
  document.body.style.backgroundImage = `url('${image}')`;

  // Set the background image for the element with id="bg"
  const bgElement = document.getElementById("bg");
  if (bgElement) {
      bgElement.style.backgroundImage = `url('${image}')`;
  }
}

// Hide and showing the font option
// Select the button and the hidden div
const toggleButton = document.getElementById('toggleButton');
const hiddenDiv = document.getElementById('hiddenDiv');

// Add click event listener to the button
toggleButton.addEventListener('click', function () {
  // Toggle the visibility of the hidden div
  if (hiddenDiv.style.display === 'none' || hiddenDiv.style.display === '') {
    hiddenDiv.style.display = 'flex'; // Show the div
  } else {
    hiddenDiv.style.display = 'none'; // Hide the div
  }
});


// get the input value 
textArea.addEventListener('input', () => {
  const text = textArea.value; // Get the current value of the textarea
  
  if (text === '') {
    yourText.innerText = "Your Text"; // Show "Your Text" when input is empty
  } else {
    yourText.innerText = text; // Display the updated value
  }
});

// change the font-family
function changeFontFamily(fontFamily) {
  const div = document.getElementById('your_text'); // Get the target div
  div.style.fontFamily = fontFamily; // Update the font family
}
function changeColor(color) {
  const div = document.getElementById('your_text'); // Get the target div
  div.style.color = color; // Update the font color
  div.style.textShadow = `0 0 5px rgba(${hexToRgb(color)}, 0.8), 0 0 10px rgba(${hexToRgb(color)}, 0.8)`; // Semi-transparent shadow
}

function hexToRgb(hex) {
  let r = 0, g = 0, b = 0;
  // 3 digits
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  }
  // 6 digits
  else if (hex.length === 7) {
    r = parseInt(hex[1] + hex[2], 16);
    g = parseInt(hex[3] + hex[4], 16);
    b = parseInt(hex[5] + hex[6], 16);
  }
  return `${r},${g},${b}`;
}
