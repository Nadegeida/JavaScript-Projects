alert(document.getElementById("p1").innerHTML)
function changeText() {
    document.getElementById("p1").innerText="Hello world! The defer attribute allowed this script to load after the HTML element was parsed.";
}
changeText;