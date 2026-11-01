const dice_amount = parseInt(prompt('How many dice?'))
const target_sum = parseInt(prompt('What sum do you want from the dice?'))

function getProbability(dice_amount, target_sum){
    let dice = 0
    let target = 0
    const repetitions = 1000000
    for (let i = 1; i <= repetitions; i++){
        let dice_sum = 0
        for (let ii = 1; ii <= dice_amount; ii++){
            dice = Math.floor(Math.random() * (7 - 1) + 1)
            dice_sum += dice
        }
        if (dice_sum == target_sum){
            target += 1
        }
    }
    const result = (target/repetitions).toFixed(2) * 100
    console.log(result + '%')
    return result
}
document.querySelector('#probability').innerHTML=`Probability to get sum ${target_sum} with ${dice_amount} dice is ${getProbability(dice_amount, target_sum)}${'%'}`