const myform = document.getElementById("form");
const names = document.getElementById("namebox");
const lastname = document.getElementById("lastname");
const Businessname = document.getElementById("Business Name");

myform.addEventListener("submit", function(){
    alert(`
    Name: ${names.value}
    lastname: ${lastname.value}
    Businessname: ${Businessname.value} `);
})