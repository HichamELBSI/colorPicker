$( document ).ready(function() {
    var clipboard = new Clipboard('.clipboard');

    var colors = [
        "#16a085",
        "#1abc9c",
        "#2ecc71",
        "#27ae60",
        "#3498db",
        "#2980b9",
        "#9b59b6",
        "#8e44ad",
        "#34495e",
        "#2c3e50",
        "#f1c40f",
        "#f39c12",
        "#e67e22",
        "#d35400",
    ];

  $.map(colors, function(val) {
    var colorToPick = $("<button class='clipboard' data-clipboard-text="+ val +">"+ val +"</button>");
    $(".panel").append(colorToPick);
  });

  $('.panel > button').each(function () {
      $(this).css('background-color',$(this).text());
  });

  var copiedText = [
    'Copied!',
    'Nice one!',
    'You got it!',
    'The best one!',
  ];

  $('button').click(function() {
    $('.copied').css('background-color',$(this).text());
    $('.copied').text(copiedText[(Math.floor(Math.random() * 4) + 1)-1]);
    $('.copied').fadeIn(500).delay(300);
    $('.copied').fadeOut(500);
  })
});
