// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
//  Visa always has a prefix of 4 and a length of 13, 16, or 19.
//MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
/*

38345678901234 (Diner's Club)
39345678901234 (Diner's Club)
343456789012345 (American Express)
373456789012345 (American Express)
4123456789012 (Visa)
4123456789012345 (Visa)
4123456789012345678 (Visa)
5112345678901234 (MasterCard)
5212345678901234 (MasterCard)
5312345678901234 (MasterCard)
5412345678901234 (MasterCard)
5512345678901234 (MasterCard)

The Diner's Club network always starts with a 38 or 39 and is 14 digits long 2
The American Express network always starts with a 34 or 37 and is 15 digits long 2
Visa always has a prefix of 4 and a length of 13, 16, or 19. 3
MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16. 5
Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19. 16
Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19. 32
China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19. 
Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.

output options,  
	'American Express' :
		if, input length is 15 digits && starts with 34 || 37 (num tests 2)
	'Diner's Club' :
		if, input length is 14 digits && starts with 38 || 39 (num tests 2)
  'Visa' :
    if, first character is 4 && length is 13,16, or 19 (num tests 3)
  'MasterCard' :
    if, first characters are 51-55 && length is 16 (num tests 5)
  'Discover' :
    if prefix is 6011, 644-649, or 65 && length = 16 || 19 (num tests 16)
  'Maestro' :
    if, prefix = 5018,5020,5038,6304 && length = 12-19 (num tests 32)
  'China UnionPay' :
   prefix = 622126-622925, 624-626, 6282-6288 && len 16-19 (num tests 3240)
  'Switch' :
    prefix: 4903,4905,4911,4936,564182,633110,6333,6759 && len 16,18,19 (num tests 24)
*/

var detectNetwork = function(cardNumber) {
  var cardLen = cardNumber.length;

  function prefix(num) {
    return parseInt(cardNumber.slice(0,num));
  };
  function isSwitch() {
    if ((cardLen === 16 || cardLen === 18 || cardLen === 19) && (prefix(4) === 4903 || prefix(4) === 4905 || prefix(4) === 4936 || prefix(6) === 564182 || prefix(6) === 633110 || prefix(4) === 6333 || prefix(4) === 6759)) {
      return true;
    } else {
      return false;
    };
  };
  if ((cardLen === 14) && (prefix(2) === 38 || prefix(2) === 39)) {
  	return 'Diner\'s Club';
  } else if ((cardLen === 15) && (prefix(2) === 34 || prefix(2) === 37)) {
  	return 'American Express';
  } else if ((cardLen === 13 || cardLen === 16 || cardLen === 19) && (prefix(1) === 4) && (!isSwitch())) {
    return 'Visa';
  } else if (cardLen === 16 && (prefix(2) <= 55 && prefix(2) >= 51 )) {
    return 'MasterCard';
  } else if ((cardLen === 16 || cardLen === 19) && (prefix(4) === 6011 || (prefix(3) >= 644 && prefix(3) <= 649) || prefix(2) === 65)) {
    return 'Discover';
  } else if ((cardLen >= 12 && cardLen <= 19) && (prefix(4) === 5018 || prefix(4) === 5020 || prefix(4) === 5038 || prefix(4) === 6304)) {
    return 'Maestro';
  } else if ((cardLen >= 16 && cardLen <= 19) && ((prefix(6) >= 622126 && prefix(6) <= 622925) || (prefix(4) >= 6282 && prefix(4) <= 6288) || (prefix(3) >= 624 && prefix(3) <= 626))) {
    return 'China UnionPay';
  } else if (isSwitch() === true) {
    return 'Switch';
  };
};

/*
 function autoTester(cardType,lengthStart,lengthEnd,prefixStart,prefixEnd) {
    //returns 'it' functions specified with test comment string, running against detectNetwork with a generated card number string defined by the prefix concatted 
    //with filler digits to satisfy the length parameters
    for (var i=lengthStart ; i<= lengthEnd ; i++) {
      for (var e=prefixStart ; e<= prefixEnd ; e++) {
        var prefixCurrent = e.toString();
        var cardNumberCurr = prefixCurrent.padEnd(i,'1234567890');
        it('has a prefix of ' + prefixCurrent + ' and a length of ' + i + '\'', function() {
      detectNetwork(cardNumberCurr).should.equal(cardType); });
      };
    }
  };
  */

