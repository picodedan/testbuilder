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
    for (var prefix = 3800; prefix <= 3999; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 14', function() {
        detectNetwork(prefix+'5678901234').should.equal('Diner\'s Club');
      });
    })(prefix)
  }
});

describe('American Express', function() {
  //if, input length is 15 digits && starts with 34 || 37 (num tests 2)
  var should = chai.should(); 
  for (var prefix = 3700; prefix <= 3799; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 15', function() {
        detectNetwork(prefix+'56789012345').should.equal('American Express');
      });
    })(prefix)
  }
  for (var prefix = 3400; prefix <= 3499; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 15', function() {
        detectNetwork(prefix+'56789012345').should.equal('American Express');
      });
    })(prefix)
  }

});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var should = chai.should();

  for (var len =13 ; len<= 19 ; len++) {
    if (len ===13 || len === 16 || len ===19) {
      (function(len) {
      for (var prefix = 4000 ; prefix <= 4902 ; prefix++) {
        (function(prefix) {
        var padString = '12345678901234567890';
        var cardNumberCurr = prefix + padString.substr(0,(len - prefix.toString().length));
        it('has a prefix of ' + prefix + ' and a length of ' + len + '\'', function() {
          detectNetwork(cardNumberCurr).should.equal('Visa');
            });
          })(prefix)
        }
      })(len)
    }
  }
  for (var len =13 ; len<= 19 ; len++) {
    if (len === 16 || len ===19) {
      (function(len) {
      for (var prefix = 4904 ; prefix <= 4904 ; prefix++) {
        (function(prefix) {
        var padString = '12345678901234567890';
        var cardNumberCurr = prefix + padString.substr(0,(len - prefix.toString().length));
        it('has a prefix of ' + prefix + ' and a length of ' + len + '\'', function() {
          detectNetwork(cardNumberCurr).should.equal('Visa');
            });
          })(prefix)
        }
      })(len)
    }
  }
  for (var len =13 ; len<= 19 ; len++) {
    if (len === 16 || len ===19) {
      (function(len) {
      for (var prefix = 4906 ; prefix <= 4910 ; prefix++) {
        (function(prefix) {
        var padString = '12345678901234567890';
        var cardNumberCurr = prefix + padString.substr(0,(len - prefix.toString().length));
        it('has a prefix of ' + prefix + ' and a length of ' + len + '\'', function() {
          detectNetwork(cardNumberCurr).should.equal('Visa');
            });
          })(prefix)
        }
      })(len)
    }
  }
  for (var len =13 ; len<= 19 ; len++) {
    if (len === 16 || len ===19) {
      (function(len) {
      for (var prefix = 4912 ; prefix <= 4935 ; prefix++) {
        (function(prefix) {
        var padString = '12345678901234567890';
        var cardNumberCurr = prefix + padString.substr(0,(len - prefix.toString().length));
        it('has a prefix of ' + prefix + ' and a length of ' + len + '\'', function() {
          detectNetwork(cardNumberCurr).should.equal('Visa');
            });
          })(prefix)
        }
      })(len)
    }
  }
  for (var len =13 ; len<= 19 ; len++) {
    if (len === 16 || len ===19) {
      (function(len) {
      for (var prefix = 4937 ; prefix <= 4999 ; prefix++) {
        (function(prefix) {
        var padString = '12345678901234567890';
        var cardNumberCurr = prefix + padString.substr(0,(len - prefix.toString().length));
        it('has a prefix of ' + prefix + ' and a length of ' + len + '\'', function() {
          detectNetwork(cardNumberCurr).should.equal('Visa');
            });
          })(prefix)
        }
      })(len)
    }
  }
    for (var len =13 ; len<= 13 ; len++) {
    if (len ===13) {
      (function(len) {
      for (var prefix = 4902 ; prefix <= 4999 ; prefix++) {
        (function(prefix) {
        var padString = '12345678901234567890';
        var cardNumberCurr = prefix + padString.substr(0,(len - prefix.toString().length));
        it('has a prefix of ' + prefix + ' and a length of ' + len + '\'', function() {
          detectNetwork(cardNumberCurr).should.equal('Visa');
            });
          })(prefix)
        }
      })(len)
    }
  }

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
  for (var prefix = 510; prefix <= 559; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        detectNetwork(prefix+'4567890123456').should.equal('MasterCard');
      });
    })(prefix)
  }
});
describe('Discover', function() {
  //'Discover' : if prefix is 6011, 644-649, or 65 && length = 16 || 19
   //            if prefix is 6011, 644-649, or 65 && length = 16 || 19 (num tests 16)
  var should = chai.should();
  for (var len = 16 ; len <= 19; len++) {
    if(len === 16 || len === 19) {
    var prefix = 6011;
    var padString = '12345678901234567890';
    var cardNumberCurr = prefix + padString.substr(0,(len - prefix.toString().length));
      (function(len) {
        it('has a prefix of ' + prefix + ' and a length of ' +len+ '\'', function(){
          detectNetwork(cardNumberCurr).should.equal('Discover');
        });
      })(len)
    }
  }
  for (var prefix = 644; prefix <= 659; prefix++) {
  (function(prefix) {
    it('has a prefix of ' + prefix + ' and a length of 16', function() {
      detectNetwork(prefix+'4567890123456').should.equal('Discover');
    });
    it('has a prefix of ' + prefix + ' and a length of 19', function() {
      detectNetwork(prefix+'4567890123456789').should.equal('Discover');
    });
  })(prefix)
  }
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
      //console.log(cardNumberCurr + " " + cardNumberCurr.length)
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
      //console.log(cardNumberCurr + " " + cardNumberCurr.length)
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
      console.log(cardNumberCurr + " " + cardNumberCurr.length);
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

