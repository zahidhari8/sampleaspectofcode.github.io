
function bringit(){
	document.querySelector('#first').onclick=say;
	var list = document.querySelectorAll('#first');
	for(var i=0; i<list.length; i++){
		list[i].onclick=say;
	}
}

function say(){
	alert('You clicked something!');
}
window.onload=bringit;
