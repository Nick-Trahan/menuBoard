Window.onload = makeItRain();
/*
 * makeItRain adapted from makeItRain.js by Sarah Lesh.
 * (https://github.com/sarahlesh/makeItRain). She created the original concept,
 * Nick Trahan (https://github.com/Nick-Trahan/) modified it to work in vanilla
 * JavaScript.
 */
function makeItRain() {
	const body = document.querySelector('body');

	let maxBills = 50;

	for(let i = 0; i < maxBills; i++){
		const random = window.innerWidth;
		const randomPosition = Math.floor(random * Math.random());
		const randomTime = Math.random() * 20;
		const randomSpeed = (Math.random() * 20) + 10;

		const bills = document.createElement('img');
		bills.classList.add('billsBillsBills');
		bills.setAttribute('src', 'makeItRain/images/bill.svg');
    bills.setAttribute('style',
        `left: ${randomPosition}px; top: -150px;
        -webkit-animation-delay: ${randomTime.toFixed(2)}s;
        -webkit-animation-duration: ${randomSpeed.toFixed(2)}s`);
    body.appendChild(bills);
    // thanks to Anisha Varghese from the Noun Project for the SVG!!
  }

  clearOldItems(body);
  loopAnimation();
}

function clearOldItems(body) {
  // this removes the generated img tags a short time after animation completes.
  setTimeout(() => {
    const oldElements = document.querySelectorAll('.billsBillsBills');
    oldElements.forEach((currentIndex) => {
      body.removeChild(currentIndex);
    });
  }, 50000);
}

function loopAnimation() {
  // loops the animation every 3 minutes.
  setTimeout(() => {
    makeItRain();
  }, 180000);
}
