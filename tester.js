var count = 0;
for (var len =16 ; len<= 19 ; len++) {
for (var prefix = 622126 ; prefix <= 622925 ; prefix++) {
  var padString = '12345678901234567890';
  var cardNumberCurr = prefix + padString.substr(0,(len - prefix.toString().length));
  count++
  console.log(count, len, prefix, cardNumberCurr);
}
};

for (var len = 16; len <= 19; len++) {
  var prefix = 4903;
  var padString = '12345678901234567890';
  var cardNumberCurr = prefix + padString.substr(0,(len - prefix.toString().length));
  if (len === 16 || len === 18 || len === 19){
      count++
    console.log(count, len, prefix, cardNumberCurr);
  }
}
