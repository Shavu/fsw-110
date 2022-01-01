var form = document.getElementById("form");
var selectMenu = document.getElementById("options");

form.addEventListener("submit", function() {
    var checkbox = document.querySelectorAll('input[type = "checkbox"]:checked');
    var automobile = [];
    for (var i = 0; i < checkbox.length; i++) {
        automobile.push(" " + checkbox[i].value);

    }
    alert(` 
    First Name: ${form.firstnamebox.value}
    Last Name: ${form.lastnamebox.value}
    Age: ${form.agebox.value}
    How likely to reccomend: ${selectMenu.options[selectMenu.selectedIndex].value}
    Please select three automobiles: ${automobile}`);
});


