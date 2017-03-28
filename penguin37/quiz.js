(function() {
  var questions = [{
    question: "What is the most popular candy, according to the Top Ten List of Favorite Candy?",
    choices: ["Reese's", "Twix", "Skittles", "Snickers", "Kit Kat"],
    answer: 2
  }, {
    question: "True or False: Are Milky Way Caramel Minis a new type of candy?",
    choices: ["True", "False"],
    answer: 0
  }, {
    question: "What is Hershey Bar ranked on the Top Ten List of Favorite Candy?",
    choices: [6, 9, 3, 7, 4],
    answer: 3
  }, {
    question: "Where is the Hershey Factory?",
    choices: ["Texas", "Oregon", "New York City", "Pennsylvania", "Minnesota"],
    answer: 3
  }, {
    question: "What is Dylan's Candy Shop?",
    choices: ["A bagel shop", "A ice cream shop", "A small one-room candy shop", "A 2 floor candy shop", "A 3 floor candy shop"],
    answer: 4
  }
];
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