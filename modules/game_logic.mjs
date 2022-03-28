import { play } from './utilities.mjs'
import { myField } from '../app.mjs'

// Declare 2 indexes to refer to the 2 dimensional array of myField, they are initialised at 0
let index1 = 0
let index2 = 0

// Keep a track of how much cash the player has in game starting with 0
let total_cash = 0
console.log(total_cash)

export const gameLogic = (input) => {
    // When player moves, change the previous spot back to neutral field
    myField.fieldArray[index1][index2] = '░'
    
    // Handle movement logic and voluntary exit from app based on user's input
    const userInput = input.toString().toLowerCase()
    switch (userInput) {
      case 'u\n':
      case 'up\n':
        index1 -= 1
        break;
      case 'r\n':
      case 'right\n':
        index2 += 1
        break;
      case 'd\n':
      case 'down\n':
        index1 += 1
        break;
      case 'l\n':
      case 'left\n':
        index2 -= 1
        break;
      case 'quit\n':
        process.exit()
        break;
    }
    
    // Establish the conditions under which the game is over
    if (index1 < 0 || index2 < 0 || index1 > 9 || index2 > 9) {
      process.stdout.write(`You left the field, Game Over!\n`);
      process.exit()
    } else if (myField.fieldArray[index1][index2] === 'O') {
      process.stdout.write(`You fell in a hole, Game Over!\n`);
      process.exit()
    } else if (myField.fieldArray[index1][index2] === '^') {
      process.stdout.write(`You found your hat, congratulations!\n`);
      process.exit()
    }
    
    if (myField.fieldArray[index1][index2] === '$') {
      // The player has hit a cash symbol, increment their total and tell them about it
      total_cash = total_cash + 1
      process.stdout.write(`You found some cash! You now have $${total_cash}\n`);
    } 

    // Move the player to the location based on the results of the switch
    myField.fieldArray[index1][index2] = '*'
    // Print the updated field to the terminal
    myField.print()
    // Repeat the instructions to play
    play()
  }
