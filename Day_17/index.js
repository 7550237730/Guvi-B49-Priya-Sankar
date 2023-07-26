let promiseObject = new Promise((resolve,reject) =>{
    console.log("Check for the Item processed with order!!!");
    // resolve("Item are available");
    reject("Item are not available")

});
console.log(promiseObject);
//Way 1
// promiseObject.then(
//     (val) =>  {
//         console.log("order status--------", val);
//     },
//     (err) =>{
//         console.log("order status--------", err);
//     }
//     );


//way 2
    promiseObject.then(
        (val) =>  {
            console.log("order status--------", val);
        }).catch((err)=>{
            console.log("order status--------", err);

        })