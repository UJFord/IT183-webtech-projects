// Header Coloring
//Choose color for header based on class name
function choosecolor(className) {
	switch (className) {
		case 'red':
			return '#ec5858';
			break;
		case 'blue':
			return '#859ac5';
			break;
		case 'green':
			return '#7cb9ab';
			break;
		default:
			return '#dbdbdb';
	}
}

let head1Color = document.querySelectorAll('#head1 .color');
let head2Color = document.querySelectorAll('#head2 .color');
let head3Color = document.querySelectorAll('#head3 .color');
const head1Text = document.querySelector('#head1 .head-text');
const head2Text = document.querySelector('#head2 .head-text');
const head3Text = document.querySelector('#head3 .head-text');

head1Color.forEach((colorElement) => {
	colorElement.addEventListener('click', function () {
		// Get the color class from the clicked element
		const colorClass = choosecolor(this.classList[1]); // Assumes there is only one other class

		// Set the text color of the head-text element based on the clicked color
		head1Text.style.color = colorClass;
	});
});

head2Color.forEach((colorElement) => {
	colorElement.addEventListener('click', function () {
		// Get the color class from the clicked element
		head2Text.style.color = choosecolor(this.classList[1]);
	});
});

head3Color.forEach((colorElement) => {
	colorElement.addEventListener('click', function () {
		// Get the color class from the clicked element
		const colorClass = choosecolor(this.classList[1]);
		head3Text.style.color = colorClass;
	});
});

/* Calculator */
// display
let display = document.querySelector('#display-text');
// Get the container element
const calcInputContainer = document.querySelector('#calc-input');
let computation = '';
let buffer = '';
let history = '';

// Add a click event listener to the container
calcInputContainer.addEventListener('click', function (event) {
	// Check if the clicked element is a button or an icon inside a button
	if (event.target.tagName === 'BUTTON' || event.target.closest('button')) {
		// Get the button element that was clicked (either the button itself or its closest parent button)
		const button =
			event.target.tagName === 'BUTTON'
				? event.target
				: event.target.closest('button');

		// Get the data-id attribute value (the id of the clicked button)
		buttonClicked(button.id);
	}
});

// Function to handle button click events
function buttonClicked(id) {
	switch (id) {
		case 'ac':
			computation = '';
			buffer = '';
			display.textContent = buffer;
			break;

		case 'c':
			buffer = buffer.substring(0, buffer.length - 1);
			display.textContent = buffer;
			break;

		case '+':
		case '-':
		case '*':
		case '/':
			if (history !== '') {
				buffer = history;
				history = '';
			}
			computation += buffer + id;
			buffer = '';
			display.textContent = eval(
				computation.substring(0, computation.length - 1)
			);
			break;

		case '=':
			computation += buffer;
			buffer = '';

			if (/[+\-*/]/.test(computation.slice(-1))) {
				computation = computation.slice(0, -1);
			} //remove if last input is operator

			display.textContent = eval(computation);
			buffer = eval(computation);
			history = eval(computation);
			computation = '';
			display.textContent = history;
			break;

		default:
			if (history !== ''){
				history = '';
				buffer = '';
				display.textContent = '';
				console.log(history);
			}
			buffer += id;
			display.textContent = buffer;
	}

	console.log(buffer + '|||||||' + computation);
}
