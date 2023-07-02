
const keys={
    upperCase :"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase :"abcdefghijklmnopqrstuvwxyz",
    number :"0123456789",
    symbol:"!@#$%^&*(){}[]|:;',./?/*-+"
}
const getKey = [
    function upperCase(){
        return keys.upperCase[Math.floor(Math.random()*keys.upperCase.length)];
    },
    function lowerCase(){
        return keys.lowerCase[Math.floor(Math.random()*keys.lowerCase.length)];
    },
    function symbol(){
        return keys.symbol[Math.floor(Math.random()*keys.symbol.length)];
    },
    function number(){
        return keys.number[Math.floor(Math.random()*keys.number.length)];
    }
];
function generatePassword(){
    let passwordBox = document.getElementById("password");
    let length = document.getElementById("length").value;
    let symbol = document.getElementById("symbol").checked;
    let upperCase = document.getElementById("upperCase").checked;
    let lowerCase = document.getElementById("lowerCase").checked;
    let number = document.getElementById("number").checked;
    if(!length){
        alert("Please Select the length!");
        return;
    }
    if(!upperCase && !lowerCase && !symbol && !number){
        alert("Please select atleast one box!");
        return;
    }
    
    let password = " ";
    while(length>password.length){
        let keyToAdd = getKey[Math.floor(Math.random()*getKey.length)];
        let ischecked = document.getElementById(keyToAdd.name).checked;
        if(ischecked){
            password += keyToAdd(); 
        }
    }
    passwordBox.innerHTML = password;
}
function copyPassword(){
    const password = document.getElementById("password").innerText;
    if(!password){return;}
    navigator.clipboard.writeText(password);
    alert("password copied to clipboard");
}