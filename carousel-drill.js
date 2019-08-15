$('.thumbnail').on('click', e => {
  console.log(e.target);
});



//when you click or keyboard select thumbnail it should updated the carosel and the alt

// use toggle from lightbulbs to turn on and off with aria
// an

function handleCatClicks () {
  $('.thumbnail').on('click', event => {
    // save reference to this bulb,
    const targetCat = $(event.currentTarget);
    // and reference to all other bulbs
    const otherCats = $('.thumbnail').not(targetCat);
    // store whether this bulb is aria-pressed.
    // because attr() returns strings, we convert it
    // back to a boolean by making a comparison.
    const pressedBool = $(targetBulb).attr('aria-pressed') === 'true';
    
    // Remove 'bulb-on' and uncheck bulbs that are not this one
    otherBulbs.removeClass('bulb-on').attr('aria-pressed', false);
    // toggle the presence of 'bulb-on' on this bulb; 
    // toggle aria-pressed by inverting pressedBool 
    // using the ! operator.
    targetBulb.toggleClass('bulb-on').attr('aria-pressed', !pressedBool);
  });
}

$(handleBulbClicks);