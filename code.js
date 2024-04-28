function tailFib(n){
    if(n < 1){
        return 0;
    }

    return tail(n, 0, 1)
}

function tail(n, minusTwo, minusOne){
    if(n == 1){
        return minusOne;
    }
    // let arr = addition(minusTwo, minusOne)
    return tail(n - 1, minusOne, minusTwo + minusOne)
}

// function addition(two ,one){
//     let tmp = one;
//     one += two;
//     two = tmp;
//     return [two, one]
// }

module.exports = {tailFib};

