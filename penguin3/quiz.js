(function() {
  var questions = [ {
    question: "Which team won the first Men soccer WORLD CUP?",
    choices: ["Argentina", "Uraguay","the United States", "Yugoslavia"],
    answer: 1},
    {question: "Which team has won the most WORLD CUPS?",
    choices: ["Germany","Argentina","Brasil","Japan"],
    answer:2},
   {question:"Who is the best mens soccer player in the world right now",
    choices: ["Lionel Messi","Luis Suarez","Cristiano Ronaldo","Neymar JR"],
    answer:0},
   { question:"Who is Messi's best rival",
    choices:["Neymar JR","Zlatan","Manuel Neuer","Cristiano Ronaldo"],
    answer:3},
    {question:"who are Lionel's best friend",
    choices:["Luis Suarez and Neymar JR","Cristiano Ronaldo and Neymar JR","Pele and Diego Marodona","Roberto Carlos and Ronaldinho"],
    answer:0},
    
  ]


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