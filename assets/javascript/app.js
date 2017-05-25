var timeToComplete = 120;

//Upon click, remove start button, start timer, and show questions
$('#start').on('click', presentAnswers);
$('#start').on('click', presentQuestions);
$('#start').on('click', startTimer);
$('#start').on('click', removeButton);



// Show answers function - append answers to a divs
function presentAnswers(){
	for (var s = 0; s < californiaAnswers.stateBird.length; s++){
		$('#a1').append('<input type="radio" class="stateAnswers" name="group1" value="californiaAnswers.stateBird[s]" id=' + s + '>' + californiaAnswers.stateBird[s]);
		$('#a2').append('<input type="radio" class="stateAnswers" name="group2" value="californiaAnswers.stateAmphibian[s]" id=' + s + '>' + californiaAnswers.stateAmphibian[s]);
		$('#a3').append('<input type="radio" class="stateAnswers" name="group3" value="californiaAnswers.stateAnimal[s]" id=' + s + '>' + californiaAnswers.stateAnimal[s]);
		$('#a4').append('<input type="radio" class="stateAnswers" name="group4" value="californiaAnswers.stateFruit[s]" id=' + s + '>' + californiaAnswers.stateFruit[s]);
		$('#a5').append('<input type="radio" class="stateAnswers" name="group5" value="californiaAnswers.stateVegetable[s]" id=' + s + '>' + californiaAnswers.stateVegetable[s]);
	}
	
}

//Show questions functions - append questions to q divs
function presentQuestions(){
	for (var s = 0; s < californiaQuestions.length; s++) {
		$('#q'+[s]).append('<p class="stateQuestions">' + californiaQuestions[s] + '</p>');
	}
}

//Sets an interval to call the decrementTimer function every second
function startTimer(){
	intervalId = setInterval(decrementTimer, 1000);
	$('#time').html('Countdown: ' + timeToComplete);
	

}

//Reduces time by one seconds and fills it into the time div

function decrementTimer(){
	timeToComplete--;
	$('#time').html('Countdown: ' + timeToComplete);
	if (timeToComplete === 0) {
		showAnswers();
	}
}

// Removes the button element and adds the submit button
function removeButton(){
	$('#start').remove();
	$('#submit').append('<div><button id="submitButton">Submit</button></div>');
} 

//submitButton click calls the showAnswers function

 //$('#submitButton').on('click', showAnswers);


// Clears out other stuff and inserts answers

function showAnswers(){	
		$('#time').remove();
		$('#submitButton').remove();
		$('#formQuestions').remove();
		$('#questions').html('<div>results</div>');

	}

// Questions array and Answers array variables

var californiaQuestions = ['What is the state bird of California?', 
							'What is the state amphibian?', 
							'What is the state animal?', 
							'What is the state fruit?',
							'What is the state vegetable?'];

var californiaAnswers = {
	stateBird: ['quail', 'robin', 'blue hen','mockingbird','cardinal'],
	stateAmphibian: ['red-legged frog', 'salamander','newt','green tree frog','spadefoot toad'],
	stateAnimal: ['bighorn sheep', 'American buffalo', 'grizzly bear', 'black bear', 'elk'],
	stateFruit: ['orange', 'avacado', 'lemon', 'grapefruit', 'honey crisp apple'],
	stateVegetable: ['sweet onion', 'sugar beet', 'artichoke', 'sweet potato', 'chile'],

};

$('#a1').on('click', function() {
	console.log($('#0'));
	console.log($('#1'));
	console.log($('#2'));
	console.log($('#3'));
	console.log($('#4'));

})
