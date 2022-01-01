//Complete Project 1: Create a Basic Website Using JS
// For this project, you will create a basic website where all the elements are created using only JavaScript.  
// Requirements:
// No css styling required
// Must link a JS file to HTML file
// Site must have:

// An h1 tag
// A p tag
// A list
// Footer
// You will append created elements to the <body> tag of your html page to produce the entire site, so the only HTML tag they will add to your HTML page is the script tag.

// a navbar with links (doesn’t need to work)
var navBar = document.createElement("navBar");
var a1 = document.createElement("a");  
a1.setAttribute("href", "#home ");  
a1.textContent = " Home ";    
a1.style.color = "cornflowerblue";

var a2 = document.createElement("a");  
a2.setAttribute("href", " #collection ");  
a2.textContent = " Collection ";    
a2.style.color = "lightcoral";  

var a3 = document.createElement("a");  
a3.setAttribute("href", " #contact ");    
a3.textContent = " Profile";    
a3.style.color = "lavenderblush";

var a4 = document.createElement("a");
a4.setAttribute("href", " Guide ");
a4.textContent = " Guide";
a4.style.color = "green";
navBar.append(a1, a2, a3, a4);   
document.body.appendChild(navBar);

 

// An h1 tag
var newH1 = document.createElement("h1");
newH1.textContent = "Hello World this is Shavu's website";
document.body.append(newH1);

// A p tag
var newP = document.createElement("p");
newP.textContent = "List of sport teams I follow!";
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

newOrderList.appendChild(li1);
newOrderList.appendChild(li2);
newOrderList.appendChild(li3);
document.body.append(newOrderList);

var myfooter = document.createElement("footer");
myfooter.innerHTML="Created by Travis Manners in FSW-110";
myfooter.style.fontStyle = "italic";
document.body.appendChild(myfooter);





























// var myfooter = document.createElement(“footer”);
// const p2 = document.createElement(“p”);
// p2.innerHTML = “Created by Travis Manners in FSW-110";
// p2.style.fontStyle = “italic”;
// footer.appendChild(p2);
// document.body.appendChild(footer);

{/* <a href="#">Link</a>
<a href="javascript:void(0);">Link</a>
<a href="javascript:return false;">Link</a> */}

























