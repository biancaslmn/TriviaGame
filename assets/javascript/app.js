

//Click events


$(document).on('click', '#start-over', function(e) {
    game.reset();
  });
  
  $(document).on('click', '.answer-button', function(e) {
    game.clicked(e);
  });
  
  $(document).on('click', '#start', function(e) {
    $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter-number">30</span> Seconds</h2>');
    game.loadQuestion();
  });

  //Q&A


var questions = [{
    question: "Which princess has a friend named Sebastian?",
    answers: ["Aurora", "Fiona", "Ariel", "Merinda"],
    correctAnswer: "Ariel",
    image:"assets/images/Ariel.jpg"
  }, {
    question: "Which princess almost married an arrogant hunter?",
    answers: ["Pocahontas", "Rapunzel", "Mulan", "Belle"],
    correctAnswer: "Belle",
    image:"assets/images/Belle.jpg"
  }, {
    question: "Which princess got poisoned by an apple?",
    answers: ["Belle", "", "Anna", "Meinda","Anastasia"],
    correctAnswer: "Snow White",
    image:"assets/images/SnowWhite.jpg"
  }, {
    question: 'Which princess had a tiger as pet?',
    answers: ["Tiana", "Moana", "Jasmine", "Kida"],
    correctAnswer: "Jasmine",
    image:"assets/images/Jasmine.jpg"
  }, {
    question: 'On which princess did they cast a voodoo spell?',
    answers: ["Elsa", "Rapunzel", "Mulan", "Tiana"],
    correctAnswer: "Tiana",
    image:"assets/images/Tiana.jpg"
  }];

//Game

