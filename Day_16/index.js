// function tempo(callback){
//     console.log("Stopped Playing cricket due to arrivel of tempo");
//     setTimeout(() => {
//         console.log("tempo left");
//         callback();
//     },5000);
// }

// function aftertempo(){
//     console.log("Lets go lay cricket");
// }

// tempo(aftertempo);

function walk(){
    console.log("Walking");
    run();
  }
  function run(){
    console.log("running");
    setTimeout(() => {
      console.log("Drinking Water");
    },0);
    
    rest();
  }
  function rest(){
    console.log("rest");
  }

  walk();