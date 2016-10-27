
var i  = 0;
var k = 0;

var thisAttributeId;
var thisAttributeClass;


var question_one;
var question_after;
var counter;
var counterAnswerCheck;
var time = 15;
var timeAnswerCheck = 4;

var correctAnswer =0;
var wrongAnswer = 0;
var unAnswered =0;

var question_1 = {
			prompt: "Who is the artist for this song?",
			answers: [" a.The Chainsmokers ", " b.Years & Years ",
				     " c.The Chainsmokers ft. Halsey ", " d.Rozes "],
			correct_answer: "answer_opt_3",
			correct_answer_value: " c.The Chainsmokers ft. Halsey "
					};

var question_2 = {
			prompt: "What number belongs to this song's artist name?",
			answers: [" a. 6 ", " b. 5 ",
				     " c. 8 ", " d. 3 "],
			correct_answer: "answer_opt_2",
			correct_answer_value: " b. 5 "
					};	

var question_3 = {
			prompt: "What is the last name of this Artist ?",
			answers: [" a. King", " b. Clapton ",
				     " c. Sheeran ", " d. Prydz"],
			correct_answer: "answer_opt_2",
			correct_answer_value: " b. Clapton "
					};		

var question_4 = {
			prompt: "Which city belongs to the title of this song?",
			answers: [" a. Ibiza ", " b. Rio ",
				     " c. Miami ", " d. Los Angeles "],
			correct_answer: "answer_opt_3",
			correct_answer_value: " c. Miami "
					};								

var question_5 = {
			prompt: "What is the last name of this band's vocalist ?",
			answers: [" a. Dickinson ", " b. Hetfield ",
				     " c. Mustaine ", " d. Rose "],
			correct_answer: "answer_opt_1",
			correct_answer_value: " a. Dickinson "
					};

var question_6 = {
			prompt: "What is the title of this song ?",
			answers: [" a. Forgive ", " b. Mercy ",
				     " c. Chosen ", " d. I don't know, but i'm digging this tune! "],
			correct_answer: "answer_opt_2",
			correct_answer_value: " b. Mercy "
					};

var question_7 = {
			prompt: "This is 'more than a ......' ?",
			answers: [" a. laughter ", " b. cry ",
				     " c. feeling ", " d. joy "],
			correct_answer: "answer_opt_3",
			correct_answer_value: " c. feeling "
					};

var question_8 = {
			prompt: "When was this song first released ?",
			answers: [" a. 1974 ", " b. 1973 ",
				     " c. 1975 ", " d. 1982 "],
			correct_answer: "answer_opt_2",
			correct_answer_value: " b. 1973 "
					};						


var question_9 = {
			prompt: "Who is the artist of this song ?",
			answers: [" a. Kaskade ", " b. Galantis ",
				     " c. Kygo ", " d. Kaskade & Galantis "],
			correct_answer: "answer_opt_4",
			correct_answer_value: " d. Kaskade & Galantis "
					};					


var question_array = [question_1, question_2, question_3,
					  question_4, question_5, question_6,
					  question_7, question_8,question_9];

//console.log(question_array);

$(document).ready(function(){

	
	function clear_divs()

	{
			$("#time_remaining").html('');		
			$("#question").html('');
			$("#answer_opt_1").html('');
			$("#answer_opt_2").html('');
			$("#answer_opt_3").html('');
			$("#answer_opt_4").html('');
	}


	function giphy_selector (b)

	{

		if (b == 0) {$("#answer_opt_2").html('<img src = "assets/images/closer.gif">'); }
		if (b == 1) {$("#answer_opt_2").html('<img src = "assets/images/maroon5.gif">'); }
		if (b == 2) {$("#answer_opt_2").html('<img src = "assets/images/layla.gif">'); }
		if (b == 3) {$("#answer_opt_2").html('<img src = "assets/images/kygo.gif">'); }
		if (b == 4) {$("#answer_opt_2").html('<img src = "assets/images/iron_maiden.gif">'); }
		if (b == 5) {$("#answer_opt_2").html('<img src = "assets/images/kaskade.gif">'); }
		if (b == 6) {$("#answer_opt_2").html('<img src = "assets/images/boston.gif">'); }
		if (b == 7) {$("#answer_opt_2").html('<img src = "assets/images/steventyler.gif">'); }
		if (b == 8) {$("#answer_opt_2").html('<img src = "assets/images/galantis.gif">'); }
		
		
	}



	function playSong(x) {

	if (x === 0 )

	{		var audio = document.getElementById("closer_audio");
			audio.currentTime = 0;
			audio.play();
	}
	if (x === 1 )

	{		var audio = document.getElementById("maps_audio")
			audio.currentTime = 0;
			audio.play();
	}

	if (x === 2 )

	{		var audio = document.getElementById("layla_audio")
			audio.currentTime = 0;
			audio.play();
	}

	if (x === 3 )

	{		var audio = document.getElementById("miami82_audio");
			audio.currentTime = 0;
			audio.play();
	}
	if (x === 4 )

	{		var audio = document.getElementById("danceofdeath_audio")
			audio.currentTime = 0;
			audio.play();
	}

	if (x === 5 )

	{		var audio = document.getElementById("mercy_audio")
			audio.currentTime = 0;
			audio.play();
	}

	if (x === 6 )

	{		var audio = document.getElementById("morethanafeeling_audio");
			audio.currentTime = 0;
			audio.play();
	}
	if (x === 7 )

	{		var audio = document.getElementById("dreamon_audio")
			audio.currentTime = 0;
			audio.play();
	}

	if (x === 8 )

	{		var audio = document.getElementById("firebird_audio")
			audio.currentTime = 0;
			audio.play();
	} 	
}



	function pauseSong(p) {

	if (p === 0 )

	{		var audio = document.getElementById("closer_audio");
			audio.pause();
	}
	if (p === 1 )

	{		var audio = document.getElementById("maps_audio")
			audio.pause();
	}

	if (p === 2 )

	{		var audio = document.getElementById("layla_audio")
			audio.pause();
	}

	if (p === 3 )

	{		var audio = document.getElementById("miami82_audio");
			audio.pause();
	}
	if (p === 4 )

	{		var audio = document.getElementById("danceofdeath_audio")
			audio.pause();
	}

	if (p === 5 )

	{		var audio = document.getElementById("mercy_audio")
			audio.pause();
	}

	if (p === 6 )

	{		var audio = document.getElementById("morethanafeeling_audio");
			audio.pause();
	}
	if (p === 7 )

	{		var audio = document.getElementById("dreamon_audio")
			audio.pause();
	}

	if (p === 8 )

	{		var audio = document.getElementById("firebird_audio")
			audio.pause();
	} 	

}

 //debugger;

 
	function show_score () 

	{
		
		// if useranswer correct, correct++;
		// if useranswer wrong, wrong++;
		// otherwise unanswered, unanswered++
		pauseSong(8);
		stop_running();
		stop_running_question_clock();
		stop_running_question_answer_clock();
			time = 15;
			counter = setInterval(clock_question,1000);
		clear_divs();

		$("#time_remaining").html("Time Remaining : " + time + " Seconds");	
		$("#question").html( "All done, here's how you did!");	
		$("#answer_opt_1").html( "Correct Answers: " + correctAnswer);	 
		$("#answer_opt_2").html( "Incorrect Answers: " + wrongAnswer);
		$("#answer_opt_3").html( "Unanswered: " + unAnswered);
		$("#answer_opt_4").html( "Play Again?");

		$("#answer_opt_4" ).unbind().on("click", function()
		
			{	
				i = 0; 
		 		k = 0;  
		 		correctAnswer =0;
				wrongAnswer = 0;
				unAnswered =0;
				time = 15;
				
				clear_divs();
				stop_running();
				stop_running_question_clock();
				stop_running_question_answer_clock();


				//debugger;
				question_one = setTimeout(first_question,500);
				question_after = setInterval(question_change, 16000);
		
			 });
	}

	function stop_running_question_answer_clock()

	{
			clearInterval(counterAnswerCheck); // timer for after user clicks an answer

	}

	function stop_running ()

			{	
						clearInterval(question_after);
			}

	function stop_running_question_clock ()

			{	
						clearInterval(counter); // timer for while the question is displaying
			}		
			
	

	function clock_answer_check()
	{
		//debugger;
		timeAnswerCheck--;
		$("#time_remaining").html("Time Remaining : " + time + " Seconds");	

		if ( timeAnswerCheck <= 0)   		
				{		
					stop_running_question_answer_clock();
					timeAnswerCheck = 4;

					question_after = setTimeout(question_change, 500);
					question_after = setInterval(question_change, 16000);
				}		
	}



	
	function correct_answer_check(x,y)

	{	
		 	if ( y === (question_array[x].correct_answer)) 

				{	//debugger;
					correctAnswer++;

				clear_divs();

				stop_running_question_clock();

				stop_running();

				counterAnswerCheck = setInterval(clock_answer_check,1000);

				$("#time_remaining").html("Time Remaining : " + time + " Seconds");	
				$("#question").html("Correct !");

				giphy_selector(x);

				if ( k >= question_array.length-1)   
					
					{		
					show_score();
					stop_running_question_clock();
					}

				}
	
			else 
				{
				//alert( "You're in else block");
				wrongAnswer++;
				clear_divs();
				
				stop_running_question_clock();

				stop_running();

				counterAnswerCheck = setInterval(clock_answer_check,1000);

				$("#time_remaining").html("Time Remaining : " + time + " Seconds");	
				$("#question").html("Sorry ! You're misguided !");
				$("#answer_opt_1").html("The correct Answer was : " + question_array[x].correct_answer_value);

				giphy_selector(x);

				if ( k >= question_array.length-1)   
					
					{		
					show_score();
					stop_running_question_clock();
					}

				}

	}


	function clock_question(z)

	{
		//debugger;
		time--;
		$("#time_remaining").html("Time Remaining : " + time + " Seconds");	

		//&& thisAttributeClass != "clicked"

		if ( time == 0 )

 			{ 	
 				 unAnswered++;

 				 clear_divs();

				stop_running_question_clock();

				stop_running();

				//pauseSong(z);

				counterAnswerCheck = setInterval(clock_answer_check,1000);

				$("#time_remaining").html("Time Remaining : " + time + " Seconds");	
				$("#question").html("Sorry ! You're misguided !");
				$("#answer_opt_1").html("The correct Answer was : " + question_array[z].correct_answer_value);
				giphy_selector(z);

				if (  time == 0 && k >= question_array.length-1)   
					
				{		
					show_score();
					stop_running_question_clock();
				}

 			}
	}



	function first_question() {

		//debugger;

		playSong(i)

		$("#time_remaining").html("Time Remaining : " + time + " Seconds");	

		//debugger;

		counter = setInterval(function() { clock_question(i); }, 1000 );

		$("#question").append(question_array[i].prompt);
				 
		$("#answer_opt_1").append(question_array[i].answers[0]);
		$("#answer_opt_2").append(question_array[i].answers[1]);
		$("#answer_opt_3").append(question_array[i].answers[2]);
		$("#answer_opt_4").append(question_array[i].answers[3]);


		console.log(" i before correct_answer_check at firt question "+ i);

		//debugger;

		$("#answer_opt_1,#answer_opt_2,#answer_opt_3,#answer_opt_4" ).unbind().on("click", function()
		
			{	
				//debugger;
				 thisAttributeId = ($(this).attr('id'));
				correct_answer_check(i,thisAttributeId);
				thisAttributeClass = ($(this).attr('class'));

			 });

	}

	
	function question_change ()

		{	//debugger;
			pauseSong(k);
			k++;
			playSong(k);

			if ( k >= question_array.length-1)   
					
				{		
					//debugger;
				console.log(k);
				stop_running();
				stop_running_question_clock();
				}


			stop_running_question_clock();
			time = 15;
			

			counter =	setInterval(function() { clock_question(k); }, 1000 );

			clear_divs();


		$("#time_remaining").html("Time Remaining : " + time + " Seconds");	
		$("#question").append(question_array[k].prompt);
				 
		$("#answer_opt_1").append(question_array[k].answers[0]);
		$("#answer_opt_2").append(question_array[k].answers[1]);
		$("#answer_opt_3").append(question_array[k].answers[2]);
		$("#answer_opt_4").append(question_array[k].answers[3]);


		console.log(" k before correct_answer_check at question_change "+ k);

		console.log("correctAnswer is " + correctAnswer);
		console.log("wrong Answer is " + wrongAnswer);
		console.log("unAnswered is " + unAnswered);


		$("#answer_opt_1,#answer_opt_2,#answer_opt_3,#answer_opt_4" ).unbind().on("click", function()
		
			{	//debugger;
		
				thisAttributeId = ($(this).attr('id'));
				correct_answer_check(k,thisAttributeId);
				thisAttributeClass = ($(this).attr('class'));

			 });

		}


 $("#start_button").on("click", function()

		{
			question_one = setTimeout(first_question,500);
			question_after = setInterval(question_change, 16000);
			$("#start_button").hide();
			 
		});	

});	



