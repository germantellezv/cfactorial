#!/usr/bin/env node

var prompt = require('prompt');
let cfactorial = require('../src/index.js')

// Validation
var schema = {
  properties: {
    number: {
      pattern: /^[0-9]+$/,
      message: 'Number must be only numbers.',
      required: true
    },
  }
};

//
// Start the prompt
//
prompt.start();

//

console.log("Enter a number to calculate its factorial");
// Get two properties from the user: username and email
//
prompt.get(schema, function (err, result) {
  //
  // Log the results.
  //
  let r = cfactorial(result.number)
  console.log('   factorial:' + r);
});