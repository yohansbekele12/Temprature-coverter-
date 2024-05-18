const num=document.getElementById("num");
const check1=document.getElementById("check1");
const check2=document.getElementById("check2");
const btn=document.getElementById("btn");
const rst=document.getElementById("rst");

btn.onclick=function(event) {
    event.preventDefault(); // Prevent form submission
    let value = parseFloat(num.value); // Convert input value to a number
    if (isNaN(value)) {
        rst.textContent = "Please enter a valid number.";
        return;
    }
    if(check1.checked){
        let sum=(value*1.8)+32;
        rst.textContent=`${sum}°C`;
    }
    else if(check2.checked){
        let sum=(value-32)/1.8;
        rst.textContent=`${sum}°F`;
    }
};
