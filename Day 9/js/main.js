function doZero(){
    alert("0");
    document.getElementById('res').insertAdjacentHTML('beforeend', '0');
}
function doOne(){
    alert("0");
    document.getElementById('res').insertAdjacentHTML('beforeend', '1');
}

function doSum(){
	document.getElementById('res').insertAdjacentHTML('beforeend', '+');
}
function doSub(){
	document.getElementById('res').insertAdjacentHTML('beforeend', '-');
}
function doMul(){
	document.getElementById('res').insertAdjacentHTML('beforeend', '*');
}

function doDiv(){
	document.getElementById('res').insertAdjacentHTML('beforeend', '/');
}
function doClear(){
    document.getElementById("res").innerHTML = "";
}

