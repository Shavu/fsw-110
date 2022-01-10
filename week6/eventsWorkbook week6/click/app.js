// make the box disapear when the user clicks it
var div = document.getElementsByClassName('red-box')[0];

div.addEventListener('click', function (event) {
    this.style.display = 'none';
});