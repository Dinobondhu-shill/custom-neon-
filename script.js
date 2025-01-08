const textArea = document.getElementById('input_text');
const yourText = document.getElementById('your_text');
const toggleButton = document.getElementById('toggleButton');
const hiddenDiv = document.getElementById('hiddenDiv');
let changeRGBInterval = null;

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
  yourText.style.fontFamily = fontFamily; // Update the font family
}



// change the color of your text
function changeColor(color, target) {
  const newR = getRandomColorValue();
      const newG = getRandomColorValue();
      const newB = getRandomColorValue();
  yourText.style.color = color; // Update the font color
  yourText.style.textShadow = `
  rgb(${newR}, ${newG}, ${newB}) 1px 1px 0px, 
  rgb(${newR}, ${newG}, ${newB}) -1px -1px 0px, 
  rgb(${newR}, ${newG}, ${newB}) -1px 1px 0px, 
  rgb(${newR}, ${newG}, ${newB}) 1px -1px 0px, 
  rgba(${newR}, ${newG}, ${newB}, 0.6) 2px 2px 0px, 
  rgba(${newR}, ${newG}, ${newB}, 0.6) -2px -2px 0px, 
  rgba(${newR}, ${newG}, ${newB}, 0.6) -2px 2px 0px, 
  rgba(${newR}, ${newG}, ${newB}, 0.6) 2px -2px 0px, 
  rgb(255, 255, 255) 0px 0px 3px, 
  rgb(255, 255, 252) 0px 0px 5px, 
  rgb(255, 255, 255) 0px 0px 8px, 
  rgb(255, 255, 255) 0px 0px 10px, 
  rgba(255, 255, 255, 0.6) 0px 0px 12px, 
  rgba(255, 255, 255, 0.5) 0px 0px 18px, 
  rgb(${newR}, ${newG}, ${newB}) 0px 0px 20px, 
  rgb(${newR}, ${newG}, ${newB}) 0px 0px 30px, 
  rgb(${newR}, ${newG}, ${newB}) 0px 0px 40px, 
  rgb(${newR}, ${newG}, ${newB}) 0px 0px 50px, 
  rgb(${newR}, ${newG}, ${newB}) 0px 0px 60px, 
  rgb(${newR}, ${newG}, ${newB}) 0px 0px 70px, 
  rgb(${newR}, ${newG}, ${newB}) 0px 0px 80px, 
  rgb(${newR}, ${newG}, ${newB}) 0px 0px 90px, 
  rgba(${newR}, ${newG}, ${newB}, 0.5) 0px 0px 100px
`;


  const colorItems = document.querySelectorAll(".color-item");
  colorItems.forEach(item => item.classList.remove("selected"));
  // Add the 'selected' class to the clicked element
  target.classList.add('selected');

   // Clear any existing intervals to prevent stacking
   if (changeRGBInterval) {
    clearInterval(changeRGBInterval);
    changeRGBInterval = null;
  }

}

// function to convert hexadecimal to rgb color
function hexToRgb(hex) {
  let r = 0,
    g = 0,
    b = 0;
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

// function for change background color automatically

function getRandomColorValue() {
  return Math.floor(Math.random() * 256); // Random number between 0-255
}

function changeTextColor() {
  const div = document.getElementById('rgb-change')
  const r = getRandomColorValue();
  const g = getRandomColorValue();
  const b = getRandomColorValue();
  div.style.background = `rgb(${r}, ${g}, ${b})`;
}

setInterval(changeTextColor, 1000);


function changeRGB(target) {

  // Select all elements with the class "color-item"
  const colorItems = document.querySelectorAll(".color-item");

  // Remove the 'selected' class from all elements
  colorItems.forEach(item => item.classList.remove("selected"));

  // Add the 'selected' class to the clicked element
  target.classList.add("selected");

 
  // Check if the target has the 'selected' class and call the function every 500ms
  if (target.classList.contains("selected")) {

     // Set up a new interval for the color change
     changeRGBInterval = setInterval(() => {
      const newR = getRandomColorValue();
      const newG = getRandomColorValue();
      const newB = getRandomColorValue();
      yourText.style.color = `rgb(${newR}, ${newG}, ${newB})`;
      yourText.style.textShadow = `
    rgb(${newR}, ${newG}, ${newB}) 1px 1px 0px, 
    rgb(${newR}, ${newG}, ${newB}) -1px -1px 0px, 
    rgb(${newR}, ${newG}, ${newB}) -1px 1px 0px, 
    rgb(${newR}, ${newG}, ${newB}) 1px -1px 0px, 
    rgba(${newR}, ${newG}, ${newB}, 0.6) 2px 2px 0px, 
    rgba(${newR}, ${newG}, ${newB}, 0.6) -2px -2px 0px, 
    rgba(${newR}, ${newG}, ${newB}, 0.6) -2px 2px 0px, 
    rgba(${newR}, ${newG}, ${newB}, 0.6) 2px -2px 0px, 
    rgb(255, 255, 255) 0px 0px 3px, 
    rgb(255, 255, 252) 0px 0px 5px, 
    rgb(255, 255, 255) 0px 0px 8px, 
    rgb(255, 255, 255) 0px 0px 10px, 
    rgba(255, 255, 255, 0.6) 0px 0px 12px, 
    rgba(255, 255, 255, 0.5) 0px 0px 18px, 
    rgb(${newR}, ${newG}, ${newB}) 0px 0px 20px, 
    rgb(${newR}, ${newG}, ${newB}) 0px 0px 30px, 
    rgb(${newR}, ${newG}, ${newB}) 0px 0px 40px, 
    rgb(${newR}, ${newG}, ${newB}) 0px 0px 50px, 
    rgb(${newR}, ${newG}, ${newB}) 0px 0px 60px, 
    rgb(${newR}, ${newG}, ${newB}) 0px 0px 70px, 
    rgb(${newR}, ${newG}, ${newB}) 0px 0px 80px, 
    rgb(${newR}, ${newG}, ${newB}) 0px 0px 90px, 
    rgba(${newR}, ${newG}, ${newB}, 0.5) 0px 0px 100px
  `;
    }, 1500); // Change color every 500ms
  }
}