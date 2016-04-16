var quiz = {
	name: "Back country avalanche conditions challenge!",
	questions: [
		{
			question: "What artificial trigger is responsible for causing the most avalanches in backcountry terrain?",
			answers: ["Snowmobiles", "Skiers", "Snowboarders", "Hikers"],
			correct: 0,
			explanation: "Snowmobiles are responsible for triggering the most artificial avalanches of all backcountry recreators.  This is partially because of how much ground they can cover in a short period of time.",
		},
		{
			question: "What type of snow is not considered a persistent weak layer in snow pack?",
			answers: ["Facets", "Burried Surface Hoar", "Wind Slab", "Depth Hoar"],
			correct: 2,
			explanation: "Wind slab is not considered a persistent weak layer, although it is common for a wind slab to sit on top of a persistent weak layer.  Therin lies the avalanche danger.",
		},
		{
			question: "What slope degree should you start worrying about possible avalanche danger?",
			answers: ["20", "30", "40", "45"],
			correct: 1,
			explanation: "Usually, slopes less than 30 degrees are not a danger when assessing for avalanches.  The typical window for slop angle avalanche danger falls between 30 and 40 degrees.",
		},
		{
			question: "What factor is not included when testing for snow stability with an avalanche pit test?",
			answers: ["Strength", "Energy", "Structure", "Terrain"],
			correct: 3,
			explanation: "Pit tests are specifically run to test the strength, energy, and structure of a snow pack.  Terrain should be continually evaluated throughout backcountry travel.",
		},
		{
			question: "What of the following is considered a terrain trap in an avalanche?",
			answers: ["Trees", "Rocks", "Gullies", "All of the above"],
			correct: 3,
			explanation: "Trees, rocks, gullies and cliffs can all be dangerous terrain traps when caught in an avalanche.  If possible, choose slopes that have a gentle run out without many terrain traps.",
		},
	]
}


$(document).ready(function() {
	$('.title-page').show();
	$('.quiz-page').hide();
	$('.score-page').hide();
	var questionsLen = quiz.questions.length;
	var currentQuestion = 0;

	$('#quizstart').click(function() {
		$('.title-page').hide();
		$('.quiz-page').show();
		$('.score-page').hide();
		$('#post-question').hide();

		showQuestion(currentQuestion);
	});

	function showQuestion(currentQuestion) {
		var questionText = '<h1>' + quiz.questions[currentQuestion].question + '</h1>';
		questionText += '<form id="guesses"></form>';
		$('#displayQuestion').append(questionText);

		var answersLen = quiz.questions[currentQuestion].answers.length;
		for (var i = 0; i < answersLen; i++) {
			var input = '<input id="guess-select" type="radio" name="select" value="' + i +'">';
			$('#guesses').append(input + quiz.questions[currentQuestion].answers[i] + '<br>');
		};
		guessedAnswer();
	}	

	$('#nextquestion').click(function() {
		// $('.title-page').hide();
		// $('.quiz-page').hide();
		// $('.score-page').show();	
		currentQuestion++
		$('#displayQuestion').empty();
		if (currentQuestion < questionsLen) {
			showQuestion(currentQuestion);
		} else {
			$('.title-page').hide();
			$('.quiz-page').hide();
			$('.score-page').show();			
		}
	});	

	$('#tryagain').click(function() {
		$('.title-page').hide();
		$('.quiz-page').show();
		$('.score-page').hide();
		currentQuestion = 0;
	});

	function guessedAnswer() {
		$('input').click(function() {
			$('#post-question').show();
			$('#explanation').text(quiz.questions[0].explanation);				
		});	
	};	

});		




