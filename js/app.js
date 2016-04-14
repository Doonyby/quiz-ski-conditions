var quiz = {
	name: "Back country avalanche conditions challenge!",
	questions: [
		{
			question: "What is snow?",
			answers: ["rain", "ice", "frozen rain", "cheese"],
			correct: 2
			explanation: "Frozen rain is snow."
		},
		{
			question: "What is snow?",
			answers: ["rain", "ice", "frozen rain", "cheese"],
			correct: 2
			explanation: "Frozen rain is snow."
		},
		{
			question: "What slope degree should you start worrying about possible avalanche danger?",
			answers: ["20", "30", "40", "45"],
			correct: 1
			explanation: "Usually, slopes less than 30 degrees are not a danger when assessing for avalanches.  The typical window for slop angle avalanche danger falls between 30 and 40 degrees."
		},
		{
			question: "What factor is not included when testing for snow stability with an avalanche pit test?",
			answers: ["Strength", "Energy", "Structure", "Terrain"],
			correct: 3
			explanation: ""
		},
		{
			question: "What is snow?",
			answers: ["rain", "ice", "frozen rain", "cheese"],
			correct: 2
			explanation: "Frozen rain is snow."
		},
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