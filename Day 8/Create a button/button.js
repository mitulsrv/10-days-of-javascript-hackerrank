function clickMe(){
    var buttonValue = document.getElementById('foButton');
    
    var counter = Number(buttonValue.innerHTML) + 1;
    
    buttonValue.innerHTML = counter;
}