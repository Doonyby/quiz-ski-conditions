var quiz = {
	name: "Back country snow conditions",
	questions: [
		{
			question: "What is snow?",
			answers: ["rain", "ice", "frozen rain"],
			correct: 2
		},
		{
			question: "What is snow?",
			answers: ["rain", "ice", "frozen rain"],
			correct: 2
		}
	]
}

quiz.questions[0].question
quiz.questions[0].answers[quiz.questions[0].correct]

$(document).ready(function() {
	console.log("I'm a title page");
	$('.title-page').show();
	$('.quiz-page').hide();
	$('.score-page').hide();

	$('#quizstart').click(function() {
		console.log("I'm a quiz page");
		$('.title-page').hide();
		$('.quiz-page').show();
		$('.score-page').hide();
	});

	$('.quiz-page').click(function() {
		console.log("I'm a score page");
		$('.title-page').hide();
		$('.quiz-page').hide();
		$('.score-page').show();
		$('#tryagain').click(function() {
			console.log("I'm a quiz page");
			$('.title-page').hide();
			$('.quiz-page').show();
			$('.score-page').hide();
			});
	});




});