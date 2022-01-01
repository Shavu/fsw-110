var mydivAdd = document.createElement("div");
var containerAdd = document.createElement("fieldset");
    containerAdd.style.backgroundColor = "mistyrose"; 
    mydivAdd.appendChild(containerAdd);
var tabletopAdd = document.createElement("table");
    tabletopAdd.style.backgroundColor = "mistyrose"; 
    containerAdd.appendChild(tabletopAdd);

var row1A = document.createElement("tr");
    tabletopAdd.appendChild(row1A);
var firstnumA = document.createElement("td");
    firstnumA.textContent = "Number1:";
var firstnumberA = document.createElement("input");
    firstnumberA.type = "number";
    firstnumA.appendChild(firstnumberA);
    firstnumA.setAttribute("id", "num1");
    row1A.appendChild(firstnumA);

var row2A = document.createElement("tr");
    tabletopAdd.appendChild(row2A);
var secondnumA = document.createElement("td");
    secondnumA.textContent = "Number 2:";
var secondnumberA = document.createElement("input");
    secondnumberA.type = "number";
    secondnumA.appendChild(secondnumberA);
    secondnumA.setAttribute("id", "num2");
    row1A.appendChild(secondnumA);

var row3A = document.createElement("tr");
      tabletopAdd.appendChild(row3A);
var lastdataA = document.createElement("td");
    lastdataA.textContent = "Result:";
var resboxA = document.createElement("input");
    resboxA.setAttribute("type", "number");
    lastdataA.appendChild(resboxA);
    lastdataA.setAttribute("id", "res");
    row3A.appendChild(lastdataA);

var tablebottomA = document.createElement("table");
    tablebottomA.style.backgroundColor = "mistyrose"; 
    containerAdd.appendChild(tablebottomA); 

var line1A = document.createElement("tr");
  tablebottomA.appendChild(line1A);
var secdataA = document.createElement("td");
  line1A.appendChild(secdataA)
var btnadd = document.createElement("button"); 
  btnadd.innerHTML = "+";
  secdataA.appendChild(btnadd);
        
  btnadd.addEventListener("click", function(){
    if (btnadd){
      resboxA.value = Number(firstnumberA.value) + Number(secondnumberA.value);
}});

var mydivSub = document.createElement("div");
var containerSub = document.createElement("fieldset");
    containerSub.style.backgroundColor = "black"; 
    mydivSub.appendChild(containerSub);        
var tabletopSub = document.createElement("table");
    tabletopSub.style.backgroundColor = "black"; 
    containerSub.appendChild(tabletopSub);
var row1S = document.createElement("tr");
     tabletopSub.appendChild(row1S);
var firstnumS = document.createElement("td");
      firstnumS.textContent = "Number1:";
var firstnumberS = document.createElement("input");
   firstnumberS.type = "number";
    firstnumS.appendChild(firstnumberS);
    firstnumS.setAttribute("id", "num1");
    row1S.appendChild(firstnumS);      
var row2S = document.createElement("tr");
    tabletopSub.appendChild(row2S);
var seconddataS = document.createElement("td");
    seconddataS.textContent = "Number2:";
var secondnumS = document.createElement("input");
    secondnumS.type = "number";
    seconddataS.appendChild(secondnumS);
    seconddataS.setAttribute("id", "num2");
    row2S.appendChild(seconddataS);      
var row3S = document.createElement("tr");
    tabletopSub.appendChild(row3S);
var lastdataS = document.createElement("td");
    lastdataS.textContent = "Result:";
var resboxS = document.createElement("input");
    resboxS.setAttribute("type", "number");
    lastdataS.appendChild(resboxS);
    lastdataS.setAttribute("id", "res");
    row3S.appendChild(lastdataS); 
var tablebottomS = document.createElement("table");
    tablebottomS.style.backgroundColor = "darkslategray"; 
    containerSub.appendChild(tablebottomS);
var line2S = document.createElement("tr");
    tablebottomS.appendChild(line2S);
var secdataS = document.createElement("td");
    line2S.appendChild(secdataS)
var btnsub = document.createElement("button"); 
    btnsub.innerHTML = "-";
    secdataS.appendChild(btnsub);

btnsub.addEventListener("click", function(){
  if (btnsub){
    resboxS.value = Number(firstnumberS.value) - Number(secondnumS.value);
}});

var mydivMul = document.createElement("div");
var containerMul = document.createElement("fieldset");
  containerMul.style.backgroundColor = "darkslategray"; 
  mydivMul.appendChild(containerMul);
var tabletopMul = document.createElement("table");
    tabletopMul.style.backgroundColor = "darkslategray";  
    containerMul.appendChild(tabletopMul);
var row1M = document.createElement("tr");
    tabletopMul.appendChild(row1M);
var firstnumM = document.createElement("td");
    firstnumM.textContent = "Number1:";
var firstnumberM = document.createElement("input");
    firstnumberM.type = "number";
    firstnumM.appendChild(firstnumberM);
    firstnumM.setAttribute("id", "num1");
    row1M.appendChild(firstnumM); 

var row2M = document.createElement("tr");
    tabletopMul.appendChild(row2M);
var seconddataM = document.createElement("td");
    seconddataM.textContent = "Number2:";
var secondnumM = document.createElement("input");
    secondnumM.type = "number";
    seconddataM.appendChild(secondnumM);
    seconddataM.setAttribute("id", "num2");
    row2M.appendChild(seconddataM);      
var row3M = document.createElement("tr");
    tabletopMul.appendChild(row3M);
var lastdataM = document.createElement("td");
    lastdataM.textContent = "Result:";
var resboxM = document.createElement("input");
    resboxM.setAttribute("type", "number");
    lastdataM.appendChild(resboxM);
    lastdataM.setAttribute("id", "res");
    row3M.appendChild(lastdataM); 
var tablebottomM = document.createElement("table");
    tablebottomM.style.backgroundColor = "darkslategray";  
    containerMul.appendChild(tablebottomM);
var line3M = document.createElement("tr");
    tablebottomM.appendChild(line3M);
var trddataM = document.createElement("td");
    line3M.appendChild(trddataM)
var btnmul = document.createElement("button"); 
    btnmul.innerHTML = "*";
    trddataM.appendChild(btnmul);

    btnmul.addEventListener("click", function(){
    if (btnmul){
        resboxM.value = Number(firstnumberM.value) * Number(secondnumM.value);
      }});

var mydivD = document.createElement("div");
var containerD = document.createElement("fieldset");
    containerD.style.backgroundColor = "palevioletred";  
    mydivD.appendChild(containerD);
var tabletopD = document.createElement("table");
    tabletopD.style.backgroundColor = "palevioletred"; 
    containerD.appendChild(tabletopD);
var row1D = document.createElement("tr");
    tabletopD.appendChild(row1D);
var firstnumD = document.createElement("td");
    firstnumD.textContent = "Number1:";
var firstnumberD = document.createElement("input");
    firstnumberD.type = "number";
    firstnumD.appendChild(firstnumberD);
    firstnumD.setAttribute("id", "num1");
    row1D.appendChild(firstnumD);      
var row2D = document.createElement("tr");
    tabletopD.appendChild(row2D);
var seconddataD = document.createElement("td");
    seconddataD.textContent = "Number2:";
var secondnumD = document.createElement("input");
    secondnumD.type = "number";
    seconddataD.appendChild(secondnumD);
    seconddataD.setAttribute("id", "num2");
    row2D.appendChild(seconddataD);      
var row3D = document.createElement("tr");
    tabletopD.appendChild(row3D);
var lastdataD = document.createElement("td");
    lastdataD.textContent = "Result:";
var resboxD = document.createElement("input");
    resboxD.setAttribute("type", "number");
    lastdataD.appendChild(resboxD);
    lastdataD.setAttribute("id", "res");
    row3D.appendChild(lastdataD); 
var tablebottomD = document.createElement("table");
    tablebottomD.style.backgroundColor = "black";  
    containerD.appendChild(tablebottomD);
var line4D = document.createElement("tr");
    tablebottomD.appendChild(line4D);
var frthdataD = document.createElement("td");
    line4D.appendChild(frthdataD)
var btndiv = document.createElement("button"); 
    btndiv.innerHTML = "/";
    frthdataD.appendChild(btndiv);

    btndiv.addEventListener("click", function(){
      if (btndiv){
        resboxD.value = Number(firstnumberD.value) / Number(secondnumD.value);
      }});
 document.body.append(mydivAdd, mydivSub, mydivMul, mydivD);