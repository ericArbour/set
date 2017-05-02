$(function() {
  var cardArray = [{number: 1, shape: 'square', color: 'orange', shade: 'empty'},{number: 1, shape: 'square', color: 'orange', shade: 'light'},{number: 1, shape: 'square', color: 'orange', shade: 'solid'},{number: 1, shape: 'square', color: 'green', shade: 'empty'},{number: 1, shape: 'square', color: 'green', shade: 'light'},{number: 1, shape: 'square', color: 'green', shade: 'solid'},{number: 1, shape: 'square', color: 'purple', shade: 'empty'},{number: 1, shape: 'square', color: 'purple', shade: 'light'},{number: 1, shape: 'square', color: 'purple', shade: 'solid'},{number: 1, shape: 'circle', color: 'orange', shade: 'empty'},{number: 1, shape: 'circle', color: 'orange', shade: 'light'},{number: 1, shape: 'circle', color: 'orange', shade: 'solid'},{number: 1, shape: 'circle', color: 'green', shade: 'empty'},{number: 1, shape: 'circle', color: 'green', shade: 'light'},{number: 1, shape: 'circle', color: 'green', shade: 'solid'},{number: 1, shape: 'circle', color: 'purple', shade: 'empty'},{number: 1, shape: 'circle', color: 'purple', shade: 'light'},{number: 1, shape: 'circle', color: 'purple', shade: 'solid'},{number: 1, shape: 'triangle', color: 'orange', shade: 'empty'},{number: 1, shape: 'triangle', color: 'orange', shade: 'light'},{number: 1, shape: 'triangle', color: 'orange', shade: 'solid'},{number: 1, shape: 'triangle', color: 'green', shade: 'empty'},{number: 1, shape: 'triangle', color: 'green', shade: 'light'},{number: 1, shape: 'triangle', color: 'green', shade: 'solid'},{number: 1, shape: 'triangle', color: 'purple', shade: 'empty'},{number: 1, shape: 'triangle', color: 'purple', shade: 'light'},{number: 1, shape: 'triangle', color: 'purple', shade: 'solid'},{number: 2, shape: 'square', color: 'orange', shade: 'empty'},{number: 2, shape: 'square', color: 'orange', shade: 'light'},{number: 2, shape: 'square', color: 'orange', shade: 'solid'},{number: 2, shape: 'square', color: 'green', shade: 'empty'},{number: 2, shape: 'square', color: 'green', shade: 'light'},{number: 2, shape: 'square', color: 'green', shade: 'solid'},{number: 2, shape: 'square', color: 'purple', shade: 'empty'},{number: 2, shape: 'square', color: 'purple', shade: 'light'},{number: 2, shape: 'square', color: 'purple', shade: 'solid'},{number: 2, shape: 'circle', color: 'orange', shade: 'empty'},{number: 2, shape: 'circle', color: 'orange', shade: 'light'},{number: 2, shape: 'circle', color: 'orange', shade: 'solid'},{number: 2, shape: 'circle', color: 'green', shade: 'empty'},{number: 2, shape: 'circle', color: 'green', shade: 'light'},{number: 2, shape: 'circle', color: 'green', shade: 'solid'},{number: 2, shape: 'circle', color: 'purple', shade: 'empty'},{number: 2, shape: 'circle', color: 'purple', shade: 'light'},{number: 2, shape: 'circle', color: 'purple', shade: 'solid'},{number: 2, shape: 'triangle', color: 'orange', shade: 'empty'},{number: 2, shape: 'triangle', color: 'orange', shade: 'light'},{number: 2, shape: 'triangle', color: 'orange', shade: 'solid'},{number: 2, shape: 'triangle', color: 'green', shade: 'empty'},{number: 2, shape: 'triangle', color: 'green', shade: 'light'},{number: 2, shape: 'triangle', color: 'green', shade: 'solid'},{number: 2, shape: 'triangle', color: 'purple', shade: 'empty'},{number: 2, shape: 'triangle', color: 'purple', shade: 'light'},{number: 2, shape: 'triangle', color: 'purple', shade: 'solid'},{number: 3, shape: 'square', color: 'orange', shade: 'empty'},{number: 3, shape: 'square', color: 'orange', shade: 'light'},{number: 3, shape: 'square', color: 'orange', shade: 'solid'},{number: 3, shape: 'square', color: 'green', shade: 'empty'},{number: 3, shape: 'square', color: 'green', shade: 'light'},{number: 3, shape: 'square', color: 'green', shade: 'solid'},{number: 3, shape: 'square', color: 'purple', shade: 'empty'},{number: 3, shape: 'square', color: 'purple', shade: 'light'},{number: 3, shape: 'square', color: 'purple', shade: 'solid'},{number: 3, shape: 'circle', color: 'orange', shade: 'empty'},{number: 3, shape: 'circle', color: 'orange', shade: 'light'},{number: 3, shape: 'circle', color: 'orange', shade: 'solid'},{number: 3, shape: 'circle', color: 'green', shade: 'empty'},{number: 3, shape: 'circle', color: 'green', shade: 'light'},{number: 3, shape: 'circle', color: 'green', shade: 'solid'},{number: 3, shape: 'circle', color: 'purple', shade: 'empty'},{number: 3, shape: 'circle', color: 'purple', shade: 'light'},{number: 3, shape: 'circle', color: 'purple', shade: 'solid'},{number: 3, shape: 'triangle', color: 'orange', shade: 'empty'},{number: 3, shape: 'triangle', color: 'orange', shade: 'light'},{number: 3, shape: 'triangle', color: 'orange', shade: 'solid'},{number: 3, shape: 'triangle', color: 'green', shade: 'empty'},{number: 3, shape: 'triangle', color: 'green', shade: 'light'},{number: 3, shape: 'triangle', color: 'green', shade: 'solid'},{number: 3, shape: 'triangle', color: 'purple', shade: 'empty'},{number: 3, shape: 'triangle', color: 'purple', shade: 'light'},{number: 3, shape: 'triangle', color: 'purple', shade: 'solid'}];
  var ids = [];
  var numbers = ["1", "2", "3"];
  var colors = ["orange", "green", "purple"];
  var shapes = ["square", "circle", "triangle"];
  var shades = ["empty", "light", "solid"];
  for (var i = 0; i < cardArray.length; i++) {
    var $div = $('<div>');
    $div.addClass('card');
    var id = cardArray[i].number + cardArray[i].shape + cardArray[i].color + cardArray[i].shade;
    ids.push(id);
    $div.attr('id', id);
    var num = "";
    switch (cardArray[i].number) {
      case 1:
        num = "one";
        break;
      case 2:
        num = "two";
        break;
      case 3:
        num = "three";
        break;
    }
    for (var j = 0; j < cardArray[i].number; j++) {
      var $item = $('<div>');
      $item.addClass('item ' + num + ' '+ cardArray[i].shape + ' ' + cardArray[i].color + ' ' + cardArray[i].shade);
      $div.append($item);
      $('#board').append($div);
    }
  }
  var clicks = 0;
  var currentCards = [];
  $('.card').on('click', function() {
    $(this).addClass('clicked');
    clicks++;
    currentCards.push($(this).attr('id'));
    if (clicks > 2) {
      console.log(cardArray[ids.indexOf($(this).attr('id'))]);
      setTimeout(function() {
        for (var i = 0; i < currentCards.length; i++) {
          $('#' + currentCards[i]).removeClass('clicked');
        }
        currentCards.splice(0);
        clicks = 0;
      }, 80);
    }
  });
});



// Object Creator
// var objString = "";
// for (var i = 0; i < numbers.length; i++) {
//   for (var j = 0; j < shapes.length; j++) {
//     for (var k = 0; k < colors.length; k++) {
//       for (var l = 0; l < shades.length; l++) {
//         objString += "{number: " + numbers[i] + ", shape: '" + shapes[j] + "', color: '" + colors[k] + "', shade: '" + shades[l] + "'},";
//       }
//     }
//   }
// }
// console.log(objString);
