//TODO work with played array and remaining cards to allow for random reset of cards

$(function() {
  //original non-randomized card array
  var cardArray = [{number: 1, shape: 'square', color: 'orange', shade: 'empty'},{number: 1, shape: 'square', color: 'orange', shade: 'light'},{number: 1, shape: 'square', color: 'orange', shade: 'solid'},{number: 1, shape: 'square', color: 'green', shade: 'empty'},{number: 1, shape: 'square', color: 'green', shade: 'light'},{number: 1, shape: 'square', color: 'green', shade: 'solid'},{number: 1, shape: 'square', color: 'purple', shade: 'empty'},{number: 1, shape: 'square', color: 'purple', shade: 'light'},{number: 1, shape: 'square', color: 'purple', shade: 'solid'},{number: 1, shape: 'circle', color: 'orange', shade: 'empty'},{number: 1, shape: 'circle', color: 'orange', shade: 'light'},{number: 1, shape: 'circle', color: 'orange', shade: 'solid'},{number: 1, shape: 'circle', color: 'green', shade: 'empty'},{number: 1, shape: 'circle', color: 'green', shade: 'light'},{number: 1, shape: 'circle', color: 'green', shade: 'solid'},{number: 1, shape: 'circle', color: 'purple', shade: 'empty'},{number: 1, shape: 'circle', color: 'purple', shade: 'light'},{number: 1, shape: 'circle', color: 'purple', shade: 'solid'},{number: 1, shape: 'triangle', color: 'orange', shade: 'empty'},{number: 1, shape: 'triangle', color: 'orange', shade: 'light'},{number: 1, shape: 'triangle', color: 'orange', shade: 'solid'},{number: 1, shape: 'triangle', color: 'green', shade: 'empty'},{number: 1, shape: 'triangle', color: 'green', shade: 'light'},{number: 1, shape: 'triangle', color: 'green', shade: 'solid'},{number: 1, shape: 'triangle', color: 'purple', shade: 'empty'},{number: 1, shape: 'triangle', color: 'purple', shade: 'light'},{number: 1, shape: 'triangle', color: 'purple', shade: 'solid'},{number: 2, shape: 'square', color: 'orange', shade: 'empty'},{number: 2, shape: 'square', color: 'orange', shade: 'light'},{number: 2, shape: 'square', color: 'orange', shade: 'solid'},{number: 2, shape: 'square', color: 'green', shade: 'empty'},{number: 2, shape: 'square', color: 'green', shade: 'light'},{number: 2, shape: 'square', color: 'green', shade: 'solid'},{number: 2, shape: 'square', color: 'purple', shade: 'empty'},{number: 2, shape: 'square', color: 'purple', shade: 'light'},{number: 2, shape: 'square', color: 'purple', shade: 'solid'},{number: 2, shape: 'circle', color: 'orange', shade: 'empty'},{number: 2, shape: 'circle', color: 'orange', shade: 'light'},{number: 2, shape: 'circle', color: 'orange', shade: 'solid'},{number: 2, shape: 'circle', color: 'green', shade: 'empty'},{number: 2, shape: 'circle', color: 'green', shade: 'light'},{number: 2, shape: 'circle', color: 'green', shade: 'solid'},{number: 2, shape: 'circle', color: 'purple', shade: 'empty'},{number: 2, shape: 'circle', color: 'purple', shade: 'light'},{number: 2, shape: 'circle', color: 'purple', shade: 'solid'},{number: 2, shape: 'triangle', color: 'orange', shade: 'empty'},{number: 2, shape: 'triangle', color: 'orange', shade: 'light'},{number: 2, shape: 'triangle', color: 'orange', shade: 'solid'},{number: 2, shape: 'triangle', color: 'green', shade: 'empty'},{number: 2, shape: 'triangle', color: 'green', shade: 'light'},{number: 2, shape: 'triangle', color: 'green', shade: 'solid'},{number: 2, shape: 'triangle', color: 'purple', shade: 'empty'},{number: 2, shape: 'triangle', color: 'purple', shade: 'light'},{number: 2, shape: 'triangle', color: 'purple', shade: 'solid'},{number: 3, shape: 'square', color: 'orange', shade: 'empty'},{number: 3, shape: 'square', color: 'orange', shade: 'light'},{number: 3, shape: 'square', color: 'orange', shade: 'solid'},{number: 3, shape: 'square', color: 'green', shade: 'empty'},{number: 3, shape: 'square', color: 'green', shade: 'light'},{number: 3, shape: 'square', color: 'green', shade: 'solid'},{number: 3, shape: 'square', color: 'purple', shade: 'empty'},{number: 3, shape: 'square', color: 'purple', shade: 'light'},{number: 3, shape: 'square', color: 'purple', shade: 'solid'},{number: 3, shape: 'circle', color: 'orange', shade: 'empty'},{number: 3, shape: 'circle', color: 'orange', shade: 'light'},{number: 3, shape: 'circle', color: 'orange', shade: 'solid'},{number: 3, shape: 'circle', color: 'green', shade: 'empty'},{number: 3, shape: 'circle', color: 'green', shade: 'light'},{number: 3, shape: 'circle', color: 'green', shade: 'solid'},{number: 3, shape: 'circle', color: 'purple', shade: 'empty'},{number: 3, shape: 'circle', color: 'purple', shade: 'light'},{number: 3, shape: 'circle', color: 'purple', shade: 'solid'},{number: 3, shape: 'triangle', color: 'orange', shade: 'empty'},{number: 3, shape: 'triangle', color: 'orange', shade: 'light'},{number: 3, shape: 'triangle', color: 'orange', shade: 'solid'},{number: 3, shape: 'triangle', color: 'green', shade: 'empty'},{number: 3, shape: 'triangle', color: 'green', shade: 'light'},{number: 3, shape: 'triangle', color: 'green', shade: 'solid'},{number: 3, shape: 'triangle', color: 'purple', shade: 'empty'},{number: 3, shape: 'triangle', color: 'purple', shade: 'light'},{number: 3, shape: 'triangle', color: 'purple', shade: 'solid'}];
  //array to be filled with cardArray values in a random order
  var randomArray = [];
  //randomly sort the cardArray into the randomArray
  for (var i = 0; i < 81; i++) {
    var tempLength = cardArray.length;
    var rand = Math.floor(Math.random() * tempLength);
    randomArray.push(cardArray[rand]);
    cardArray.splice(rand, 1);
  }
  //empty array to hold ids for the purpose of easily accessing the objects in the randomArray by id
  var ids = [];
  //empty array to be filled with ids of cards currently on the board
  var played = [];
  //empty array to hold card jquery objects that have yet to be played
  var deck = [];
  //initializer for each card object in array
  for (var i = 0; i < randomArray.length; i++) {
    //make card div
    var $div = $('<div>').addClass('card');
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
    //add card to deck
    deck.push($div);
  }
  var workingIds = ids.slice(0);
  //get list of initial random 12 card ids
  while (played.length < 12) {
    //get random id from ids array
    var randId = workingIds[Math.floor(Math.random() * workingIds.length)];
    //if id isn't yet in the played array, add it
    if (played.indexOf(randId) < 0) {
      played.push(randId);
    }
  }
  //display initial 12 from deck to board
  for (var i = 0; i < played.length; i++) {
    //add card based on played id to board
    $('#board').append(deck[workingIds.indexOf(played[i])]);
    //remove displayed card on board from deck
    deck.splice(workingIds.indexOf(played[i]), 1);
    workingIds.splice(workingIds.indexOf(played[i]), 1);
  }
  //count number of cards currently clicked
  var clicks = 0;
  //cards currently clicked
  var currentCards = [];
  //click a card
  $('#addMore').on('click', function() {
    //get three new ids
    var currLength = played.length;
    while (played.length < currLength + 3) {
      var randId = workingIds[Math.floor(Math.random() * workingIds.length)];
      if (played.indexOf(randId) < 0) {
        played.push(randId);
      }
    }
    //display three new cards
    for (var i = currLength; i < played.length; i++) {
      //add card based on played id to board
      $('#board').append(deck[workingIds.indexOf(played[i])]);
      //remove displayed card on board from deck
      deck.splice(workingIds.indexOf(played[i]), 1);
      workingIds.splice(workingIds.indexOf(played[i]), 1);
    }
  });
  $('.card').on('click', function() {
    if (currentCards.indexOf($(this).attr('id')) < 0) {
      $(this).addClass('clicked');
      clicks++;
      currentCards.push($(this).attr('id'));
      if (clicks > 2) {
        setTimeout(function() {
          console.log(ids.length);
          //if the third click makes a set
          // console.log(currentCards[0]);
          // console.log(ids);
          // console.log(ids.indexOf(currentCards[0]));
          // console.log(randomArray[ids.indexOf(currentCards[1])]);
          // console.log(randomArray[ids.indexOf(currentCards[2])]);
          if (checker(randomArray[ids.indexOf(currentCards[0])], randomArray[ids.indexOf(currentCards[1])], randomArray[ids.indexOf(currentCards[2])])) {
            alert('set!');
            for (var i = 0; i < currentCards.length; i++) {
              $('#' + currentCards[i]).remove();
            }
            var currLength = played.length;
            //get three new ids
            while (played.length < currLength + 3) {
              var randId = workingIds[Math.floor(Math.random() * workingIds.length)];
              if (played.indexOf(randId) < 0) {
                played.push(randId);
              }
            }
            //display three new cards
            for (var i = currLength; i < played.length; i++) {
              //add card based on played id to board
              $('#board').append(deck[workingIds.indexOf(played[i])]);
              //remove displayed card on board from deck
              deck.splice(workingIds.indexOf(played[i]), 1);
              workingIds.splice(workingIds.indexOf(played[i]), 1);
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


// TODO keep this comment
// Object Creator
// var numbers = ["1", "2", "3"];
// var colors = ["orange", "green", "purple"];
// var shapes = ["square", "circle", "triangle"];
// var shades = ["empty", "light", "solid"];
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
