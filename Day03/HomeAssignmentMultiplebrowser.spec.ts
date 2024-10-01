import {chromium, firefox, test  } from "@playwright/test";


test(`Test to launch multiple browser`, async () => {

  
    const edgeBrowser = await chromium.launch({headless:false, channel: "msedge"});
    const firefoxBrowser = await firefox.launch({headless:false, channel: "firefox"})


    const contextEdge = await edgeBrowser.newContext();
    const contextFirefox = await firefoxBrowser.newContext();


    const pageEdge = await contextEdge.newPage();
    await pageEdge.goto("https://www.redbus.in/");
    
    const titleRedbus = await pageEdge.title()
    const urlRedbus = await pageEdge.url()
    console.log("Redbus url is - "+urlRedbus);
    
    //let redbusTitle = pageEdge.title();
    console.log("Title of red bus in Edge is -->"+ titleRedbus);
    if (titleRedbus==="Bus Ticket Booking Online made Easy, Secure with Top Bus Operators - redBus"&&urlRedbus ==="https://www.redbus.in/") {
        console.log("RedBus title and url are verified");
        
    }else{
    console.log("Wrong title and url");
    }
  


    const pageFirefox = await contextFirefox.newPage();
    await pageFirefox.goto("https://www.flipkart.com/");
 
    const titleFlipkart = await pageFirefox.title()
    const urlflipkart = await pageFirefox.url()
    console.log("Flipkart url is - "+urlflipkart);

    console.log("Title of flipkart in firefox is -->"+ titleFlipkart);

    if (titleFlipkart==="Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!"&&urlflipkart==="https://www.flipkart.com/" ) {
        console.log("Flipkart title and url are verified");
        
    }else{
        console.log("Wrong title and url");
  
}
})
