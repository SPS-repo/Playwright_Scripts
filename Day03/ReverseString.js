
const revString = "TestLeaf"
function reverseString() {
    let chatString = revString.split("");
    let reversedString = "";
    for (let i = chatString.length-1; i >=0; i--) {
        reversedString= reversedString + chatString[i];
        
     
       
        
    }return reversedString

}console.log(reverseString());
