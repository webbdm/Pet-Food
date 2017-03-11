var foodContainer = document.getElementById("foodContainer");

function dogDom(xhrData){

	var newString = "";
	var current;

	for (var i=0; i<xhrData.dog_brands.length; i++){
		current = xhrData.dog_brands[i];
		newString += `<div class="thumbnail">`
		newString += `<div class="caption">${current.name}</div>`;

		 for (var j=0; j<xhrData.dog_brands[i].types.length; j++){
		 	newString +=`<div>${xhrData.dog_brands[i].types[j].type}</div>`;
		 	
		 	for (var k=0; k<xhrData.dog_brands[i].types[j].volumes.length; k++){
		 		newString += `<div>${xhrData.dog_brands[i].types[j].volumes[k].name} for ${xhrData.dog_brands[i].types[j].volumes[k].price}</div>`;

		  	}
		 }
		newString += `</div>`; 
	}
	foodContainer.innerHTML += newString;
}

function catDom(xhrData){

	var newString = "";
	var current;

	for (var i=0; i<xhrData.cat_brands.length; i++){
		current = xhrData.cat_brands[i];
		newString += `<div class="thumbnail">`
		newString += `<div class="caption">${current.name}</div>`;
		newString += `<div>${current.breeds.join("-")}</div>`

		 for (var j=0; j<xhrData.cat_brands[i].types.length; j++){
		 	newString +=`<div>${xhrData.cat_brands[i].types[j].type}</div>`;
		 	for (var k=0; k<xhrData.cat_brands[i].types[j].volumes.length; k++){
		 		newString += `<div>${xhrData.cat_brands[i].types[j].volumes[k].name} for ${xhrData.cat_brands[i].types[j].volumes[k].price}</div>`;

		  	}
		 }
		newString += `</div>`;
	}

	
	foodContainer.innerHTML += newString;
}


function executeThisCodeAfterFileLoadedDog(){
	var doggieData = JSON.parse(this.responseText);
	console.log(doggieData);
	dogDom(doggieData);
	
}

function executeThisCodeAfterFileLoadedCat(){
	var kittyData = JSON.parse(this.responseText);
	console.log(kittyData);
	catDom(kittyData)
}

function executeThisCodeAfterFileFails(){
	console.log("failed");

}

var dogRequest = new XMLHttpRequest();
dogRequest.addEventListener("load", executeThisCodeAfterFileLoadedDog);
dogRequest.addEventListener("error", executeThisCodeAfterFileFails);
dogRequest.open("GET","dogFood.json");
dogRequest.send();
//console.log("dogRequest", dogRequest);

var catRequest = new XMLHttpRequest();
catRequest.addEventListener("load", executeThisCodeAfterFileLoadedCat);
catRequest.addEventListener("error", executeThisCodeAfterFileFails);
catRequest.open("GET","catFood.json");
catRequest.send();
//console.log("catRequest", catRequest);