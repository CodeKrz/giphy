var key = 'quIVspTGs5t9g0kNW0eGaZCSKZi83ZBI'

var buttons = [
  'tiger',
  'ducks',
  'cats',

]
for (let index = 0; index < buttons.length; index++) {

  var button = $('<button>')
  button.text(buttons[index]);
  $('#btnContainer').append(button);

}

$('body').on('click', 'button', function (e) {
  for (var i = 0; i < 5; i++) {
    var queryURL = 'https://api.giphy.com/v1/gifs/random?api_key=' + key + '&tag=' + e.currentTarget.innerText;
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      var gif = response.data.images.fixed_height_small.url
      var img = $('<img>');
      img.attr('src', gif);


      $('#gifContainer').prepend(img);
    });
  }
});
$('body').on('click', 'button', function (e) {
  for (var i = 0; i < 5; i++) {
    var queryURL = 'https://api.giphy.com/v1/gifs/random?api_key=' + key + '&tag=' + e.currentTarget.innerText;
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      var gif = response.data.images.fixed_height_small.url
      var img = $('<img>');
      img.attr('src', gif);

      var col = $('<div class="col-sm-3 pushBot">');

      var btn1 = $('<p>')
        .text('Rating: G')
        .attr('class', 'imgBtn');

      var btn2 = $('<a>')
        .css('font-size', '15px')
        .css('color', 'red')
        .text('♥ Like');

      var img = $('<img>')
        .attr('src', still)
        .attr('id', 'still');

      col.append(img);
      col.prepend(btn1);
      col.prepend(btn2);
      $('#gifContainer').prepend(img);
    });
  }
});
$('body').on('click', '.topicsImage', function () {
  var src = $(this).attr('src');
  var static = $(this).attr('still');
  var animated = $(this).attr('animated');
  if (src === static) {
    $(this).attr('src', animated);
  } else {
    $(this).attr('src', static);
  }
});

$(document).ready(function () {
  makeButton();
  topicsListener();
  addButtonListener();
});

