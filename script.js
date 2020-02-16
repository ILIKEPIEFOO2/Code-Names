const COL=5;
const ROW=5;
const GRID = document.getElementsByClassName("grid")[0];
const GRID_LAYOUT = new Map();
const GRID_ELEMENTS = new Map();
function generateColors(){
	if(Math.round(Math.random())==1){
		var blue=9;
		var red=8;
	} else {
		var red=9;
		var blue=8;
	}
	let white=8;
	let black=Math.round(Math.random()*(white-1))+1;
	let total=0;
	for (var x=0;x<5;x++){
		for (let y=0;y<5;y++){
			let num=Math.random()*2;
		   switch(Math.round(num)){
				case 0:
					if(red>0){
						GRID_LAYOUT[x+","+y]="red";
						red-=1;
						break;
					}
				case 1:
					if(blue>0){
						GRID_LAYOUT[x+","+y]="blue";
						blue-=1;
						break;
					}
					if(red>0||!white>0){
						GRID_LAYOUT[x+","+y]="red";
						red-=1;
						break;
					}
				case 2:
					if(white>0){
						if(white==black){
							GRID_LAYOUT[x+","+y]="black";
							white-=1;
						}else{
							GRID_LAYOUT[x+","+y]="white";
							white-=1;
						}
					}else{
						if(red>0 & blue>0){
							if(Math.round(Math.random())==1){
								GRID_LAYOUT[x+","+y]="red";
								red-=1;
							}else{
								GRID_LAYOUT[x+","+y]="blue";
								blue-=1;
							}
						}else{
							if(blue>0){
								GRID_LAYOUT[x+","+y]="blue";
								blue-=1;
							}
							if(red>0){
								GRID_LAYOUT[x+","+y]="red";
								red-=1;
							}
						}
					}
					break;
			}
		}
	}
}
function applyColors(){
	for (var x=0;x<5;x++){
		for (let y=0;y<5;y++){
			let i=x+','+y
			GRID_ELEMENTS[i].style.backgroundColor=GRID_LAYOUT[i];
		}
	}
}
function multiplyString(tex,num){
	let out="";
	for (let i = 0; i<num ; i++){
		out+=tex;
	}
	return out;
}
function setupGrid(){
	GRID.style.gridTemplateColumns = multiplyString("auto ",COL);
	for(let x=0;x<ROW;x++){
		for(let y=0;y<COL;y++){
			let elem=document.createElement("DIV");
			elem.setAttribute('class','box');
			let id=x+','+y;
			elem.innerHTML=id;
			elem.style.cursor="pointer";
			elem.onclick="swapColor("+x+","+y+")";
			elem.ontouchend="swapColor("+x+","+y+")";
			elem.id=id;
			GRID.appendChild(elem);
			GRID_ELEMENTS[id]=elem;
		}
	}
}
function getBoxes(){
	let boxes = document.getElementsByClassName("box");
	let out = [];
	for (i in boxes){
		if (boxes[i]!==undefined && boxes[i]!==null){
			out.push(boxes[i]);
		}
	}
	return out;
}
function swapColor(id){
	GRID_ELEMENTS[id].style.color="white";
	console.log("test");
}
setupGrid();
generateColors();
//console.log(GRID_LAYOUT);
applyColors();
