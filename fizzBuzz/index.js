'use strict';
//function that returns result
function fizzBuzz (num) {
  if (num%5 === 0 && num%3 ===0) {
    return 'fizzbuzz';
  }
  else if (num%5 === 0) {
    return 'buzz';
  }
  else if (num%3 ===0) {
    return 'fizz';
  }
  return num;
}

//display result 

function generateHtml (fizzResult) {
  return `<div class='fizz-buzz-item'><span>${fizzResult}</span></div> `;
}

//handle submit

function handleSubmit() {
  $('#number-chooser').submit( event => {
    event.preventDefault();
    const countTo = $('#number-choice').val();
    const fizzBuzzResults = [];
    for (let i=1; i<=countTo; i++) {
      fizzBuzzResults.push(fizzBuzz(i));
    }
    const htmlArr = fizzBuzzResults.map( result => generateHtml(result));
    $('.js-results').html(htmlArr);
  });
}
 
$(handleSubmit);