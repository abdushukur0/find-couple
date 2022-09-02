window.onload = function () {
	function randomArrayShuffle(array) {
	  var currentIndex = array.length, temporaryValue, randomIndex;
	  while (0 !== currentIndex) {
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }
	  return array;
	}
	
	const body = document.querySelector('body');
	const flipCards = document.querySelectorAll('.flip-card');
	
	const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	
	randomArrayShuffle(numArr);

	for(let i = 0; i < numArr.length; i++)
		flipCards[i].querySelector('.flip-card-inner').innerHTML += `<div class="flip-card-back"><h2>${numArr[i]}</h2></div>`;
	
	randomArrayShuffle(numArr);

	for (var i = flipCards.length - 1; i >= 0; i--) {
		flipCards[i].addEventListener("click", function(){ 
		this.classList.toggle("active");

		let activeCards = document.querySelectorAll('.active');
		if (activeCards.length == 2) {

			if (activeCards[0].querySelector('.flip-card-back').innerHTML !== activeCards[1].querySelector('.flip-card-back').innerHTML) {
				setTimeout(() => {
				    activeCards[0].classList.remove('active');
					activeCards[1].classList.remove('active');
				}, "800")
			}else{
				activeCards[0].classList.remove('active');
				activeCards[1].classList.remove('active');
				activeCards[0].classList.add('right');
				activeCards[1].classList.add('right');
			}
		}
		let trueAnsver = document.querySelectorAll('.right');
		if (trueAnsver.length == flipCards.length) {
			body.classList.add('going');
		}
	});
	}
}
