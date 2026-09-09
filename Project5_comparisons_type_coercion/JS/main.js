// Type Coercion Examples
myVariable = "good morning";
document.write(typeof myVariable + " ");
//Type coercion with addition operator
document.write("5" + 5+ " ");
//Floating point infinity and negative infinity
document.getElementById("Test").innerHTML = 2E308;
document.getElementById("Test2").innerHTML = -3E308;
//Boolean comparisons outputs
document.write((18 > 11) + " ");
document.write((25 < 19) + " ");
//console math and boolean comparisons
console.log(7 + 2);
console.log(13 < 9);
//Double equals comparisons
document.write((7== 7) + " ");
document.write((4== 8) + " ");
//Triple equals comparisons
//a.return true: matching data type and value
document.write((10 === 10) + " ");
//b.return false: different data type, different value
document.write(("blue" === "10") + " ");
//c.return false: same data type, different value
document.write((9 === "9") + " ");
//d.return false: same data type, different value
document.write((9 === 10) + " ");
//Logical and (&&) operator
document.write((8 > 4) && (7 > 3) + " ");
document.write((5 > 4) && (6 < 3) + " ");
//Logical or (||) operator
document.write(((13 > 9) || (8 < 3)) + " ");
document.write(((8 < 4) || (7 < 3)) + " ");
// NOT operator function returning true
function not_Function() {
    document.getElementById("Not").innerHTML = !(5 > 10);
}
// NOT operator function returning false
function not_Function2() {
    document.getElementById("Not").innerHTML += " " + !(25 > 21);
}