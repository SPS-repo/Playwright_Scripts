function GradeCheck(score) {
    let grade;
    switch (true) {
    
    case (score >= 90 && score <= 100):
        grade = 'A';
        console.log("You have A grade");
        
        break;
    case (score >=70 && score <= 80):
        grade = 'B';

        console.log("You have B grade");
        break;
    case (score >=60 && score <= 70):
        grade = 'C';
        break;
        console.log("You have C grade");
        break;
    default:
        console.log(score + " You have failed");
    return;
    }
    
}
   
    GradeCheck(79);