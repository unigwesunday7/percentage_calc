let numField1 = document.getElementById('input1');
let numField2 = document.getElementById('input2');
let form = document.getElementById('calcForm');

form.addEventListener('submit', function(event) {

    
    if (!numField1.value || !numField2.value) {
        calcResult.innerText = "Please enter values in the fields"
        event.preventDefault();
    }
    else if (document.getElementById("calcSelect").selectedIndex == "0"){
        var x = parseFloat(input1.value);
        var y = parseFloat(input2.value);
        var result = y / 100 * x;
        calcResult.innerText = "Result: " + y + "% of " + x + " = " + result;
        sumary.innerText = `Equation:  y / 100 * x = ${result}`;
        event.preventDefault();
    } 
    
    else if (document.getElementById("calcSelect").selectedIndex == "1"){
        var x = parseFloat(input1.value);
        var y = parseFloat(input2.value);
        var result = x * 100 / y;
        calcResult.innerText = x + " is " + y + " % of " + result;
        sumary.innerText = `Equation:  x * 100 / x`;
        event.preventDefault();
    } 
    
    else if (document.getElementById("calcSelect").selectedIndex == "2"){
        var x = parseFloat(input1.value);
        var y = parseFloat(input2.value);
        var result = y / x * 100;
        calcResult.innerText = result + "% of " + x + " is " + y;
        sumary.innerText = `Equation:  y / x * 100`;
        event.preventDefault();
    } 
    
    else if (document.getElementById("calcSelect").selectedIndex == "3"){
        var x = parseFloat(input1.value);
        var y = parseFloat(input2.value);
        var result = y / x * 100;
        calcResult.innerText = x + "% of " + result + " is " + y;
        sumary.innerText = `Equation:  y / x * 100`;
        event.preventDefault();
    } 
    
    else if (document.getElementById("calcSelect").selectedIndex == "4"){
        var x = parseFloat(input1.value);
        var y = parseFloat(input2.value);
        var result = y / 100 * x;
        calcResult.innerText = y + "% of " + x + " is " + result;
        sumary.innerText = `Equation:  y / 100 * x`;
        event.preventDefault();
    }
});