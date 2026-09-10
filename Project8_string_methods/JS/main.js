//Function that concatenates multiple string variables togetherand display the sentence in the HTML
function full_sentence() {
    var part_1 = "This morning "
    var part_2 = "I will clean "
    var part_3 = "the entire house.";
    var whole_sentence = part_1.concat(part_2,part_3);
    document.getElementById("Concatenate").innerHTML=whole_sentence;
}
//Function that extracts a section of a string using the slice() method and display it in the HTML
function slice_method () {
    var sentence ="Eat five fruits and vegetable give helps lower the risk of serious health problems";
    var section = sentence.slice (41,56);
    document.getElementById("slice").innerHTML=section
}
//Function that converts a number variable into a string using the toString and display it in the HTML 
function string_Method() {
    var x = 512;
    document.getElementById("Numbers_to_string").innerHTML=x.toString();
}
//Function that formats a number to a specified precison lenght using toPrecision and display it in the HTML
function Precision_Method () {
    var x= 5126.3674925370167;
    document.getElementById("Precision").innerHTML=x.toPrecision(9);
}