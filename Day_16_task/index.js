
// const element = document.getElementById('Count');

setTimeout(function () {
    document.getElementById('Count').innerText = '10';
    //console.log("Timer 10 is finished!!!");
  
    setTimeout(function()  {
    document.getElementById('Count').innerText = '9';
      console.log("Timer 9 is finished!!!");
  
      setTimeout(function()  {
       document.getElementById('Count').innerText = '8';
        console.log("Timer 8 is finished!!!");
        setTimeout(function(){
            document.getElementById('Count').innerText = '7';
            console.log("Timer 7 is finished!!!");
            setTimeout(function(){
                document.getElementById('Count').innerText = '6';
                console.log("Timer 6 is finished!!!");
                setTimeout(function(){
                    document.getElementById('Count').innerText = '5';
                    console.log("Timer 5 is finished!!!");
                    setTimeout(function(){
                        document.getElementById('Count').innerText = '4';
                        console.log("Timer 4 is finished!!!");
                        setTimeout(function(){
                            document.getElementById('Count').innerText = '3';
                            console.log("Timer 3 is finished!!!");
                            setTimeout(function(){
                                document.getElementById('Count').innerText = '2';
                                console.log("Timer 2 is finished!!!");
                                setTimeout(function(){
                                    document.getElementById('Count').innerText = '1';
                                    console.log("Timer 1 is finished!!!");
                                    setTimeout(function(){
                                        document.getElementById('Count').innerText = '';
                                        document.getElementById('happy').innerText = 'Happy';
                                        document.getElementById('Indepence').innerText = 'Independence';
                                        document.getElementById('day').innerText = 'Day!!!';
                                        console.log("Task is finished!!!");
                                    },1000);    
                                },1000);    
                            },1000);    
                        },1000);    
                    },1000);    
                },1000);    
            },1000);    
        },1000);       
      }, 1000);
    }, 1000);
  }, 2000);

 