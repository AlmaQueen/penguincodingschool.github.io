(function() {
  var questions = [{
    question: "Are Cats Cute?",
    choices: ["Yes", "No"],
    answer: 0
  }, {
    question: "What Is The Cutest Cat Breed?",
    choices: ["Siamese", "English Short Hair", "Bull Cat", "British Short Hair", "All Of The Above"],
    answer: 4
  }, {
    question: "Do You Like Cats?",
    choices: ["Yes", "No"],
    answer: 0
  }, {
    question: "Why Are Cats Cute?",
    choices: ["Because They Just Are", "Because They Are Snuggley", "Because Of Potato", "All Of The Above"],
    answer: 3
  }, {
    question: "What Do Cats Drink?",
    choices: ["Milk", "Water", "None Of The Above"],
    answer: 1
  }];
  shuffle(questions);
  var counter = 0;
  var selections = [];
  var quiz = $('#quiz');
  
  displayNext();
  
  $('#next').on('click', function (e) {
    choose();
    counter++;
    displayNext();
})

// http://stackoverflow.com/a/6274381
function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

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