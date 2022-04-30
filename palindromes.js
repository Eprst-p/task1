const testStrings = ['ELRMENMET', 'BABCBAB', 'AAAAAA', 'CacaaC', 'forgeegsskeepfor'];

const getLongestPalindrome = function (string) {
    let leftIndex = 0;
    let rightIndex = 0;
  
    //расползаемся для каждого символа в строке
    for (let i = 0; i < string.length; i++) {
      let lengthForOdd = expandFromCenter(string, i, i);
      let lengthForEven = expandFromCenter(string, i, i + 1);
      let lengthResult = Math.max(lengthForOdd, lengthForEven);
  
      //находим края палиндрома, если длина оказалось больше предыдущей
      if (lengthResult > rightIndex - leftIndex) {
        leftIndex = Math.ceil(i - (lengthResult - 1) / 2);
        rightIndex = Math.floor(i + lengthResult / 2);
      }
    }
  
    //функция расползалка
    function expandFromCenter(string, L, R) {
      while (L >= 0 && R < string.length && string[L] === string[R]) {
        L--;
        R++;
      }
      return R - L - 1;
    }
  
    return string.slice(leftIndex, rightIndex + 1);
  };

  testStrings.forEach(str => console.log(getLongestPalindrome(str)));
