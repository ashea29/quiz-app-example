$(async function () {

  const response = await fetch('./questions.json');
  const questions = await response.json();

  let questionIndex = 0;

  setQuestionAndAnswers();


  function setQuestionAndAnswers() {
    $('.question').text(questions[questionIndex].question);

    $('#options').children().each(function(index) {
      $(this).text(questions[questionIndex]["answer-choices"][index].text);
    });

    // if (questionIndex < questions.length - 1) {
      $('#feedback')
        .text('')
        .css('background-color', 'transparent')
        .css('padding', '0');
    // }

    $('.next-question').prop('disabled', true);

  }


  $('.next-question').on('click', function() {
    if (questionIndex < questions.length - 1) {
      ++questionIndex;
    }
    setQuestionAndAnswers();

    if (questionIndex === questions.length - 1) {
      $('.next-question').prop('disabled', true);
    }


    $('#options').children().each(function() {
      $(this).prop('disabled', false);
    })
    
  })

  $('.option').on('click', function () {
      // Disable all options once one is clicked
      $('.option').prop('disabled', true);
      
      let isCorrect = $(this).text() === questions[questionIndex]["correct-answer"];

      if (isCorrect) {
          $('#feedback')
            .text('Correct! There were 9 rings of power.')
            .css('color', '#094e09')
            .css('font-weight', '600')
            .css('background-color', 'lightgreen')
            .css('padding', '0.75rem');
      } else {
          $('#feedback')
            .text('Incorrect! Hand in your nerd card immediately!')
            .css('color', 'hsl(0, 100%, 40%)')
            .css('font-weight', '600')
            .css('background-color', '#ffb6ad')
            .css('padding', '0.75rem');
      }

      if (questionIndex < questions.length - 1) {
        $('.next-question').prop('disabled', false)
      }

      $('.reset').prop('disabled', false)
  });

  $('.reset').on('click', function () {
    window.location.reload();
  })
});
