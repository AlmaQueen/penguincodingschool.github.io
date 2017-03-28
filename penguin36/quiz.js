(function() {
  var questions = [{
    question: "who is the only diy youtuber?",
    choices: [ "oh joy", "PewDiePie","Smosh", 2874957],
    answer: 0
  }, {
    question: "who is one of the most famous diy youtubers?",
    choices: ["yellowsky", "racecarmaster", "laurendiy907", "Brit+Co", "youtube spotlight"],
    answer: 3
  }, {
    question: "Where does Laurdiy live?",
    choices: ["MA,USA", "Toronto,Canada", "Cancun,Mexico", "New York City,USA", "Paris,France"],
    answer: 1
  }, {
    question: "Where does mylifeaseva's last name?",
    choices: ["Cheng", "Cooper", "Darcy", "Spence", "Marisol"],
    answer: 4
  }, {
    question: "How many followers does ilikeweylie have?",
    choices: ["over 300 million", "about 1 million", "about 0.7 million", "over 1.5 million", "about 0.2 million"],
    answer: 3
  }];
  
  var counter = 0;
  var selections = [];
  var quiz = $('#quiz');
  
  displayNext();
  
  $('#next').on('click', function (e) {
    choose();
    counter++;
    displayNext();
})


function createQuestion(index) {
    var qElement = $('<div>', {
      id: 'question'
    });
    
    var header = $('<h2>Question ' + (index + 1) + ':</h2>');
    qElement.append(header);
    
    var question = $('<p>').append(questions[index].question);
    qElement.append(question);
    
    var radioButtons = createRadios(index);
    qElement.append(radioButtons);
    
    return qElement;
  }
  
  function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }
  
  function choose() {
    selections[counter] = +$('input[name="answer"]:checked').val();
  }
  
  function displayNext() {
    quiz.fadeOut(function() {
      $('#question').remove();
      
      if(counter < questions.length){
        var nextQuestion = createQuestion(counter);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[counter]))) {
          $('input[value='+selections[counter]+']').prop('checked', true);
        }
   if(counter === 0){
      $('#next').show();
        }
      }else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#next').hide();
      }
    });
  }
  
  function displayScore() {
    var score = $('<p>',{id: 'question'});
    
    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].answer) {
        numCorrect++;
      }
    }
    
    score.append('You got ' + numCorrect + ' questions out of ' +
                 questions.length + ' right');
    return score;
  }
})();