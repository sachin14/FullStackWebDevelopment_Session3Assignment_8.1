//function to determine prime number

function isPrime(n){

  if(n<2){
      return false; // 1 is not prime
  }
  //check if the input is number and integer only
  var num = n.toString();
  var i = 0;
  while(i<=num.length){
    if(num.charCodeAt(i) < 48 || num.charCodeAt(i)> 57){
        //If the input is not a number, then return false and print error
        console.log("Input is not a integer. Please enter a valid integer.")
        return false;
        }
        i++;
    }   
    // 2 and 3 are prime
    if(n == 2 || n ==3){
        return true;
    }
    //for input greater than 3, check for prime
    for(j=2;j<=n/2;j++){
        if(n%j == 0)
            return false;
    }

    return true;
  }

  
//calling function and pass argument
console.log(isPrime(98));