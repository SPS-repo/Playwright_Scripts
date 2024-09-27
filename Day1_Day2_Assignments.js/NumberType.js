
function numberType(number) {
    if(number>0) {
        console.log(number + " This is positive number");
        
    } else if(number<0) {
        console.log(number + " This is negative number");

    } else {
        console.log(number + " This is natural number");
    }
}

let number;

let numberTypeCheck = numberType(-1);
console.log(numberTypeCheck);
//numberType(1);