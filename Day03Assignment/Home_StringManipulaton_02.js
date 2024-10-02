
// Input: s = "   fly me   to   the moon  " 
// Output: 4 
// Explanation: The last word is "moon" with length 4. 



function test(str) {
    str = str.trim();
    console.log("Trimmed string is :"+str);
    let words = str.split(" ");
    console.log("splited string is :"+words);
    let lastWord = words[words.length-1];
    console.log("last word of the string is :"+lastWord);
    return lastWord.length;
 

}
let sampleString = "   fly me   to   the moon  "
console.log("Last word legnth is-->"+test(sampleString));