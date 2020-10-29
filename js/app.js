const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer');

questions.forEach(function (question) {
	question.addEventListener('click', () => {
		question.nextElementSibling.classList.toggle('active');
		if (question.style.color === 'black') {
			question.style.color = 'hsl(240, 6%, 50%)';
		} else {
			question.style.color = 'black';
		}

		if (
			question.firstElementChild.nextElementSibling.style.transform ===
			'rotate(180deg)'
		) {
			question.firstElementChild.nextElementSibling.style.transform =
				'rotate(0deg)';
		} else {
			question.firstElementChild.nextElementSibling.style.transform =
				'rotate(180deg)';
		}
	});
});
