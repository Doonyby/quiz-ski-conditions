var quiz = {
	name: "Back country avalanche conditions challenge!",
	questions: [
		{
			question: "What artificial trigger is responsible for causing the most avalanches in backcountry terrain?",
			answers: ["Snowmobiles", "Skiers", "Snowboarders", "Hikers"],
			correct: 0
			explanation: "Snowmobiles are responsible for triggering the most artificial avalanches of all backcountry recreators.  This is partially because of how much ground they can cover in a short period of time."
		},
		{
			question: "What type of snow is not considered a persistent weak layer in snow pack?",
			answers: ["Facets", "Burried Surface Hoar", "Wind Slab", "Depth Hoar"],
			correct: 2
			explanation: "Wind slab is not considered a persistent weak layer, although it is common for a wind slab to sit on top of a persistent weak layer.  Therin lies the avalanche danger."
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
			explanation: "Pit tests are specifically run to test the strength, energy, and structure of a snow pack.  Terrain should be continually evaluated throughout backcountry travel."
		},
		{
			question: "What of the following is considered a terrain trap in an avalanche?",
			answers: ["Trees", "Rocks", "Gullies", "All of the above"],
			correct: 3
			explanation: "Trees, rocks, gullies and cliffs can all be dangerous terrain traps when caught in an avalanche.  If possible, choose slopes that have a gentle run out without many terrain traps."
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