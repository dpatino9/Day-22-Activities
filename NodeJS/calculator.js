var num1 = parseInt(process.argv[3]);
var num2 = parseInt(process.argv[4]);
var operator = process.argv[2];
var result = 0;
    
    console.log(process.argv);

            if (operator == "plus"){
                result = num1 + num2;
                console.log(result);
            }

            if (operator == "minus"){
                result = num1 - num2;
                console.log(result);
            }

            if (operator == "times"){
                result = num1 * num2;
                console.log(result);
            }

            if (operator == "divide"){
                result = num1 / num2;
                console.log(result);
            }

           