const textArea = document.getElementById('input_text');
const yourText = document.getElementById('your_text');
const toggleButton = document.getElementById('toggleButton');
const hiddenDiv = document.getElementById('hiddenDiv');
let changeRGBInterval = null;
const toggleSwitch = document.getElementById("shadow-switch")
const rgbDiv = document.getElementById("rgb-div") 

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
 document.getElementById("selectedFont").value = fontFamily
  yourText.style.fontFamily = fontFamily; // Update the font family
}



// change the color of your text
function changeColor(color, target) {
 const selectedColor = document.getElementById("selectedColor").value = color;


  yourText.style.color = color; // Update the font color
  toggleSwitch.style.display = 'flex'
rgbDiv.style.display = 'none'

  // Extract the RGB values from the color argument
  const rgbColor = color
    .replace("rgb(", "")
    .replace("rgba(", "")
    .replace(")", "")
    .split(",")
    .map(c => c.trim())
    .join(", ");


    yourText.style.textShadow= `0 0 0px rgb(${rgbColor}), 0 2px 5px rgb(${rgbColor}), 0 5px 45px rgb(${rgbColor}), 0 0 45px rgb(${rgbColor}), 0 0 50px rgb(${rgbColor}), 0 0 80px rgb(${rgbColor}), 10px 15px 85px rgb(${rgbColor}), 0 14px 20px rgb(${rgbColor})`;
  // Update the text shadow dynamically using the color
  // yourText.style.textShadow = `
  //   rgb(${rgbColor}) 1px 1px 0px, rgb(${rgbColor}) -1px -1px 0px, rgb(${rgbColor}) -1px 1px 0px, rgb(${rgbColor}) 1px -1px 0px,
  //   rgba(${rgbColor}, 0.6) 2px 2px 0px, rgba(${rgbColor}, 0.6) -2px -2px 0px, rgba(${rgbColor}, 0.6) -2px 2px 0px, rgba(${rgbColor}, 0.6) 2px -2px 0px,
  //   rgb(255, 255, 255) 0px 0px 3px, rgb(255, 255, 255) 0px 0px 5px, rgb(255, 255, 255) 0px 0px 8px, rgb(255, 255, 255) 0px 0px 10px,
  //   rgba(255, 255, 255, 0.6) 0px 0px 12px, rgba(255, 255, 255, 0.5) 0px 0px 18px,
  //   rgb(${rgbColor}) 0px 0px 20px, rgb(${rgbColor}) 0px 0px 30px, rgb(${rgbColor}) 0px 0px 40px,
  //   rgb(${rgbColor}) 0px 0px 50px, rgb(${rgbColor}) 0px 0px 60px, rgb(${rgbColor}) 0px 0px 70px,
  //   rgb(${rgbColor}) 0px 0px 80px, rgb(${rgbColor}) 0px 0px 90px, rgba(${rgbColor}, 0.5) 0px 0px 100px
  // `;


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

// handle size 
function handleSize(size){
document.getElementById("selectedSize").value = size;
}
// function for get choosing area
function handleArea(name){
  document.getElementById("selectedPlace").value = name;
}

// function for handle Backboard option
function handleBackboard(name){
  document.getElementById("selectedVariant").value = name;
}

// handle selected option for setting kit 
function getCheckboxValues() {
  const checkboxes = document.querySelectorAll(".custom-checkbox");
  const selectedValues = [];

  checkboxes.forEach((checkbox, index) => {
    if (checkbox.checked) {
      // Get the parent label of the checkbox
      const label = checkbox.closest(".custom-checkbox-option");
      
      // Get the label text (associated description)
      const labelText = label.querySelector(".custom-label").innerText.trim();

      // Check if it contains a dropdown
      const select = label.querySelector(".custom-select");
      const selectedOption = select ? select.value : null;

      // Add data to the results array
      selectedValues.push({
        label: labelText,
        selectedOption: selectedOption || null, // Add dropdown value if it exists
      });
    }
  });

  return selectedValues;
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

// Handle form submit
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  // Collecting values
  const selectedText = textArea.value // Assuming textArea has an ID
  const selectedFont = document.getElementById("selectedFont").value;
  const selectedArea = document.getElementById("selectedPlace").value;
  const selectedColor = document.getElementById("selectedColor").value;
  const selectedSize = document.getElementById("selectedSize").value;
  const selectedVariant = document.getElementById("selectedVariant").value;
  const selectedOptions = getCheckboxValues();

  // Validation
  let errorMessage = ""; // To hold error messages

  if (!selectedText) errorMessage += "Text field is required.\n";
  if (!selectedFont) errorMessage += "Font selection is required.\n";
  if (!selectedArea) errorMessage += "Placement selection is required.\n";
  if (!selectedColor) errorMessage += "Color selection is required.\n";
  if (!selectedSize) errorMessage += "Size selection is required.\n";
  if (!selectedVariant) errorMessage += "Variant selection is required.\n";
  if (selectedOptions.length === 0) errorMessage += "At least one option must be selected.\n";

  // If there are errors, show alert and stop submission
  if (errorMessage) {
    alert("Please fill in all required fields:\n" + errorMessage);
    return;
  }

  // If everything is valid, submit form data
  console.log("Form Submitted with:", selectedOptions, selectedArea, selectedColor, selectedFont, selectedVariant, selectedText, selectedSize);
});


toggleShadow()