// Create a JavaScript function that accepts a string, reverses it, and checks if the reversed string is a 
// palindrome, then test your function with various strings and print the results. 
 
 
// Write a function to reverse the string. 
// 1. Convert the input into characters 
// 2. Loop them in reverse direction 
// 3. Concatenate the string 
// 4. Print the new string 
// Write a function to check the given string is a palindrome 
// [If the given string and reverse string are the same, it is a palindrome] 
// 1. Check if the reverse string and original string are the same 
//  2. Return true if same, else the false. 





const revString = "testleaf"
function reverseString() {
    let chatString = revString.split("");
    let reversedString = "";
    for (let i = chatString.length-1; i >=0; i--) {
        reversedString= reversedString + chatString[i];
       
        
    }
   
    if(reversedString===revString){  // cheking if its palindrome
        console.log("Given string is palindrome");
     }else{
        console.log("Given string is not palindrome");
     }return reversedString

 }console.log("The reversed string is-->"+reverseString());
 

