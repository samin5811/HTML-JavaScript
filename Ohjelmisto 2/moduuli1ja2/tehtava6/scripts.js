const answer = confirm('Should I calculate the square root?');

if (answer == true){
    const number = prompt('Give a number');
    if (number < 0){
        document.querySelector('#squareroot').innerHTML=`The square root of a negative number is not defined`;
    }
    else{
        const square_root = Math.sqrt(number);
        document.querySelector('#squareroot').innerHTML=`The square root of ${number} is ${square_root}`;
    }
}
else{
    document.querySelector('#squareroot').innerHTML=`The square root is not calculated.`;
}