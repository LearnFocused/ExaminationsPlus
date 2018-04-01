function removeIrish(){
	var materialBody = document.getElementsByClassName("materialbody");
	var needle = "IV";
	for(var i=0; i<materialBody.length; i++){
		if((materialBody[i].textContent).includes(needle)){
			parent = materialBody[i].parentNode;
			parent.parentNode.removeChild(parent);
			//Javascript removes this element from the array
			i = i - 1;
		}
	}
}

function overrideRedirects(){
	var selects = document.getElementsByClassName("selectClass");
	var onchangeValue = selects[selects.length - 1].getAttribute("onchange");
	console.log(onchange);
	for(var i=0; i<selects.length; i++){
		selects[i].setAttribute("onchange", onchangeValue);
	}
}

removeIrish();
overrideRedirects();

