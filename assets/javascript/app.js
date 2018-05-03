
//My variables
var RightCount
var WrongCount

//My questions
var questions = [
	{
	question: "What is the?",
	answers: {
		a: "Answer 1",
		b: "Answer 2",
		c: "Answer 3",
		d: "Answer 4"
	},
	correctAnswer: "c"
	},

	{
	question: "How is the?",
	answers: {
		a: "Answer 3",
		b: "Answer 4",
		c: "Answer 5",
		d: "Answer 6"
	},
	correctAnswer: "c"
	}
]

//Display question
var displayQuestion = function(currentQuestion) {
	$("h2").text(questions[currentQuestion].question);
	for(letter in questions[currentQuestion].answers) {
		$("form").append("<label><input type='radio' name='questions' value=" + letter + ">" + questions[currentQuestion].answers[letter] + "</label>");
		}
	$("form").prepend("<input id='submit' type='submit' value='Submit'>");
}

displayQuestion(1);

//Question times out 

//Lose screen 


//Determine if user response is right
var checkAnswer = function(userGuess,correctGuess) {
	if (userGuess === correctGuess) {
		RightCount++;
		console.log("right")
	} else {
		WrongCount++;
		console.log("wrong");
	}
}

//Collect user response
$("form").on("click", "#submit", function() {
	var userGuess = $("input[name=questions]:checked").val();
	checkAnswer(userGuess,questions[1].correctAnswer);

})
