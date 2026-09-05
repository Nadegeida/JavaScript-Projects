function myFunction() {
var x = 5; //Assigning a value 5 to a variable x
var y = 25; //Assigning a value 25 to a variable y
document.getElementById("Button_Text").innerHTML = x + y; //Adding the values of x and y and displaying the result.
}
function mySecondFunction() {
var sentence= "Monday is the beginning of the week."; // Assigning a string to a variable sentence
sentence += "and everybody is returning to work."; // Adding additional text to the variable sentence using += operator
document.getElementById("concatenate").innerHTML = sentence; // Displaying the full string in HTML.
}