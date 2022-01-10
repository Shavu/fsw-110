// The "submit" event refreshes your browser by default
// use "e.preventDefault()" in the first line of your callback function to prevent this
// remember to pass "e" into the callback function
var firstName = document.getElementById("name");

var form = document.getElementById("submit-me");

var nameTag = form.elements["name"];
document.getElementById("name").placeholder = "Type name here..";

var ageTag = form.elements["age"];
document.getElementById("age").placeholder = "Type age here..";

form.addEventListener("submit", function(e){
    e.preventDefault();
    alert("Name: " + nameTag.value + "\n" + " Age: " + ageTag.value);
})