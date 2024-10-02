
// Input: isAnagram('hello', 'world')  
// Output: false 
// Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters. 

function StringsAnagram(str1,str2) {
    let len1 = str1.length;
    let len2 = str2.length;
 str1= str1.toLowerCase();
   str2= str2.toLowerCase();
   console.log("lowercase -->"+str1,str2);
   

    
    if(len1 !== len2){
       console.log('Invalid Input');
       return false
    }
     str1 = str1.split('').sort().join('');
     str2 = str2.split('').sort().join('');


    if(str1 === str2){
       console.log("Anagram String");
    } else { 
       console.log("Not an Anagram string");
    }
 }
 StringsAnagram("srie","iesr")