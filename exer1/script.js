//Choose color for header based on class name
function choosecolor(className) {
    switch (className) {
        case'red':
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


// Header Coloring
// head 1
let head1Color = document.querySelectorAll('#head1 .color');
const head1Text = document.querySelector('#head1 .head-text');

head1Color.forEach((colorElement) => {
	colorElement.addEventListener('click', function () {
		// Get the color class from the clicked element
		const colorClass =  choosecolor(this.classList[1]); // Assumes there is only one other class

		// Set the text color of the head-text element based on the clicked color
		head1Text.style.color = colorClass;
	});
});

// head 2
let head2Color = document.querySelectorAll('#head2 .color');
const head2Text = document.querySelector('#head2 .head-text');

head2Color.forEach((colorElement) => {
	colorElement.addEventListener('click', function () {
		// Get the color class from the clicked element
		head2Text.style.color = choosecolor(this.classList[1]);
	});
});

// head 3
let head3Color = document.querySelectorAll('#head3 .color');
const head3Text = document.querySelector('#head3 .head-text');

head3Color.forEach((colorElement) => {
	colorElement.addEventListener('click', function () {
		// Get the color class from the clicked element
		const colorClass =  choosecolor(this.classList[1]);
		head3Text.style.color = colorClass;
	});
});
