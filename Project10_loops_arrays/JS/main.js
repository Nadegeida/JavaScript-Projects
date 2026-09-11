function Call_loop() {
    var Digit= "";
    var x = 1
//while loop counting from 1 to 10
while ( x <11){
    Digit+="<br>" + x;
    x++;
}
//output the result to the HTML paragraph element
document.getElementById("Loop").innerHTML=Digit;
}
var Instruments = ["Guitar","Piano","Drums","Bass","Violon","Trumpet","Flute"];
var content = "";
var Y ;
function for_Loop() {
    for (Y=0; Y< Instruments.length; Y++){
        content += Instruments[Y]+"<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML=content;
}
//function for the assignment
function array_function() {
    var cat_picture=[];
    cat_picture[0]="sleeping";
    cat_picture[1]="playing";
    cat_picture[2]="eating";
    cat_picture[3]="purring";
    document.getElementById("Array").innerHTML= "In this picture, the cat is " + cat_picture[2] +".";
}
//Create an object using 'const' with properties and values
const car={
    make:"Toyota",
    model:"SUV" ,
    color:"White",
    
};
//Define the function called by the HTML button
function Constant_function() {
//Change a property's value and add a new property
car.color = "blue";
car.price = "£20000";
//display a string that include the added property value and the change of property value
document.getElementById("Constant").innerHTML="The cost of the " + car.color + " " + car.make + " " + car.model + " is " +car.price +".";
}
//create an objet using 'let' with properties and a method
let phone = {
    make: "Apple ",
    model: "iPhone 17",
    color: "Silver ",
    storage: "512GB",
    description:function() {
        return "This phone is a " + this.color + " " + this.make + this.model + " with " + this.storage + " storage.";
    }
};
//Reference the id specified in index.html to output method's return value
document.getElementById("phone_object").innerHTML= phone.description();



