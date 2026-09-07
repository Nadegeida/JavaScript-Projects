//function to define a dictionarty object and display the value
function my_Dictionary() {
//define a dictionary object representing a car with various properties
    var car = {
        make: "toyota",
        model: "camry",
        body: "suv",
        year: 2020,
        color: "black"
    };
//delete the color keyfrom the car object before displaying
    delete car.color;
//display the value of the deleted key in the HTML element with id "Dictionary"
    document.getElementById("Dictionary").innerHTML = car.color;
}