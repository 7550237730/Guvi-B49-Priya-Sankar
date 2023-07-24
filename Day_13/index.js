function performCalculator(operation){
    //const num1= Number(document.getElementById("num1").value);
    //const num2= Number(document.getElementById("num2").value);

    const num1 = Number(prompt("Please enter number 1"));
    const num2 = Number(prompt("Please enter number 2"));

    let result;

    switch(operation){

        case "add":
            result = num1 + num2;
            break;
        case "sub":
            result = num1 - num2;
            break;  
        case "mul":
            result = num1 * num2;
            break;
        case "div":
            result = num1 / num2;
            break;
            default:
                result = "Invaild Input"
    }

    const msg = confirm("do you want show result????");
    if(msg){
        document.getElementById("result").innerText = result;
    }
    else{

        document.getElementById("result").innerText = "Result Cannot be showen!!!";

    }

    setTimeout
    


}