
//My variables
var RightCount //Counts number of questions user gets correct
var WrongCount //Counts number of questions user gets wrong
var questionNumber = 0;
var result 
var timer
var number = 10;

//My questions
var questions = [
	{
	question: "In which year was Japan founded?",
	answers: {
		a: "1200 CE",
		b: "660 BC",
		c: "448 CE",
		d: "1360 BC"
	},
	correctAnswer: "b",
	src: "https://media.giphy.com/media/CRWdhM1XgJ7Pi/giphy.gif",
	},

	{
	question: "Japan has the highest number of what per capita?",
	answers: {
		a: "Vending Machines",
		b: "Karaoke Bars",
		c: "Bicycles",
		d: "Movie Theatres"
	},
	correctAnswer: "a",
	src: "https://media.giphy.com/media/CRWdhM1XgJ7Pi/giphy.gif",
	},

	{
	question: "What does the name Japan mean?",
	answers: {
		a: "Oak Tree",
		b: "Horizontal Beach",
		c: "Origin of the Sun",
		d: "Nine provinces"
	},
	correctAnswer: "c",
	src: "https://media.giphy.com/media/CRWdhM1XgJ7Pi/giphy.gif",
	},

	{
	question: "What is Japan's highest grossing movie?",
	answers: {
		a: "Spirited Away",
		b: "Titanic",
		c: "Frozen",
		d: "Your Name"
	},
	correctAnswer: "a",
	src: "https://media.giphy.com/media/CRWdhM1XgJ7Pi/giphy.gif",
	},

	{
	question: "How many subway stations are in Tokyo?",
	answers: {
		a: "1000",
		b: "154",
		c: "77",
		d: "278"
	},
	correctAnswer: "d",
	src: "https://media.giphy.com/media/CRWdhM1XgJ7Pi/giphy.gif",
	},

	{
	question: "What is the national sport of Japan?",
	answers: {
		a: "Baseball",
		b: "Judo",
		c: "Jujutsu",
		d: "Sumo"
	},
	correctAnswer: "d",
	src: "https://media.giphy.com/media/CRWdhM1XgJ7Pi/giphy.gif",
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
		$("#results").append("That's correct!");
	} else if(!result) {
		$("#results").html("Wrong");
	}

	var resultImage = $("<img src='" + questions[questionNumber].src + "'>");
	$("#results").prepend(resultImage);

	//Add question number
	questionNumber += 1; 
	//Display Next Question
	if (questionNumber < questions.length) {
		setTimeout(function() { displayQuestion(questionNumber) },5000)
	} 
}

//Display question
function displayQuestion(currentQuestion) {
	//Display progress
	displayProgress();
	//reset count to 10
	number = 10;
	$("#counter").html("<h3>" + number + "</h3>");

	//Flip to Question
	$("#questions").removeClass("flipfront");
	$("#results").removeClass("flipback");

	//Display Question
	$("h2").text(questions[currentQuestion].question);

	//Display Choices
	for(letter in questions[currentQuestion].answers) {
		$("form").prepend("<label><input type='radio' name='questions' value=" + letter + "><span>" + questions[currentQuestion].answers[letter] + "</span></label>");
		}

	//Create form bottom

	var formBottom = $("<div id='form-bottom'>");
	$("form").append(formBottom);

	//Display Submit
	$("#form-bottom").html("<input id='submit' type='submit' value='Submit'>");

	//Timeout
	timer = setInterval(decrement,1000);

	function decrement() {
		number--;
		$("#counter").html("<h3>" + number + "</h3>");

		if (number == 0) {
			clearTimeout(timer);
			displayResult();
		}
	}
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
	$("footer").empty();

	for (i=0;i<questions.length;i++) {

		if (i === questionNumber) {
			$("footer").append("<div class='ball ball-active'>");
		} else if (i < questionNumber) {
			$("footer").append("<div class='ball ball-past'>");
		} else {
			$("footer").append("<div class='ball'>");
		}
	}
}



//https://api.giphy.com/v1/gifs/search?q=spirited+away&api_key=9yB1iQE0uPH4SpZ4Cf7rnaiWj2SGJKz7

