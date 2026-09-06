//Function to perform addition and display the result in the HTML element with id "Math"
function addNumbers() {
    var addition = 13 + 24;
    document.getElementById("Math").innerHTML = "13 + 24 = " + addition;
}
//Function to perform subtraction and display the result in the HTML element with id "Math2"
function subtractNumbers() {
    var subtraction = 53 - 24;
    document.getElementById("Math2").innerHTML = "53 - 24 = " + subtraction;
}
//Function to perform multiplication and display the result in the HTML element with id "Math3"
function multiplyNumbers() {
    var multiplication = 9 * 6;
    document.getElementById("Math3").innerHTML = "9 * 6 = " + multiplication; 
}
//Function to perform division and display the result in the HTML element with id "Math4"
function divideNumbers() {
    var division = 64 / 8;
    document.getElementById("Math4").innerHTML = "64 / 8 = " + division; 
}
//Function to perform a more complex mathematical operation and display the result in the HTML element with id "Math5"
function more_Math() {
    var more_Math = (14+12)*4/8;
    document.getElementById("Math5").innerHTML = "(14+12)*4/8 = " + more_Math; 
}
//Function to perform modulus operation and display the result in the HTML element with id "Math6"
function simple_Math() {
    var simple_Math = 13 % 5;
    document.getElementById("Math6").innerHTML = "when you divide 13 by 5 you have a remainder of: " + simple_Math;
}
//Function to perform negation operation and display the result in the HTML element with id "Math7"
function negation_operator() {
    var x = 17;
    document.getElementById("Math7").innerHTML = -x;
}
//Function to perform increment operation and display the result in the HTML element with id "Math8"
function increment_operator() {
    var x = 21;
    x++;
    document_write(x);
}
//Function to perform decrement operation and display the result in the HTML element with id "Math9"
function decrement_operator() {
    var x = 11;
    x--;
    document_write(x);
}
//Function to generate a random number between 0 and 50 and display it in an alert box
window.alert(Math.random() * 50);
//Function to calculate the square root of 25 and display the result in the HTML element with id "Math_Object"
function MathObjectFunction() {
    document.getElementById("Math_Object").innerHTML = Math.sqrt(25);
}