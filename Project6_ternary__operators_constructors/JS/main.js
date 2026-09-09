//
function Ride_Function() {
   // 
    var Height, Can_ride;
    //
    Height = document.getElementById("Height").value;
    //Using a ternary operator to check if Height is less than 52 and assigning the appropriate message to Can_ride
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    //
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}
//Function to determine if a person is old enough to vote using a ternary operator and display the result in the HTML element with id "Vote"
function Vote_Function() {
    var Age, Can_Vote;
   //Getting the value of the input element with id "Age" and storing it in the variable Age
    Age = document.getElementById("Age").value;
    //Using a ternary operator to check if Age is less than 18 and assigning the appropriate message to Can_Vote
    Can_Vote = (Age < 18) ? "You are not old enough":"You are old enough";
    //Displaying the result in the HTML element with id "Vote"
    document.getElementById("Vote").innerHTML = Can_Vote + " to vote.";
}
//Constructor function to create a Book object with properties for title, author, year, pages, and genre
function Book(title, author, year, pages, genre) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
    this.genre = genre;   
}
//Creating three instances of the Book object using the constructor function
var Book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925, 218, "Novel");
var Book2 = new Book("The Hobbit", "J.R.R. Tolkien", 1937, 310, "Fantasy");
var Book3 = new Book("To Kill a Mockingbird", "Harper Lee", 1960, 281, "Novel");
//Function to display the properties of Book1 in the HTML element with id "New_and_This"
function myFunction() {
    document.getElementById("New_and_This").innerHTML = "The book " + Book1.title + " was written by " + Book1.author + " in " + Book1.year + ". It has " + Book1.pages + " pages and is a " + Book1.genre + ".";
}
//Function to demonstrate nested functions by incrementing a starting point and displaying the result in the HTML element with id "Nested_Function"
function Count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    //Nested function to increment the starting point by 1
    function Count() {
        var Starting_point = 7;
        //
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}