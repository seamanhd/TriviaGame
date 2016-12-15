


//-----------------------------------------------------------------------------
// GLOBAL VARIABLES
//-----------------------------------------------------------------------------
var correctCount = 0;

var wrongCount = 0;

var answeredCount = 0;

var newTime;

var myWatch;

var qOne;
var qTwo; 
var qThree; 
var qFour; 
var qFive; 
var qSix; 
var qSeven;

 var questions = []

var createQuestions = function() {
	qOne = {
	question: "William Taft got stuck in the White House bathtub, and subsequently had a custom bathtub ordered.",
	answer: true,
}

	questions.push(qOne);

	qTwo = {
	question: "John Quincy Adams was the 5th President of the United States.",
	answer: false
}

	questions.push(qTwo);


	qThree = {
	question: "James Monroe was the shortest President.",
	answer: false
}
	
	questions.push(qThree)

	 qFour = {
	question: "William McKinley was the first President to campaign by telephone.",
	answer: true
}

	questions.push(qFour)

	qFive = {
	question: "Ulysses S. Grant established Yellowstone as the first national park.",
	answer: true
}

	questions.push(qFive)

	qSix = {
	question: "Martin Van Buren served the shortest Presidency, of only 28 days.",
	answer: false
}

	questions.push(qSix)

	qSeven = {
	question: "Franklin D. Roosevelt is the only President to be elected 4 times.",
	answer: true
}

	questions.push(qSeven)
}


createQuestions();
console.log(questions);

var printQuestions = function() {
	for (var i = 0; i < questions.length; i++) {
		$("#questions").append("<p>" + questions[i].question + " </p>" + "<form>" + "<input id='true' type='radio' name='answer'>" + "True" + "    " + "<input id='false' type='radio' name='answer'>" + "False" +   "</form>");
		};
	$("#questions").append("<button> Check my score! </button>");
}

printQuestions();

window.onload = function() {

	$("#display").text("02:00");
	$("#start").click(stopwatch.start);


}

/*var checkQuestions = function(){
	for (var i = 0; i < questions.length; i++) {
		if questions[i].answer === 
}
*/


	

 var stopwatch = {

 	time: 3,

 	start: function() {

    
    	myWatch = setInterval(stopwatch.count, 1000);

  	},

 	
 	count: function() {

    	stopwatch.time--;

    	newTime = stopwatch.timeConverter(stopwatch.time);

    	$("#display").text(newTime);

    	if (newTime === "00:00") {

    		$("#main").html("Time's Up!" + "<br>" + "Correct: " + correctCount + "<br>" + "Incorrect: " + wrongCount + "<br>" + "Total Answered: " + answeredCount + "<br>" + "<button> Play again </button>");
    		$("#main").children("button").attr("id", "reset");
    		$("#reset").on('click', function() {
    			reset();

    		});
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

 

//-----------------------------------------------------------------------------
//FUNCTIONS
//-----------------------------------------------------------------------------





var reset = function () {
	// $("#display").text("02:00");
	// $("#start").click(stopwatch.start);
	// $("#main").empty();
	console.log("Works")
}

//values on radio buttons of true and false, check whether matches answer 
//.attr("value")

 // better way to do the ending of the countdown?

 /*var submit = function(){
		for (var i = 0; i < questions.length; i++) {
			if checkedvalue.questions[i] === questions[i].answer {
				correctCount++;
				answeredCount++;
			}
			if checked != answer {
				wrongCount++;
				answeredCount++;
			}
		}
	}
	*/
 // better way to distinguish answers - anonymous object? 


/* Pseudo-Code:

create timer to countdown 2 minutes
create questions using html, give each a class of question and a unique id
create T/F answers for each with radio buttons (how to do in html?)
on click of question.true, trueCount++
on click of question.false, falseCount++
on click of question.true or question.false, answeredCount++

when timer runs out, innerHTML (??) the true, false, answered
on click of replay button, reset */

//logic for checking answers first?
// create object for each question
//create array of objects
// use for loop to use jQuery to pick out parts of objects to write each question
// look at question1, check for answers, then move 
// .html the main div at the end, then reset runs loop to print Qs again

