// 1. Reverse text

function reverseText(e){
    let array1 = e.split('');
    var text ='';
    for (i = array1.length- 1 ; i >= 0 ; i--) {
      text  += array1[i] 
    }
     return text
  }
  console.log(reverseText('Hello World!'))
  
  
  // 2. Palindrome checker
  // A palindrome is a word or phrase that reads the same backward as forward. 
  // Write a function that checks for this. Don't use reverse function, use loops.
  // Example input: isPalindrome('kayak')
  // Example output: true
  // Example input: isPalindrome('name')
  // Example output: false
  
  function isPalindrome(e){
    let array1 = e.split('');
    var text = '';
    for (var i = array1.length- 1 ; i >= 0 ; i--) {
      text  += array1[i] 
    }
    if(text === e){
      return true
    }
    else{
      return false
    }
  }
  console.log(isPalindrome('kayak'))
  
  
  
  // 3. FizzBuzz
  // Given a number as an input, print out every integer from 1 to that number. 
  // However, when the integer is divisible by 2, print out “Fizz”; 
  // when it’s divisible by 3, print out “Buzz”; 
  // when it’s divisible by both 2 and 3, print out “Fizz Buzz”. Use for loops.
  // Example input: fizzBuzz(11)
  // Example output: [1, "Fizz", "Buzz", "Fizz", 5, "Fizz Buzz", 7, "Fizz", "Buzz", "Fizz", 11]
  
  function fizzBuzz(e) {
    var array = [];
    for (let i = 1; i < e; i++) {
      if (i % 6 === 0) {
        array.push('FizzBuzz')
      } else if (i % 2 === 0) {
        array.push('Fizz')
      } else if (i % 3 === 0) {
        array.push('Buzz')
      } else
        array.push(i)
    }
    return array;
  }
  console.log(fizzBuzz(11))
  
  
  // 4. Reverse Array
  // Given an array of items, reverse the order. Don't use reverse function, use loops.
  // Example input: reverseArray([22, 'hi', 12])
  // Example output: [12, 'hi', 22]
  
  
  function reverseArray(e){  
    var array2 = []
    for (var i = e.length- 1 ; i >= 0 ; i--) {
      array2.push(e[i])
    }
     return array2
  }
  
  var array = [22, 'hi', 12];
  
  console.log(reverseArray(array))
  
  
  // 5. Reverse Words
  // Given a phrase, reverse the order of the characters of each word. Don't use reverse function, use loops.
  // Example input: reverseWords('I love JavaScript!')
  // Example output: 'I evol !tpircSavaJ'
  
  
  
  function reverseText(e){
    let array1 = e.split('');
    var text ='';
    for (i = array1.length- 1 ; i >= 0 ; i--) {
      text  += array1[i] 
    }
     return text
  }
  console.log(reverseText('Hello World!'))
  
  function reverseWords(e){
    let array = e.split(' ');
    var text = '';
    for (var i = 0 ; i < array.length; i++) {
      text += (reverseText(array[i])) + ' '
    }
     return text
  }
  console.log(reverseWords('I love JavaScript!'))
  
  
  // 6. Capitalization
  // Given a phrase, capitalize every word.
  // Example input: capitalizeWords('i love javaScript!')
  // Example output: 'I Love JavaScript!
  
  function capitalizeWords(e) {
    let array = e.split('');
    var textResult = '';
    for (var i = 0; i < array.length; i++) {
      if (i === 0) {
        textResult += array[i].toUpperCase()
      } else {
        textResult += array[i].toLowerCase()
      }
    }
    return textResult
  }
  console.log(capitalizeWords('hello'))
  
  
  function capitalizeSentence(e) {
    let array = e.split(' ');
    var text = '';
    for (var i = 0; i < array.length; i++) {
      text += (capitalizeWords(array[i])) + ' '
    }
    return text
  }
  console.log(capitalizeSentence('I love JaVaScript!'))
  
  // 7. Subtract two Sets
  // Given two arrays that contains integers, 
  //remove the integers of second array from the first.
  // Example input: subctractArray([1, 2, 4, 6], [2, 6])
  // Example output: [1, 4]
  
  function subctractArray(i, j) {
    for (let i = 0; i < array1.length; i++) {
      for (let j = 0; j < array2.length; j++) {
        if (array2[j] === array1[i]) {
          array1.splice(i, 1)
          console.log(array1)
        }
      }
    }
    return array1
  }
  let array1 = [1, 2, 4, 6];
  let array2 = [2, 6];
  console.log(subctractArray(array1, array2))
  
  
  
  // 1. Find Highest Number inside an array
  // Write a function that takes an array returns highest number of the array
  
  function highestNumber(e) {
    e.sort(function(a, b) {
      return b - a
    })
    return e[0]
  }
  var array = [1, 22, 33, 4, 5, 6, 7, 9]
  
  console.log(highestNumber(array))
  
  
  // 2. count words inside a string
  // Write a function that takes an and retruns a nmuber of words. ('words leave after space')
  // Example input: countWords('Hello World!')
  // Example output: "2"
  
  function countWords(e){
    return array = e.split(' ').length
   }
  console.log(countWords('hello World!'))
  
  
  // 3. find number of the letters
  // write a function that takes 2 elements one is a letter the other is an array.
  // first convert to array to a string. return numbers of the letters inside the string
  // Example input: countLetters('e',['Hello','Worlds!'])
  // Example output: "1"
  
  function countLetters(e, arr){
    let arr2 = arr.join(' ').split('')
    console.log(arr2)
    var count = 0;
    for (let i = 0; i < arr2.length; i++) {
      if ( e === arr2[i])
      count += 1
    }
    return count
  }
  console.log(countLetters('',['Hello','Worlds!']))
  