const username = prompt('Sorting hat is asking your name');
const random_number = (Math.random() * 3).toFixed();
console.log(random_number)
let user_class = "Error";
switch (random_number) {
    case '0':
        user_class = 'Slytherin';
        break;
    case '1':
        user_class = 'Hufflepuff';
        break;
    case '2':
        user_class = 'Gryffindor';
        break;
    case '3':
        user_class = 'Ravenclaw';
        break
    default:
    user_class = 'Death eater';
}


document.querySelector('#hat_result').innerHTML=`${username}, you are ${user_class}`;