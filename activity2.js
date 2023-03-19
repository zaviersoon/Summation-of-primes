// Summation of primes

function sumPrime(x) {
    var array = [], sum=0;
    for (var i=2; i<x; i++) {
        if(typeof array[i] === 'undefined') {
            array[i]=true;
            for(var k = i+i; k<x; k+=i) {
                array[k]=false;
            }
            if (array[i]) {
                sum+=i;
            }
        }
    }
    return sum;
}

console.log(sumPrime(2000000))