/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.

 
/* describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  it('Throws an error so it fails', function() {
    throw new Error('Delete me!');
  });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num/2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
}); */

describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...
  var should = chai.should();
  it('has a prefix of 38 and a length of 14', function() {
    (detectNetwork('38345678901234')).should.equal('Diner\'s Club');
  });
  it('has a prefix of 39 and a length of 14', function() {
    (detectNetwork('39345678901234')).should.equal('Diner\'s Club'); 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true.
  //if, input length is 15 digits && starts with 34 || 37 (num tests 2)
  var should = chai.should(); 
  it('has a prefix of 34 and a length of 15', function() {
    (detectNetwork('343456789012345')).should.equal('American Express');
  });
  it('has a prefix of 37 and a length of 15', function() {
    (detectNetwork('373456789012345')).should.equal('American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var should = chai.should();
  it('has a prefix of 4 and a length of 13', function() {
    (detectNetwork('4123456789012')).should.equal('Visa');
  });
  it('has a prefix of 4 and a length of 16', function() {
    (detectNetwork('4123456789012345')).should.equal('Visa');
  });
  it('has a prefix of 4 and a length of 19', function() {
    (detectNetwork('4123456789012345678')).should.equal('Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var should = chai.should();
  /*

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both.   
  */
  //if, first characters are 51-55 && length is 16 (num tests 5)
  for (var prefix = 51; prefix <= 55; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        detectNetwork(prefix+'34567890123456').should.equal('MasterCard');
      });
    })(prefix)
  }
});
describe('Discover', function() {
  //'Discover' : if prefix is 6011, 644-649, or 65 && length = 16 || 19
   //            if prefix is 6011, 644-649, or 65 && length = 16 || 19 (num tests 16)
  var should = chai.should();
  it('has a prefix of 6011 and a length of 16', function() {
    detectNetwork('6011567890123456').should.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 19', function() {
    detectNetwork('6011567890123456789').should.equal('Discover');
  });
  for (var prefix = 644; prefix <= 649; prefix++) {
  (function(prefix) {
    it('has a prefix of ' + prefix + ' and a length of 16', function() {
      detectNetwork(prefix+'4567890123456').should.equal('Discover');
    });
    it('has a prefix of ' + prefix + ' and a length of 19', function() {
      detectNetwork(prefix+'4567890123456789').should.equal('Discover');
    });
  })(prefix)
  }
  it('has a prefix of 65 and a length of 16', function() {
    detectNetwork('6534567890123456').should.equal('Discover');
  });
  it('has a prefix of 65 and a length of 19', function() {
    detectNetwork('6534567890123456789').should.equal('Discover');
  });
});

describe('Maestro', function() {
  //   'Maestro' :
  // if, prefix = 5018,5020,5038,6304 && length = 12-19 
  // if, prefix = 5018,5020,5038,6304 && length = 12-19 (num tests 32)
  var should = chai.should();
  for (var len = 12 ; len <= 19; len++) {
    var prefix = 5018;
    var padString = '12345678901234567890';
    var cardNumberCurr = prefix + padString.substr(0,(len - prefix.toString().length));
    (function(len) {
      it('has a prefix of ' + prefix + ' and a length of ' +len+ '\'', function(){
        detectNetwork(cardNumberCurr).should.equal('Maestro');
      });
    })(len)
  }
  //5020
  for (var len = 12 ; len <= 19; len++) {
    var prefix = 5020;
    var padString = '12345678901234567890';
    var cardNumberCurr = prefix + padString.substr(0,(len - prefix.toString().length));
    (function(len) {
      it('has a prefix of ' + prefix + ' and a length of ' +len+ '\'', function(){
        detectNetwork(cardNumberCurr).should.equal('Maestro');
      });
    })(len)
  }
  //5038
  for (var len = 12 ; len <= 19; len++) {
    var prefix = 5038;
    var padString = '12345678901234567890';
    var cardNumberCurr = prefix + padString.substr(0,(len - prefix.toString().length));
    (function(len) {
      it('has a prefix of ' + prefix + ' and a length of ' +len+ '\'', function(){
        detectNetwork(cardNumberCurr).should.equal('Maestro');
      });
    })(len)
  }
  //6304
  for (var len = 12 ; len <= 19; len++) {
    var prefix = 6304;
    var padString = '12345678901234567890';
    var cardNumberCurr = prefix + padString.substr(0,(len - prefix.toString().length));
    (function(len) {
      it('has a prefix of ' + prefix + ' and a length of ' +len+ '\'', function(){
        detectNetwork(cardNumberCurr).should.equal('Maestro');
      });
    })(len)
  }
});

/*
China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.

Heads up! Switch and Visa seem to have some overlapping card numbers - in any apparent conflict, you should choose the network with the longer prefix.
*/
describe('China UnionPay', function() {
  var should = chai.should();
  //  'China UnionPay' : prefix = 622126-622925, 624,626, 6282-6288 && len 16-19
    //                   prefix = 622126-622925, 624-626, 6282-6288 && len 16-19 (num tests 3240)
  for (var len =16 ; len<= 19 ; len++) {
    (function(len) {
    for (var prefix = 622126 ; prefix <= 622925 ; prefix++) {
      (function(prefix) {
      var padString = '12345678901234567890';
      var cardNumberCurr = prefix + padString.substr(0,(len - prefix.toString().length));
      it('has a prefix of ' + prefix + ' and a length of ' + len + '\'', function() {
        detectNetwork(cardNumberCurr).should.equal('China UnionPay');
        });
      })(prefix)
    }
  })(len)
  }
  for (var len =16 ; len<= 19 ; len++) {
    (function(len) {
    for (var prefix = 6282 ; prefix <= 6288 ; prefix++) {
      (function(prefix) {
      var padString = '12345678901234567890';
      var cardNumberCurr = prefix + padString.substr(0,(len - prefix.toString().length));
      it('has a prefix of ' + prefix + ' and a length of ' + len + '\'', function() {
        detectNetwork(cardNumberCurr).should.equal('China UnionPay');
        });
      })(prefix)
    }
  })(len)
  }
  for (var len =16 ; len<= 19 ; len++) {
    (function(len) {
    for (var prefix = 624 ; prefix <= 626 ; prefix++) {
      (function(prefix) {
      var padString = '12345678901234567890';
      var cardNumberCurr = prefix + padString.substr(0,(len - prefix.toString().length));
      it('has a prefix of ' + prefix + ' and a length of ' + len + '\'', function() {
        detectNetwork(cardNumberCurr).should.equal('China UnionPay');
        });
      })(prefix)
    }
  })(len)
  }
});

describe('Switch', function() {
  var should = chai.should();
  //  'Switch' : 4903,4905,4911,4936,564182,633110,6333,6759 && len 16,18,19
  // prefix:     4903,4905,4911,4936,564182,633110,6333,6759 && len 16,18,19 (num tests 24)
  for (var len = 16; len <= 19; len++) {
    var prefix = 4903;
    var padString = '12345678901234567890';
    var cardNumberCurr = prefix + padString.substr(0,(len - prefix.toString().length));
    if (len === 16 || len === 18 || len === 19){
      (function(len) {
      it('has a prefix of ' + prefix + ' and a length of ' +len+ '\'', function(){
        detectNetwork(cardNumberCurr).should.equal('Switch');
      });
    })(len)
    }
  }
  for (var len = 16; len <= 19; len++) {
    var prefix = 4905;
    var padString = '12345678901234567890';
    var cardNumberCurr = prefix + padString.substr(0,(len - prefix.toString().length));
    if (len === 16 || len === 18 || len === 19){
    (function(len) {
      it('has a prefix of ' + prefix + ' and a length of ' +len+ '\'', function(){
        detectNetwork(cardNumberCurr).should.equal('Switch');
      });
    })(len)
    }
  }
  for (var len = 16; len <= 19; len++) {
    var prefix = 4911;
    var padString = '12345678901234567890';
    var cardNumberCurr = prefix + padString.substr(0,(len - prefix.toString().length));
    if (len === 16 || len === 18 || len === 19){
    (function(len) {
      it('has a prefix of ' + prefix + ' and a length of ' +len+ '\'', function(){
        detectNetwork(cardNumberCurr).should.equal('Switch');
      });
    })(len)
    }
  }
  for (var len = 16; len <= 19; len++) {
    var prefix = 4936;
    var padString = '12345678901234567890';
    var cardNumberCurr = prefix + padString.substr(0,(len - prefix.toString().length));
    if (len === 16 || len === 18 || len === 19){
    (function(len) {
      it('has a prefix of ' + prefix + ' and a length of ' +len+ '\'', function(){
        detectNetwork(cardNumberCurr).should.equal('Switch');
      });
    })(len)
    }
  }
  for (var len = 16; len <= 19; len++) {
    var prefix = 564182;
    var padString = '12345678901234567890';
    var cardNumberCurr = prefix + padString.substr(0,(len - prefix.toString().length));
    if (len === 16 || len === 18 || len === 19){
    (function(len) {
      it('has a prefix of ' + prefix + ' and a length of ' +len+ '\'', function(){
        detectNetwork(cardNumberCurr).should.equal('Switch');
      });
    })(len)
    }
  }
  for (var len = 16; len <= 19; len++) {
    var prefix = 633110;
    var padString = '12345678901234567890';
    var cardNumberCurr = prefix + padString.substr(0,(len - prefix.toString().length));
    if (len === 16 || len === 18 || len === 19){
    (function(len) {
      it('has a prefix of ' + prefix + ' and a length of ' +len+ '\'', function(){
        detectNetwork(cardNumberCurr).should.equal('Switch');
      });
    })(len)
    }
  }
  for (var len = 16; len <= 19; len++) {
    var prefix = 6333;
    var padString = '12345678901234567890';
    var cardNumberCurr = prefix + padString.substr(0,(len - prefix.toString().length));
    if (len === 16 || len === 18 || len === 19){
    (function(len) {
      it('has a prefix of ' + prefix + ' and a length of ' +len+ '\'', function(){
        detectNetwork(cardNumberCurr).should.equal('Switch');
      });
    })(len)
    }
  }
  for (var len = 16; len <= 19; len++) {
    var prefix = 6759;
    var padString = '12345678901234567890';
    var cardNumberCurr = prefix + padString.substr(0,(len - prefix.toString().length));
    if (len === 16 || len === 18 || len === 19){
    (function(len) {
      it('has a prefix of ' + prefix + ' and a length of ' +len+ '\'', function(){
        detectNetwork(cardNumberCurr).should.equal('Switch');
      });
    })(len)
    }
  }

});


/*
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
