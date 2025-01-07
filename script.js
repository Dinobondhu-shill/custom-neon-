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

// get text area input value
textArea.addEventListener('input', () => {
  const text = textArea.value; // Get the current value of the textarea
  console.log(text)
  yourText.innerText = `${text}`; // Display the updated value
});