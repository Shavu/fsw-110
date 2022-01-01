const square = document.createElement("div");
square.style.width = "250px";
square.style.height = "250px";
square.style.backgroundColor = "white";
square.style.margin = "0 auto";
square.style.marginTop = "20px";
document.body.appendChild(square);

for (let i = 0; i < 20; i++) {
    const h1 = document.createElement("h1");
    h1.textContent = ""; 
    document.body.appendChild(h1);
}

window.addEventListener("load", function() {
    square.style.backgroundColor = "black";
});

square.addEventListener("mouseover", function() {
    square.style.backgroundColor = "green";
});

square.addEventListener("mousedown", function() {
    square.style.backgroundColor = "yellow";
});

square.addEventListener("mouseup", function() {
    square.style.backgroundColor = "blue";
});

square.addEventListener("dblclick", function() {
    square.style.backgroundColor = "red";
});

window.addEventListener("scroll", function() {
    square.style.backgroundColor = "purple";
})

function setSquareBackgroundColor(color) {
    square.style.backgroundColor = color;
};

window.addEventListener("keydown", function(event) {
    switch (event.which) {
        case 82:
            setSquareBackgroundColor("red");
            break;
        case 71:
            setSquareBackgroundColor("green");
            break;
        case 66:
            setSquareBackgroundColor("blue");
            break;
        case 89:
            setSquareBackgroundColor("yellow");
            break;
        case 80:
            setSquareBackgroundColor("purple");
            break;
    }
});
