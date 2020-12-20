// accent colors will change between a few randomly selected ones
randomColor();

// changes calendar image in corner according to date
calendar();

// changes calendar to image of brain on hover
let image = document.querySelector('#cal');
//console.log(images[0]);
image.addEventListener("mouseover", changeImage);
image.addEventListener("mouseout", calendar);


function randomColor() {
	let randomInt = Math.random()*10 + 1;
	//console.log("random int " + randomInt);

	let color;

	if (randomInt <= 2.5) {
		color = '#339999';
	} else if (randomInt <= 5) {
		color = '#334563';
	} else if (randomInt <= 7.5) {
		color = '#FF9900';
	} else {
		color = '#CC0033';
	}

	//console.log('color is ' + color);

	// now edit variable --accent-color to equal color
	let root = document.documentElement;

	root.style.setProperty('--accent-color', color);
}

function changeImage() {
	let cal = document.querySelector('#cal');
	cal.src = 'images/brain.png';
}

function calendar() {
	let today = new Date();
	let dayOfWeek = today.getDay();

	let image;

	if (dayOfWeek == 0) { //sunday
		image = 'images/Sun.png';
	} else if (dayOfWeek == 1) {
		image = 'images/Mon.png';
	} else if (dayOfWeek == 2) {
		image = 'images/Tues.png';
	} else if (dayOfWeek == 3) {
		image = 'images/Weds.png';
	} else if (dayOfWeek == 4) {
		image = 'images/Thurs.png';
	} else if (dayOfWeek == 5) {
		image = 'images/Fri.png';
	} else { //saturday
		image = 'images/Sat.png';
	}

	let calendar = document.querySelector('#cal');
	calendar.src = image; 
}

