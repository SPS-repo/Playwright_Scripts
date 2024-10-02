// Given a string s consisting of words and spaces, return the length of the last word in the string. 
// Example 1: 
// Input: s = "Hello World" 
// Output: 5



function test(str) {
    let words = str.split(" ");
    console.log("splited string is :"+words);
    let lastWord = words[words.length-1];
    console.log("last word of the string is :"+lastWord);
    return lastWord.length;
 

}
let sampleString = "HELLO WORLD"
console.log("Last wrod legnth is-->"+test(sampleString));
  



