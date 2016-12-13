


//-----------------------------------------------------------------------------
// GLOBAL VARIABLES
//-----------------------------------------------------------------------------



//-----------------------------------------------------------------------------
//FUNCTIONS
//-----------------------------------------------------------------------------

$(document).ready(function(){
	$("#display").text("00.00");
})  
   
 


/* Pseudo-Code:

create timer to countdown 2 minutes
create questions using html, give each a class of question and a unique id
create T/F answers for each with radio buttons (how to do in html?)
on click of question.true, trueCount++
on click of question.false, falseCount++
on click of question.true or question.false, answeredCount++

when timer runs out, innerHTML (??) the true, false, answered
on click of replay button, reset

