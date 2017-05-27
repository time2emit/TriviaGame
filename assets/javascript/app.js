var timeToComplete = 120;

//Upon click, remove start button, start timer, and show questions
$('#start').on('click', presentAnswers);
$('#start').on('click', presentQuestions);
$('#start').on('click', startTimer);
$('#start').on('click', removeButton);
$('#submit').on('click', showAnswers);



// Show answers function - append answers to a divs
function presentAnswers(){
	for (var s = 0; s < californiaAnswers.stateBird.length; s++){
		$('#a1').append(`<input type="radio" class="stateAnswers1" name="group1" value=${californiaAnswers.stateBird[s]} id=${s}> ${californiaAnswers.stateBird[s]}`);
		$('#a2').append(`<input type="radio" class="stateAnswers2" name="group2" value=${californiaAnswers.stateAmphibian[s]} id=${s}> ${californiaAnswers.stateAmphibian[s]}`);
		$('#a3').append(`<input type="radio" class="stateAnswers3" name="group3" value=${californiaAnswers.stateAnimal[s]} id=${s}> ${californiaAnswers.stateAnimal[s]}`);
		$('#a4').append(`<input type="radio" class="stateAnswers4" name="group4" value=${californiaAnswers.stateFruit[s]} id=${s}> ${californiaAnswers.stateFruit[s]}`);
		$('#a5').append(`<input type="radio" class="stateAnswers5" name="group5" value=${californiaAnswers.stateVegetable[s]} id=${s}> ${californiaAnswers.stateVegetable[s]}`);
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

// Removes the button element and calls function to add the submit button
function removeButton(){
	$('#start').remove();
	addSubmitButton();
} 

// Adds the submit button


function addSubmitButton() {
	$('#submit').append('<div><button id="submitButton">Submit</button></div>');

}


// Clears out other stuff and inserts answers

function showAnswers(){	
		$('#time').remove();
		$('#submitButton').remove();
		$('#formQuestions').remove();
		$('#questions').html('<div id="results">results</div>');


	}

// Questions array and Answers array variables

var californiaQuestions = ['What is the state bird of California?', 
							'What is the state amphibian?', 
							'What is the state animal?', 
							'What is the state fruit?',
							'What is the state vegetable?'];

var californiaAnswers = {
	stateBird: ["quail", "robin", "hen","mockingbird","cardinal"],
	stateAmphibian: ["frog", "salamander","newt","caecillian","toad"],
	stateAnimal: ["sheep", "buffalo", "bear", "wolf", "elk"],
	stateFruit: ["orange", "avacado", "lemon", "grapefruit", "apple"],
	stateVegetable: ["onion", "beet", "artichoke", "potato", "chile"],

};

