import readlineSync from 'readline-sync';
import { user } from "../src/cli.js"
const game=()=>{
    let min=1;
    let max=100;
    console.log('Welcome to the Brain Games!');
    const userName = user();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    let answercount=0;
    while(answercount < 3){
        const rondomaizer=Math.floor(Math.random()*(max-min));
        console.log ('Question: '+rondomaizer);
        
        const answer = readlineSync.question('Your answer: ');
        const coranswer = (rondomaizer % 2 === 0) ?  'yes' : 'no' ;
        if (answer!==coranswer){
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${coranswer}'.\nLet's try again, ${userName}!`)
            return;
        }
        console.log('Correct!')
        answercount +=1
    }
    return `Congratulations, ${userName}!`
}
console.log(game())