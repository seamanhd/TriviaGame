//-----------------------------------------------------------------------------
// GLOBAL VARIABLES
//-----------------------------------------------------------------------------
var correctCount = 0;

var wrongCount = 0;

var answeredCount = 0;

var newTime;

var myWatch;

var q0;
var q1;
var q2; 
var q3; 
var q4; 
var q5; 
var q6; 


 var questions = []

 var answers = []

 var stopwatch = {

 	time: 20,

 	start: function() {
    	myWatch = setInterval(stopwatch.count, 1000);
  		},

  	stop: function() {
    	clearInterval(myWatch);
    	},

  	reset: function() {

    	stopwatch.time = 20;
      $("#display").text("00.20");
 	 },

 	count: function() {
    	stopwatch.time--;
    	newTime = stopwatch.timeConverter(stopwatch.time);
    	$("#display").text(newTime);

    	if (newTime === "00:00") {
    		gameEnd();
    	}
  	},

 	timeConverter: function(t) {

    	var minutes = Math.floor(t / 60);
    	var seconds = t - (minutes * 60);

    	if (seconds < 10) {
     	 seconds = "0" + seconds;
    	}

    	if (minutes === 0) {
      	minutes = "00";
    	}

    	else if (minutes < 10) {
      	minutes = "0" + minutes;
    	}

    	return minutes + ":" + seconds;
  	},

 };

 //--------------------------------------------------------------------------------
 //FUNCTIONS
 //--------------------------------------------------------------------------------

var createQuestions = function() {
	q0 = {
		question: "William Taft got stuck in the White House bathtub, and subsequently had a custom bathtub ordered.",
		answer: "true",
		}

	questions.push(q0);

	q1 = {
		question: "John Quincy Adams was the 5th President of the United States.",
		answer: "false",
		}

	questions.push(q1);

	q2 = {
		question: "James Monroe was the shortest President.",
		answer: "false",
		}
	
	questions.push(q2)

	 q3 = {
		question: "William McKinley was the first President to campaign by telephone.",
		answer: "true",
		}

	questions.push(q3)

	q4 = {
		question: "Ulysses S. Grant established Yellowstone as the first national park.",
		answer: "true",
		}

	questions.push(q4)

	q5 = {
		question: "Martin Van Buren served the shortest Presidency, of only 28 days.",
		answer: "false",
		}

	questions.push(q5)

	q6 = {
		question: "Franklin D. Roosevelt is the only President to be elected 4 times.",
		answer: "true",
		}

	questions.push(q6)
}



var printQuestions = function() {
	for (var i = 0; i < questions.length; i++) {
		$("#questions").append("<p>" + questions[i].question + " </p>" + "<form>" + "<input value='true' type='radio' name='q" + i + "'>" + "True" + "    " + "<input value='false' type='radio' name='q" + i + "'>" + "False" +   "</form>");
		};
	$("#questions").append("<button id='submit'> Check my score! </button>");
}


var getAnswers = function(){

	for (var i = 0; i < questions.length; i++) {
		
		answers.push($("input[name='q" + i + "']:checked").val());
		//console.log(answers);
		if (questions[i].answer === answers[i]) {
			correctCount++;
			answeredCount++;	
		}
		else if (answers[i] === undefined) {
			console.log("not answered")
		}
		else if (questions[i].answer != answers[i]) {
			wrongCount++;
			answeredCount++;
		}
		
	}		
};

var gameEnd = function () {
			stopwatch.stop();
    		stopwatch.reset();
    		getAnswers();
    		$("#display").html("Click start to play again!");
    		$("#questions").html("Great job!" + "<br>" 
    			+ "Correct: " + correctCount + "<br>" 
    			+ "Incorrect: " + wrongCount + "<br>" 
    			+ "Total Answered: " + answeredCount + "<br>");
    		 
}


//-----------------------------------------------------------------------------
//RUN GAME
//-----------------------------------------------------------------------------

window.onload = function() {

	$("#display").text("Click start to begin the game!");
	$("#start").click(function(){
		stopwatch.start();
		$("#questions").empty();
		createQuestions();
		printQuestions();
	$("#submit").on('click', function() {
		gameEnd();

	});
	
	});
}












