// Based off of Trivia on california http://www.50states.com/facts/california.htm


//Upon click, remove start button, start timer, and show questions
var initialTime = 240;

$('#start').on('click').text('');
$('#start').on('click', presentAnswers);
$('#start').on('click', presentQuestions);
// $('#start').on('click', countDown);


function presentAnswers(){
	for (var s = 0; s < californiaAnswers.stateBird.length; s++){
		$('#a1').append('<input type="radio" name="group1" value="californiaAnswers.stateBird[s]">' + californiaAnswers.stateBird[s]);
		$('#a2').append('<input type="radio" name="group2" + value="californiaAnswers.stateAmphibian[s]">' + californiaAnswers.stateAmphibian[s]);
		$('#a3').append('<input type="radio" name="group3" value="californiaAnswers.stateAnimal[s]">' + californiaAnswers.stateAnimal[s]);
		$('#a4').append('<input type="radio" name="group4" value="californiaAnswers.stateFruit[s]">' + californiaAnswers.stateFruit[s]);
		$('#a5').append('<input type="radio" name="group5" value="californiaAnswers.stateVegetable[s]">' + californiaAnswers.stateVegetable[s]);
	}
	
}

function presentQuestions(){
	for (var s = 0; s < californiaQuestions.length; s++) {
		$('#q'+[s]).append('<p>' + californiaQuestions[s] + '</p>');
	}
}


var californiaQuestions = ['What is the state bird of California?', 
							'What is the state amphibian?', 
							'What is the state animal?', 
							'What is the state fruit?',
							'What is the state vegetable'];

var californiaAnswers = {
	stateBird: ['quail', 'robin', 'blue hen','mockingbird','cardinal'],
	stateAmphibian: ['red-legged frog', 'salamander','newt','green tree frog','spadefoot toad'],
	stateAnimal: ['bighorn sheep', 'American buffalo', 'grizzly bear', 'black bear', 'elk'],
	stateFruit: ['orange', 'avacado', 'lemon', 'grapefruit', 'honey crisp apple'],
	stateVegetable: ['sweet onion', 'sugar beet', 'artichoke', 'sweet potato', 'chile'],

};