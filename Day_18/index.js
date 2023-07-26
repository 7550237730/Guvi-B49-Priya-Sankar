let promiseobj = new Promise((resolve,reject) => {
    resolve("SUCESS!!!")

});

function asyncTask1(){
   return new Promise((resolve)=>{
        setTimeout(() =>{
          resolve("Task 1 Completed");  
        },1000);

    });

}
function asyncTask2(){
    return new Promise((resolve)=>{
        setTimeout(() =>{
          resolve("Task 2 Completed");  
        },1000);

    });

}
function asyncTask3(){
    return new Promise((resolve)=>{
        setTimeout(() =>{
          resolve("Task 3 Completed");  
        },1000);

    });

}
function asyncTask4(){
    return new Promise((resolve)=>{
        setTimeout(() =>{
          resolve("Task 4 Completed");  
        },1000);

    });

}
// asyncTask1()
// .then((val)=>{
//     console.log(val);
//     return asyncTask2()})
//     .then((val) =>{
//     console.log(val);})
//     .then((val) =>{
//     console.log(val);
//     console.log("Task Completed");
// }).catch((err) =>{
//         console.log(err);
       
//     })

Promise.all([asyncTask1(),asyncTask2(),asyncTask3(),asyncTask4()]).then((val) =>{
    console.log(val);
    console.log("Task completed");
}).catch((err) =>{
            console.log(err);
           
        });

