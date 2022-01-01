const greeting = (elName, times) => {
    for (let i = 0; i < times; i ++) {
        const ele = document.createElement(elName);
        ele.innerHTML = "Hello, world!";
        document.body.appendChild(ele);
        ele.style.color = "ghostwhite";
        ele.style.fontStyle = "bold italic";
        ele.style.fontSize = "ex large";
      }
    };

    greeting('h1', 10);

   var names = [ "steve", "larry", "joe", "shirley",  "steph",  "nate",  "rick", "emily"];
var ul = document.createElement("ul");
var nameList = document.getElementById("names"); 

for (var i = 0; i < names.length; i++){
    var newName = document.createElement("li");
    newName.textContent = names[i];
    ul.appendChild(newName);
}  
document.body.append(ul);