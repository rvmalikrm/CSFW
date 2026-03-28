function processItem(item,callback){
    console.log("Processing item: " + item);
    callback(); // Call the callback function after processing the item
}

// Define a callback function
function myCallback(){
    console.log("Callback function executed!");
}

processItem("Burger", myCallback);

function processItem(item,callback1,callback2){
    console.log("Processing item: " + item);
    callback(); // Call the callback function after processing the item
    callback(); // Call the second callback function after processing the item

}

// Define a callback function
function myCallback1(){
    console.log("Callback function 1 executed!");
}
function myCallback2(){
    console.log("Callback function 2 executed!");
}

processItem("Burger", myCallback1, myCallback2);