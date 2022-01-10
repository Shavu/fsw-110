var redBox = document.querySelector(".red-box");

redBox.addEventListener('mousemove', function(e){
  redBox.textContent = "The X coordinate is : " + e.clientX + "The Y coordinate is : " + e.clientY;
});