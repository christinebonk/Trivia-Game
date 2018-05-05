
//My variables
var RightCount //Counts number of questions user gets correct
var WrongCount //Counts number of questions user gets wrong
var questionNumber = 0;
var result 
var timer

//My questions
var questions = [
	{
	question: "In what year was Japan founded?",
	answers: {
		a: "1200 CE",
		b: "660 BC",
		c: "448 CE",
		d: "1360 BC"
	},
	correctAnswer: "b"
	},

	{
	question: "Japan has the highest number of what per capita?",
	answers: {
		a: "Vending Machines",
		b: "Karaoke Bars",
		c: "Bicycles",
		d: "Movie Theatres"
	},
	correctAnswer: "a"
	},

	{
	question: "What does the name Japan mean?",
	answers: {
		a: "Oak Tree",
		b: "Horizontal Beach",
		c: "Origin of the Sun",
		d: "Nine provinces"
	},
	correctAnswer: "c"
	},

	{
	question: "What is Japan's highest grossing movie?",
	answers: {
		a: "Spirited Away",
		b: "Titanic",
		c: "Frozen",
		d: "Your Name"
	},
	correctAnswer: "a"
	},

	{
	question: "How many subway stations are in Tokyo?",
	answers: {
		a: "1000",
		b: "154",
		c: "77",
		d: "278"
	},
	correctAnswer: "d"
	},

	{
	question: "What is the national sport of Japan?",
	answers: {
		a: "Baseball",
		b: "Judo",
		c: "Jujutsu",
		d: "Sumo"
	},
	correctAnswer: "d"
	}
]

//Display result screen 
function displayResult(result) {

	//Flip to result
	$("#questions").addClass("flipfront");
	$("#results").addClass("flipback");

	//Empty form
	$("form").empty();

	//Display result
	if(result) {
		$("#results").html("Right");
	} else if(!result) {
		$("#results").html("Wrong");
	}

	//Add question number
	questionNumber += 1; 
	//Display Next Question
	if (questionNumber < questions.length) {
		setTimeout(function() { displayQuestion(questionNumber) },5000)
	} 
}

//Display question
function displayQuestion(currentQuestion) {

	//Flip to Question
	$("#questions").removeClass("flipfront");
	$("#results").removeClass("flipback");

	$("h2").text(questions[currentQuestion].question);

	
	for(letter in questions[currentQuestion].answers) {
		$("form").append("<label><input type='radio' name='questions' value=" + letter + ">" + questions[currentQuestion].answers[letter] + "</label>");
		}

	$("form").prepend("<input id='submit' type='submit' value='Submit'>");

	//Timeout
	timer = setTimeout(displayResult,5000);
}

//Call first question on load
displayQuestion(questionNumber);


//Determine if user response is right
var checkAnswer = function(userGuess,correctGuess) {
	if (userGuess === correctGuess) {
		RightCount++;	
		result = true;
		console.log("right")
	} else {
		WrongCount++;
		result = false;
		console.log("wrong");
	}
	displayResult(result);
}

//Collect user response
$("form").on("click", "#submit", function() {
	var userGuess = $("input[name=questions]:checked").val();
	checkAnswer(userGuess,questions[questionNumber].correctAnswer);
	clearTimeout(timer);

})

//Progress bar
function displayProgress() {
	for (i=0;i<questions.length;i++) {
		$("footer").append("<div class='ball'>");
	}
}

displayProgress();

//https://api.giphy.com/v1/gifs/search?q=spirited+away&api_key=9yB1iQE0uPH4SpZ4Cf7rnaiWj2SGJKz7

