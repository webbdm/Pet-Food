var foodContainer = document.getElementById("foodContainer");

function makeDom(xhrData){

	var newString = "";
	var current;

	for (var i=0; i<xhrData.dog_brands.length; i++){
		current = xhrData.dog_brands[i];
		newString += `<div>${current.name}</div>`;

		 for (var j=0; j<xhrData.dog_brands[i].types.length; j++){
		 	newString +=`<div>${xhrData.dog_brands[i].types[j].type}</div>`;
		 	
		 	for (var k=0; k<xhrData.dog_brands[i].types[j].volumes.length; k++){
		 		newString += `<div>${xhrData.dog_brands[i].types[j].volumes[k].name} for ${xhrData.dog_brands[i].types[j].volumes[k].price}</div>`;

		  	}
		 }
	}
	 foodContainer.innerHTML = newString;
}

function executeThisCodeAfterFileLoaded(){
	var doggieData = JSON.parse(this.responseText);
	var kittyData = JSON.parse(this.responseText);
	console.log(doggieData);
	//console.log(kittyData);
	makeDom(doggieData);
	//makeDom(kittyData)
}

function executeThisCodeAfterFileFails(){
	console.log("failed");

}

var dogRequest = new XMLHttpRequest();
dogRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
dogRequest.addEventListener("error", executeThisCodeAfterFileFails);
dogRequest.open("GET","dogFood.json");
dogRequest.send();
console.log("dogRequest", dogRequest);

var catRequest = new XMLHttpRequest();
catRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
catRequest.addEventListener("error", executeThisCodeAfterFileFails);
catRequest.open("GET","catFood.json");
catRequest.send();
console.log("catRequest", catRequest);