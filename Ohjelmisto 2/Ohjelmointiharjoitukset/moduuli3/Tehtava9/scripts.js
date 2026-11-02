const numberArray = [1,2,3,4,5,6,7,8,9]

function even(array) {
    let evenArray = []
    for (const indice of numberArray) {
        if (indice % 2 == 0){
            evenArray.push(indice)
        }
    }
    return evenArray
}
const evenArray = even()
console.log(numberArray)
console.log(evenArray)