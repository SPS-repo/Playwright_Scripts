function launchBrowser(browser) {
    if(browser==='chrome') {
       console.log("Browser is equal to chrome");
       
    } else if (browser==='edge') {
        console.log("Browser is equal to edge");
    } else if(browser==='safari') {
        console.log("Browser is equal to Safari");
    } else if(browser==='firefox') {
        console.log("Browser is equal to firefox");
    } else {
        console.log("Unsupported browser");
    }
}

let browser='chrome';
launchBrowser(browser)




function runTest(testType) {
    switch (testType) {
        case 'smoke':
            console.log("This is smoke suite");            
            break;
        case 'sanity':
            console.log("This is Sanity suite ");            
            break;
        case 'regression':
            console.log("This is regression suite");            
            break;
        default:
            console.log("Invalid Test type"); 
            break;
    }
}
let testType = 'regression';
runTest(testType);