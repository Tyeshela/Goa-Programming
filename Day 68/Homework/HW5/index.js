// Function to change the border color of elements with a specific class
function changeBorderColor() {
    // Select all elements with the class 'target-class'
    var elements = document.getElementsByClassName('target-class');
  
    // Loop through the NodeList of elements and change their border color
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.borderColor = '#3498db'; // Set the new border color
      elements[i].style.borderStyle = 'solid'; // Ensure the border is visible
      elements[i].style.borderWidth = '2px'; // Set a suitable border width
    }
  }
  
  // You can call this function whenever appropriate in your script
  // For example, you might want to call it once the page has fully loaded
  window.onload = function() {
    changeBorderColor();
  };
  