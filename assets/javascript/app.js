
var i  = 0;

var question_after;
var counter;
var time = 10;

var question_1 = {
			prompt: "who is the artist for this song?",
			answers: [" a.Steven Tyler ", " b.Megadeath ",
				     " c.George Harrison ", " d.Metallica "],
			correct_answer: "a.Steven Tyler"
					};

var question_2 = {
			prompt: "what number belongs to this song's artist name?",
			answers: [" a. 6 ", " b. 5 ",
				     " c. 8 ", " d. 3 "],
			correct_answer: " b.5 "
					};	

var question_3 = {
			prompt: "what is the title of this song ?",
			answers: [" a. Do I know you ", " b. Do I wanna ",
				     " c. Do I wanna know ", " d. I don't know, but i'm digging this song! "],
			correct_answer: " b.5 "
					};										


var question_array = [question_1, question_2, question_3];

//console.log(question_array);

$(document).ready(function(){

	

	function stop_running ()

			{	
						clearInterval(question_after);
			}

	function next_question ()

			{
				question_after = setInterval(question_change, 10000);
				counter = setInterval(clock_question,1000);

			
			}
		

function clock_question()

{

	time--;

	//$("#time_remaining").html("Time Remaining : " + time + " Seconds");	
}


	function question_change ()

		{

		if (i == 0) 
				{

				$("#time_remaining").html("Time Remaining : " + time + " Seconds");	
				$("#question").append(question_array[i].prompt);
				 
				$("#answer_opt_1").append(question_array[i].answers[0]);
				$("#answer_opt_2").append(question_array[i].answers[1]);
				$("#answer_opt_3").append(question_array[i].answers[2]);
				$("#answer_opt_4").append(question_array[i].answers[3]);

				}

		if (i > 0)  

				{

				$("#time_remaining").html('');		
				$("#question").html('');
			 
				$("#answer_opt_1").html('');
				$("#answer_opt_2").html('');
				$("#answer_opt_3").html('');
				$("#answer_opt_4").html('');


				$("#time_remaining").html("Time Remaining : " + time + " Seconds");	
				$("#question").append(question_array[i].prompt);
				 
				$("#answer_opt_1").append(question_array[i].answers[0]);
				$("#answer_opt_2").append(question_array[i].answers[1]);
				$("#answer_opt_3").append(question_array[i].answers[2]);
				$("#answer_opt_4").append(question_array[i].answers[3]);


				}

				i++;

				console.log(i);


				if ( i >= question_array.length)   
			{		
						console.log(i);

					stop_running();
				
			}
		}




 $("#start_button").on("click", function()

		{

			//alert('im inside');
			 next_question();
			 
		});	

});	




