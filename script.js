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
      setTimeout(function() {
        if (checker(cardArray[ids.indexOf(currentCards[0])], cardArray[ids.indexOf(currentCards[1])], cardArray[ids.indexOf(currentCards[2])])) {
          alert('set!');
        } else {
          alert('not a set');
        }
        for (var i = 0; i < currentCards.length; i++) {
          $('#' + currentCards[i]).removeClass('clicked');
        }
        currentCards.splice(0);
        clicks = 0;
      }, 80);
    }
  });
  function checker (obj1, obj2, obj3) {
    return propCheck(obj1.number, obj2.number, obj3.number) && propCheck(obj1.shape, obj2.shape, obj3.shape) && propCheck(obj1.color, obj2.color, obj3.color) && propCheck(obj1.shade, obj2.shade, obj3.shade);
  }
  function propCheck (val1, val2, val3) {
    return (val1 === val2 && val1 === val3 && val2 === val3) || (val1 !== val2 && val1 !== val3 && val2 !== val3);
  }
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
