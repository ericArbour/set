$(function() {
  var cardArray = [{number: 1, shape: 'square', color: 'orange', shade: 'empty'},{number: 1, shape: 'square', color: 'orange', shade: 'light'},{number: 1, shape: 'square', color: 'orange', shade: 'solid'},{number: 1, shape: 'square', color: 'green', shade: 'empty'},{number: 1, shape: 'square', color: 'green', shade: 'light'},{number: 1, shape: 'square', color: 'green', shade: 'solid'},{number: 1, shape: 'square', color: 'purple', shade: 'empty'},{number: 1, shape: 'square', color: 'purple', shade: 'light'},{number: 1, shape: 'square', color: 'purple', shade: 'solid'},{number: 1, shape: 'circle', color: 'orange', shade: 'empty'},{number: 1, shape: 'circle', color: 'orange', shade: 'light'},{number: 1, shape: 'circle', color: 'orange', shade: 'solid'},{number: 1, shape: 'circle', color: 'green', shade: 'empty'},{number: 1, shape: 'circle', color: 'green', shade: 'light'},{number: 1, shape: 'circle', color: 'green', shade: 'solid'},{number: 1, shape: 'circle', color: 'purple', shade: 'empty'},{number: 1, shape: 'circle', color: 'purple', shade: 'light'},{number: 1, shape: 'circle', color: 'purple', shade: 'solid'},{number: 1, shape: 'triangle', color: 'orange', shade: 'empty'},{number: 1, shape: 'triangle', color: 'orange', shade: 'light'},{number: 1, shape: 'triangle', color: 'orange', shade: 'solid'},{number: 1, shape: 'triangle', color: 'green', shade: 'empty'},{number: 1, shape: 'triangle', color: 'green', shade: 'light'},{number: 1, shape: 'triangle', color: 'green', shade: 'solid'},{number: 1, shape: 'triangle', color: 'purple', shade: 'empty'},{number: 1, shape: 'triangle', color: 'purple', shade: 'light'},{number: 1, shape: 'triangle', color: 'purple', shade: 'solid'},{number: 2, shape: 'square', color: 'orange', shade: 'empty'},{number: 2, shape: 'square', color: 'orange', shade: 'light'},{number: 2, shape: 'square', color: 'orange', shade: 'solid'},{number: 2, shape: 'square', color: 'green', shade: 'empty'},{number: 2, shape: 'square', color: 'green', shade: 'light'},{number: 2, shape: 'square', color: 'green', shade: 'solid'},{number: 2, shape: 'square', color: 'purple', shade: 'empty'},{number: 2, shape: 'square', color: 'purple', shade: 'light'},{number: 2, shape: 'square', color: 'purple', shade: 'solid'},{number: 2, shape: 'circle', color: 'orange', shade: 'empty'},{number: 2, shape: 'circle', color: 'orange', shade: 'light'},{number: 2, shape: 'circle', color: 'orange', shade: 'solid'},{number: 2, shape: 'circle', color: 'green', shade: 'empty'},{number: 2, shape: 'circle', color: 'green', shade: 'light'},{number: 2, shape: 'circle', color: 'green', shade: 'solid'},{number: 2, shape: 'circle', color: 'purple', shade: 'empty'},{number: 2, shape: 'circle', color: 'purple', shade: 'light'},{number: 2, shape: 'circle', color: 'purple', shade: 'solid'},{number: 2, shape: 'triangle', color: 'orange', shade: 'empty'},{number: 2, shape: 'triangle', color: 'orange', shade: 'light'},{number: 2, shape: 'triangle', color: 'orange', shade: 'solid'},{number: 2, shape: 'triangle', color: 'green', shade: 'empty'},{number: 2, shape: 'triangle', color: 'green', shade: 'light'},{number: 2, shape: 'triangle', color: 'green', shade: 'solid'},{number: 2, shape: 'triangle', color: 'purple', shade: 'empty'},{number: 2, shape: 'triangle', color: 'purple', shade: 'light'},{number: 2, shape: 'triangle', color: 'purple', shade: 'solid'},{number: 3, shape: 'square', color: 'orange', shade: 'empty'},{number: 3, shape: 'square', color: 'orange', shade: 'light'},{number: 3, shape: 'square', color: 'orange', shade: 'solid'},{number: 3, shape: 'square', color: 'green', shade: 'empty'},{number: 3, shape: 'square', color: 'green', shade: 'light'},{number: 3, shape: 'square', color: 'green', shade: 'solid'},{number: 3, shape: 'square', color: 'purple', shade: 'empty'},{number: 3, shape: 'square', color: 'purple', shade: 'light'},{number: 3, shape: 'square', color: 'purple', shade: 'solid'},{number: 3, shape: 'circle', color: 'orange', shade: 'empty'},{number: 3, shape: 'circle', color: 'orange', shade: 'light'},{number: 3, shape: 'circle', color: 'orange', shade: 'solid'},{number: 3, shape: 'circle', color: 'green', shade: 'empty'},{number: 3, shape: 'circle', color: 'green', shade: 'light'},{number: 3, shape: 'circle', color: 'green', shade: 'solid'},{number: 3, shape: 'circle', color: 'purple', shade: 'empty'},{number: 3, shape: 'circle', color: 'purple', shade: 'light'},{number: 3, shape: 'circle', color: 'purple', shade: 'solid'},{number: 3, shape: 'triangle', color: 'orange', shade: 'empty'},{number: 3, shape: 'triangle', color: 'orange', shade: 'light'},{number: 3, shape: 'triangle', color: 'orange', shade: 'solid'},{number: 3, shape: 'triangle', color: 'green', shade: 'empty'},{number: 3, shape: 'triangle', color: 'green', shade: 'light'},{number: 3, shape: 'triangle', color: 'green', shade: 'solid'},{number: 3, shape: 'triangle', color: 'purple', shade: 'empty'},{number: 3, shape: 'triangle', color: 'purple', shade: 'light'},{number: 3, shape: 'triangle', color: 'purple', shade: 'solid'}];
  var randomArray = [];
  for (var i = 0; i < 81; i++) {
    var tempLength = cardArray.length;
    var rand = Math.floor(Math.random() * tempLength);
    randomArray.push(cardArray[rand]);
    cardArray.splice(rand, 1);
  }
  var ids = [];
  var played = [];
  var numbers = ["1", "2", "3"];
  var colors = ["orange", "green", "purple"];
  var shapes = ["square", "circle", "triangle"];
  var shades = ["empty", "light", "solid"];
  //initializer for each card object in array
  for (var i = 0; i < randomArray.length; i++) {
    //make card dive
    var $div = $('<div>');
    $div.addClass('card').toggle();
    //make id
    var id = randomArray[i].number + randomArray[i].shape + randomArray[i].color + randomArray[i].shade;
    //add id to id array
    ids.push(id);
    //give card id
    $div.attr('id', id);
    //make num for class
    var num = "";
    switch (randomArray[i].number) {
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
    //add items to card
    for (var j = 0; j < randomArray[i].number; j++) {
      //make items and cards
      var $item = $('<div>');
      $item.addClass('item ' + num + ' '+ randomArray[i].shape + ' ' + randomArray[i].color + ' ' + randomArray[i].shade);
      $div.append($item);
    }
    //add card to board
    $('#board').append($div);
  }
  //get list of initial random 12 card ids
  while (played.length < 12) {
    var randId = ids[Math.floor(Math.random() * ids.length)];
    if (played.indexOf(randId) < 0) {
      played.push(randId);
    }
  }
  //display initial 12
  for (var i = 0; i < played.length; i++) {
    $('#' + played[i]).toggle();
  }
  var clicks = 0;
  var currentCards = [];
  //click a card
  $('.card').on('click', function() {
    if (currentCards.indexOf($(this).attr('id')) < 0) {
      $(this).addClass('clicked');
      clicks++;
      currentCards.push($(this).attr('id'));
      if (clicks > 2) {
        setTimeout(function() {
          //if the third click makes a set
          if (checker(randomArray[ids.indexOf(currentCards[0])], randomArray[ids.indexOf(currentCards[1])], randomArray[ids.indexOf(currentCards[2])])) {
            alert('set!');
            for (var i = 0; i < currentCards.length; i++) {
              $('#' + currentCards[i]).removeClass('clicked').toggle();
            }
            var currLength = played.length;
            //get three new ids
            while (played.length < currLength + 3) {
              var randId = ids[Math.floor(Math.random() * ids.length)];
              if (played.indexOf(randId) < 0) {
                played.push(randId);
              }
            }
            //display three new cards
            for (var i = currLength; i < played.length; i++) {
              $('#' + played[i]).toggle();
            }
            //if it's not a set
          } else {
            alert('not a set');
            for (var i = 0; i < currentCards.length; i++) {
              $('#' + currentCards[i]).removeClass('clicked');
            }
          }
          //reset current cards and number of clicks
          currentCards.splice(0);
          clicks = 0;
        }, 80);
      }
    } else {
      $(this).removeClass('clicked');
      currentCards.splice(currentCards.indexOf($(this).attr('id')), 1);
      clicks--;
    }
  });
  //check relationship of three cards
  function checker (obj1, obj2, obj3) {
    return propCheck(obj1.number, obj2.number, obj3.number) && propCheck(obj1.shape, obj2.shape, obj3.shape) && propCheck(obj1.color, obj2.color, obj3.color) && propCheck(obj1.shade, obj2.shade, obj3.shade);
  }
  //check the property status within a relationship of three cards
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
