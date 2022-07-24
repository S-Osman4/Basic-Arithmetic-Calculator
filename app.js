const first = prompt('Enter your first number: ');

    if (isNaN(first) || first == "") {
        alert('You did not input a number');
    }

    else if (first == null) {
        alert('Refresh the page if you want to start again !');
    }

    else {

        let second = prompt('Enter arithmetic operation you want to perform i.e (+ or - or / or *)');

        if (second !== '+' && second !== '-' && second !== '/' && second !== '*') {
            alert('You did not input any of the recommended arithmetic operations!');
        }

        else if (second == "") {
            alert('You did not input an arithmetic operation');
        }

        else if (second == null) {
            alert('Incomplete arithmetic operation! Refresh the page to start again');
        }
        
        else {

            const third = prompt('Enter your second number: ');
    
    
            if (isNaN(third)) {
                alert('Sorry! You did not input a number');
            }

            else if (third == "") {
                alert('You did not input a second number');
            }
    
            else if (third == null) {
                alert('Incomplete arithmetic operation! Refresh the page to start again');
            }

            else {
                
                let value = first + second + third;
                
                let result = eval(value);
        
                alert(` ${value} = ${result}`);
            }
     
        }

    }
