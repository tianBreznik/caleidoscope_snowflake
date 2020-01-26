let symmetry = 6;
let angle = 360/symmetry;
let saveButton;
let clearButton;
let xoff = 0;

function setup() {
	createCanvas(800, 800);
	angleMode(DEGREES);
	background(0);
	saveButton = createButton('save');
	saveButton.mousePressed(saveSnowflake);
	clearButton = createButton('clear');
	clearButton.mousePressed(clearCanvas);
	//slider = createSlider(1,32,4,0.1);
	colorMode(HSB, 255,255,255);
}

function saveSnowflake(){
	save('snowflake.png');
}

function clearCanvas(){
	background(0);
}

function draw() {

	translate(width/2, height/2);

	let mx = mouseX - width/2;
	let my = mouseY - height/2;
	let pmx = pmouseX - width/2;
	let pmy = pmouseY - height/2;

	if(mouseIsPressed){
		let hu = noise(xoff)*255;
		xoff += 0.01
		stroke(hu, 255,255,100);
		for(let i = 0; i < symmetry; i++){
			push();
			rotate(i*angle);
			if(i%2 == 1){
				scale(-1,1);
			}
			let d = dist(mx,my,pmx, pmy);
			let sw = map(d,0, 20,20,1);
			strokeWeight(sw);
			line(mx, my, pmx, pmy);
			pop();
		}
	}
}
