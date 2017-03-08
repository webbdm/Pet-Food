var foodcontainer = document.getElementById("foodcontainer");

function makeDom(xhrData){

	var badgesString = "";
	var currentBadge;

	for (var i=0; i<xhrData.badges.length; i++){
		currentBadge = xhrData.badges[i];
	 
	 badgesString += `<div class="col-sm-6 col-md-4 badgeHolder">`;
	 badgesString += `<img src="${xhrData.badges[i].icon_url}">`;
	 badgesString += `</div>`;
	 } 

	 treehouseContainer.innerHTML = badgesString;
}

function executeThisCodeAfterFileLoaded(){
	var data = JSON.parse(this.responseText);
	console.log(data);
	makeDom(data);
}

function executeThisCodeAfterFileFails(){
	console.log("failed");

}

var thRequest = new XMLHttpRequest();
thRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
thRequest.addEventListener("error", executeThisCodeAfterFileFails);
thRequest.open("GET","https://teamtreehouse.com/geoffwebb.json");
thRequest.send();
console.log("thRequest", thRequest);