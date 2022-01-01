// H1 with the text “Welcome to my JS site”
var newH1 = document.createElement("h1");
newH1.textContent = "Welcome to my JS site";
document.body.append(newH1);

// Paragraph (P tag) with the text “All of this was created with Javascript”
var newP = document.createElement("p");
newP.textContent = "All of this was created with Javascript";
document.body.append(newP);

// An Ordered list (ol) with at least three items (li).
var newOrderList = document.createElement("ol");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");

// Each li should also display text.
li1.textContent = "Pittsburgh Steelers";
li2.textContent = "New York Yankess";
li3.textContent = "New York Knicks";

// Remember, you will need to first add the li’s to the ol before appending the ol to the DOM.
newOrderList.appendChild(li1);
newOrderList.appendChild(li2);
newOrderList.appendChild(li3);
document.body.append(newOrderList);

var myfooter = document.createElement("footer");
myfooter.innerHTML="Created by Travis Manners in FSW-110";
myfooter.style.fontStyle = "italic";
document.body.appendChild(myfooter);



   


























