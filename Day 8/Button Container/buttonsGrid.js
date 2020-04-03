var arrays = [1,2,3,6,9,8,7,4]  
function doMagic(){
    alert("Hello");
    arrays.unshift(arrays.pop());
    
    document.getElementById('btn1').innerHTML = arrays[0];
    document.getElementById('btn2').innerHTML = arrays[1];
    document.getElementById('btn3').innerHTML = arrays[2];
    document.getElementById('btn6').innerHTML = arrays[3];
    document.getElementById('btn9').innerHTML = arrays[4];
    document.getElementById('btn8').innerHTML = arrays[5];
    document.getElementById('btn7').innerHTML = arrays[6];
    document.getElementById('btn4').innerHTML = arrays[7];
 }