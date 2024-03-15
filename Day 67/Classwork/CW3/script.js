var lastName = "Tkeshelashvili"
var elements = document.getElementsByClassName('name');

for (var i = 0; i < elements.length; i++) {
    elements[i].textContent += " " + lastName;
}