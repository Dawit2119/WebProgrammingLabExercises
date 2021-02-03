/*  
Here is the exercise on working on the remaining bom method 

Location , Navigator , screen , Window 

Follow the Instruction on the comments 

1. Declare the UI Variables for selecting on the elements 
2. Use the innerHTML property to display the result on each element 
3. The Text  of the elements will lead you what bom information is required 

Adding Extra is Possible if you want to explore more ...

Good Luck !!! 
*/




// Define UI Variables  here 
let ul = document.querySelectorAll('.collection')
    locationInfo = ul[0];
    browserInfo = ul[1];
    screenInfo = ul[2];
    browserHistoryInfo = ul[3]
// Display the BOM Information on the innerHTML of the elements
//location information start
    locationInfo.children[0].innerHTML += `<span class="float-right">${location.href}</span>`
    locationInfo.children[1].innerHTML += `<span class="float-right">${location.protocol}</span>`
    locationInfo.children[2].innerHTML += `<span class="float-right">${location.host}</span>`
    locationInfo.children[3].innerHTML += `<span class="float-right">${location.port}</span>`
    locationInfo.children[4].innerHTML += `<span class="float-right">${location.hostname}</span>`
// location information end


//browser information start
browserInfo.children[0].innerHTML += `<span class="float-right">${navigator.appName}</span>`
browserInfo.children[1].innerHTML += `<span class="float-right">${navigator.appVersion}</span>`
browserInfo.children[2].innerHTML += `<span class="float-right">${navigator.language}</span>`
browserInfo.children[3].innerHTML += `<span class="float-right">${navigator.platform}</span>`
browserInfo.children[4].innerHTML += `<span class="float-right">${navigator.cookieEnabled}</span>`
// browser information end

//screen information start
screenInfo.children[0].innerHTML += `<span class="float-right">${screen.height}</span>`
screenInfo.children[1].innerHTML += `<span class="float-right">${screen.width}</span>`
screenInfo.children[2].innerHTML += `<span class="float-right">${screen.pixelDepth}</span>`
screenInfo.children[3].innerHTML += `<span class="float-right">${screen.availHeight}</span>`
screenInfo.children[4].innerHTML += `<span class="float-right">${screen.availWidth}</span>`
// screen information end

//history info start

browserHistoryInfo.children[0].innerHTML += `<span class="float-right">${history.length}</span>`
browserHistoryInfo.children[1].innerHTML += `<span class="float-right">${history.state}</span>`
//history info end