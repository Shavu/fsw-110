for (var i = 0; i < 5; i++){
    var headings = document.createElement("h2");
    headings.textContent = "Hello Steelers Nation! ";    
    document.body.appendChild(headings);
}  

var titles = document.querySelectorAll("h2");

for (let i = 0; i < titles.length; i++){ 
    titles[i].style.fontFamily = "sans serif";
    titles[i].style.fontSize = "20px";
    titles[i].style.fontWeight = "lighter";  
    titles[i].style.color = "cornflowerblue";
}

for (let i = 0; i < titles.length; i++){    
    titles[i].classList.add("border");
}