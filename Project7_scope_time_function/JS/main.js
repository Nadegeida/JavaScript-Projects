//Global variable declaration
var x= 5
//Function demonstrating global variable scope
function add_numbers_1 () {
    document.write(30+ x + "<br>");
}
//Function attempting to access global variable x
function add_numbers_2 () {
    document.write(x + 50 );
}
//Function demonstrating local variable scope
function add_numbers_3 () {
    var x = 10;
    document.write(50+ x + "<br>");
    }
//Function causing an intentional ReferenceError (local variable not accessible)
function add_numbers_4 () {
    document.write(x + 27);
}
//Function using local variable and logging the result
function add_numbers_5 () {
    var x = 20;
    var y = 30;
    console.log(x + y);
}
//Calling the Scope test functions
add_numbers_1();
add_numbers_2();
add_numbers_3();
add_numbers_4();
add_numbers_5();
//Function to check current time and display a greeting
function get_Date() {
    if (new Date().getHours() < 16) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}
//Function checking condition with a custom boolean variable
function Wash_Clothes() {
    var Washer_Full = true;
        if (Washer_Full) {
        document.getElementById("If_Statement").innerHTML = "The clothes are ready to be washed.";
    }
}
//Function evaluating test score input with if/else logic
function CheckPass_Function() {
    var Score, Pass_Message;
    Score = document.getElementById("testScore").value;
    if (Score >= 60) {
        Pass_Message = "Congratulations! You passed the test.";
    } else {
        Pass_Message = "Sorry, you did not pass the test. Please try again.";
    }
    document.getElementById("Pass_Result").innerHTML= Pass_Message;
}
//Function determining time of day using else-if statement logic
function Time_function () {
    var Time = new Date ().getHours();
    var Reply;
    if (Time<12 && Time >0) {
        Reply="It is morning time!";   
    }
    else if (Time >=12 &&Time< 18){
        Reply="It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
