/*
2do:
- 

Ideen:
https://stackoverflow.com/questions/13997793/generate-random-number-between-2-numbers
Math.floor(Math.random() * (max - min + 1)) + min;

*/
var max = 9;
var min = 2;
var randomNr1 = Math.floor(Math.random() * (max - min + 1));
var randomNr2 = Math.floor(Math.random() * (max - min + 1));
var randomNr3 = Math.floor(Math.random() * (max - min + 1));
var array1 = [randomNr1];
var array2 = [randomNr2];
var array3 = [randomNr3];
var arrayRandomNr1 = array1[0];
var arrayRandomNr2 = array2[0];
var arrayRandomNr3 = array3[0];

function create(element){
	return document.createElement(element);
};

// #####################################################

var oniBG = "url(https://uk4n.files.wordpress.com/2019/02/1-solved.png?w=159&h=94)";

function createMainDiv(){
	
	//create
	let mainDiv = document.createElement("div");
	
	//attr.
	mainDiv.id = "mainDiv";
	// mainDiv.style.border = "dotted 1px grey";
	mainDiv.style.background = oniBG;
	mainDiv.style.height = "300px";
	mainDiv.style.width = "500px";
	mainDiv.style.backgroundSize ="100%";
	mainDiv.style.backgroundRepeat = "no-repeat";
	mainDiv.style.position = "relative";
	mainDiv.style.margin = "0px auto";
	//mainDiv.style.padding = "0 0 0 100px";
	
	//append
	document.body.appendChild(mainDiv);
	
};

function createButton(){
	//cr
	let b1 = create("button");
	//attr.
	b1.id = "b1";
	b1.setAttribute("style", "color: white; position: absolute; top: 10px; left: 56px; height: 30px; width: 123px");
	b1.textContent = "Calculate";
	//add
	mainDiv.appendChild(b1);
};

function createResult(){
	
	// cr
	let output1 = create("div");
	let output2 = create("div");
	let output3 = create("div");
	
	// attr.
	output1.id = "output1";
	output1.setAttribute("style", "width: 30px; height: 30px; background-color: rgba(0,0,0,0); position: absolute; top: 98px; left: 120px; display: inline-block; padding: 2px 0 0 8px; color: white; font-size: 1.6em;");
	//output1.textContent = "Test";			
	output1.textContent = 0;
	
	output2.id = "output2";
	output2.setAttribute("style", "width: 30px; height: 30px; background-color: rgba(0,0,0,0); position: absolute; top: 98px; left: 220px; display: inline-block; padding: 2px 0 0 8px; color: white; font-size: 1.6em;");
	output2.textContent = arrayRandomNr2;		
	
	output3.id = "output3";
	output3.setAttribute("style", "width: 30px; height: 30px; background-color: rgba(0,0,0,0); position: absolute; top: 98px; left: 320px; display: inline-block; padding: 2px 0 0 8px; color: white; font-size: 1.6em;");
	output3.textContent = arrayRandomNr3;		// innerHTML Pendant
	
	// append
	mainDiv.appendChild(output1);
	mainDiv.appendChild(output2);
	mainDiv.appendChild(output3);
	
};

function createResetButton(){
	
	//create
	let resetButton = document.createElement("button");
		
	//attr.
	resetButton.id = "resetButton";
	resetButton.setAttribute("style", "color: white; position: absolute; top: 320px; left: 56px; height: 30px; width: 123px");
	resetButton.textContent = "Reset";
	
	//append
	mainDiv.appendChild(resetButton);
	
};

function reloadCalc(){
	document.location.reload(true);
};

//INIT
createMainDiv();
createButton();
createResetButton();
b1.addEventListener("click", createResult);
resetButton.addEventListener("click",reloadCalc);