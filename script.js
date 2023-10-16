$(function () {
  $('.option').on('click', function () {
    $('.option').prop('disabled', true);

    const isCorrect = $(this).text() === '9';

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
  });

  $('.reset').on('click', function () {
    window.location.reload();
  });
});
