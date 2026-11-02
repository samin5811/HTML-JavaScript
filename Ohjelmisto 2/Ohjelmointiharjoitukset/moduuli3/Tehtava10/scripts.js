const candidateAmount = parseInt(prompt('How many candidates?'))
const candidates = []
for (let i = 1; i <= candidateAmount; i++){
    let candidateName = prompt(`Name for candidate ${i}`)
    candidates.push({ name: candidateName, votes: 0 });
}


const voterAmount = parseInt(prompt('How many voters?'))
for (let i = 1; i <= voterAmount; i++){
    let votersCandidate = prompt(`Voter ${i} who will you vote for?`)
    for (let candidate of candidates){
        if (votersCandidate.toLowerCase() == candidate.name.toLowerCase()){
            candidate.votes += 1
        }
    }
}
let voteAmount = 0
let winner = "Nobody"
for (let candidate of candidates){
    if (voteAmount < candidate.votes){
        voteAmount = candidate.votes
        winner = candidate.name
    }
}

console.log(`The winner is ${winner} with ${voteAmount} votes.`)
console.log('Results:')
candidates.sort((a, b) => b.votes - a.votes);
for (let candidate of candidates){
    console.log(`${candidate.name}: ${candidate.votes} votes`)
}