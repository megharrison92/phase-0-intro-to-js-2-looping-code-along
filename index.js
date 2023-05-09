// Code your solutions in this file
// Thank you cards
const friends =["Charlie", "Samip", "Ali"]
const gift = ["birthday"]

function writeCards( friends , gift) {
    let greetings = []
    for (let i = 0; i < friends.length; i++) {
        console.log(`Thank you, ${friends[i]}, for the wonderful ${gift} gift!`);
        greetings.push(`Thank you, ${friends[i]}, for the wonderful ${gift} gift!`);
    }
    return greetings;
}
writeCards(friends, gift);

// 
function countDown() {
for (let countDown = 10; countDown > -1; countDown--) {
    console.log(countDown);
    }
}
