import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";
import { createSpinner } from "nanospinner";
console.log(chalk.bgBlue('your mama a hoe!'))
let playerName ;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms))
 async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow(
        'who wants to be  a javascript millionaire?'
        
    )
    await sleep()
    rainbowTitle.stop()

    console.log(`${chalk.bgBlue('How to play')}
    I am a process on your computer.
    If you get any question wrong i will be ${chalk.bgRed('killed')}
    So take care ......`)
 }

 await welcome()
 async function askName(){
    const answers = await inquirer.prompt({
        name : "player_name",
        type : "input",
        message : "what is your name?",
        default(){
            return "Player";
        }
    })
    playerName = answers.player_name
    
    

    //console.log( playerName)
 }

await askName()

/*function question_1 () {
    const answers = inquirer.prompt({
        name: 'question_1',
        title : 'list',
        message : 'Javascript was created in 10 days then released on\n',
        choices : [
            'May 23rd, 1995',
            'Nov 24th, 1995',
            'Dec 4th, 1995',
            'Dec 17, 1996',
        ],
        
    });
    return handleAnswer(answers.question_1 == 'Dec 4th, 1995');
 }
*/ 
async function question_1 () {
    // 2. Added 'await' before inquirer, and changed 'title' to 'type'
    const answers = await inquirer.prompt({
        name: 'question_1',
        type : 'select', 
        message : 'Javascript was created in 10 days then released on\n',
        choices : [
            'May 23rd, 1995',
            'Nov 24th, 1995',
            'Dec 4th, 1995',
            'Dec 17, 1996',
        ],
    });
    
    // 3. Added 'await' before handleAnswer
    return await handleAnswer(answers.question_1 === 'Dec 4th, 1995');
}
 async function handleAnswer (isCorrect){
    const spinner = createSpinner('checking answer.....').start();
    await sleep()
    if(isCorrect){
        spinner.success({text:`Nice work ${playerName}. That's a legit answer `})
    } else {
        spinner.error({text:`sorry but i am afraid this is where you die......`})
        process.exit(1)
    }
 }

 await question_1()

 async function question_2 () {
    const answers = await inquirer.prompt({
        name : "question_2",
        type : "select",
        message : "what is the best anime of all timesn/",
        choices : [
            'jujutsu kaisen',
            'hell`s paradise',
            'demon slayers',
            'tokyo ghoul'
        ]
    })
    return handleAnswer2(answers.question_2 == "hell`s paradise")
 }

 async function handleAnswer2(correct){
    const spinner = createSpinner('Waiting for the answersa......').start();
   await sleep()
   if(correct){
    spinner.success({text:`congratuletions your are not a larper......`})
   } else {
    spinner.error({text:`sorry but i have to dicleare you a larper `})
    process.exit(1)
   }
 }

 await question_2();
 