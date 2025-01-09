const textArea = document.getElementById('input_text');
const yourText = document.getElementById('your_text');
const toggleButton = document.getElementById('toggleButton');
const hiddenDiv = document.getElementById('hiddenDiv');
let changeRGBInterval = null;
const toggleSwitch = document.getElementById("shadow-switch")

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
  
  yourText.style.color = color; // Update the font color

  // Extract the RGB values from the color argument
  const rgbColor = color
    .replace("rgb(", "")
    .replace("rgba(", "")
    .replace(")", "")
    .split(",")
    .map(c => c.trim())
    .join(", ");

  // Update the text shadow dynamically using the color
  yourText.style.textShadow = `
    rgb(${rgbColor}) 1px 1px 0px, rgb(${rgbColor}) -1px -1px 0px, rgb(${rgbColor}) -1px 1px 0px, rgb(${rgbColor}) 1px -1px 0px,
    rgba(${rgbColor}, 0.6) 2px 2px 0px, rgba(${rgbColor}, 0.6) -2px -2px 0px, rgba(${rgbColor}, 0.6) -2px 2px 0px, rgba(${rgbColor}, 0.6) 2px -2px 0px,
    rgb(255, 255, 255) 0px 0px 3px, rgb(255, 255, 255) 0px 0px 5px, rgb(255, 255, 255) 0px 0px 8px, rgb(255, 255, 255) 0px 0px 10px,
    rgba(255, 255, 255, 0.6) 0px 0px 12px, rgba(255, 255, 255, 0.5) 0px 0px 18px,
    rgb(${rgbColor}) 0px 0px 20px, rgb(${rgbColor}) 0px 0px 30px, rgb(${rgbColor}) 0px 0px 40px,
    rgb(${rgbColor}) 0px 0px 50px, rgb(${rgbColor}) 0px 0px 60px, rgb(${rgbColor}) 0px 0px 70px,
    rgb(${rgbColor}) 0px 0px 80px, rgb(${rgbColor}) 0px 0px 90px, rgba(${rgbColor}, 0.5) 0px 0px 100px
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


// change the rgb color area's color
function changeTextColor() {
  const div = document.getElementById('rgb-change')
  const r = getRandomColorValue();
  const g = getRandomColorValue();
  const b = getRandomColorValue();
  div.style.background = `rgb(${r}, ${g}, ${b})`;
}

setInterval(changeTextColor, 1000);


function changeRGB(target) {

  const rgbDiv = document.getElementById("rgb-div") 
  // Select all elements with the class "color-item"
  const colorItems = document.querySelectorAll(".color-item");

  // Remove the 'selected' class from all elements
  colorItems.forEach(item => item.classList.remove("selected"));

  // Add the 'selected' class to the clicked element
  target.classList.add("selected");
toggleSwitch.style.display = 'none'
rgbDiv.style.display = 'flex'
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

function toggleShadow() {
const toggle = document.getElementById("toggle");; // Reference the target text element

  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      // Checkbox is checked: Restore the original shadow
      const originalShadow = yourText.getAttribute("data-original-shadow");

      if (originalShadow) {
        yourText.style.textShadow = originalShadow; // Restore the saved shadow
      } else {
        yourText.style.textShadow = "none"; // Fallback in case no shadow was saved
      }
    } else {
      // Checkbox is unchecked: Remove all shadows
      const currentShadow = getComputedStyle(yourText).textShadow;
      if (!yourText.getAttribute("data-original-shadow")) {
        yourText.setAttribute("data-original-shadow", currentShadow); // Save the current shadow
      }
      yourText.style.textShadow = "none"; // Remove all shadows
    }
  });
}
toggleShadow()