import { populateMyField, greet, play } from './modules/utilities.mjs'
import { gameLogic } from './modules/game_logic.mjs'

// Define a Class to be used as a template for the game field
class Field {
  constructor() {
    // Define an 'empty' 2 dimensional array that will be used as the game field
    this._fieldArray = [
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '']
    ]
  }

  get fieldArray() {
    return this._fieldArray
  }
  set fieldArray(input) {
    this._fieldArray = input
  }

  // Print the game field to the terminal
  print() {
    this._fieldArray.forEach(
      array => process.stdout.write(`${array.join('')}\n`)
    )
  }
}

// Make an instance of the Field class that the player will use to play
export const myField = new Field()
// Propulate that instance with random types for every field cell
populateMyField()

// Handle user input with gameLogic function defined in game_logic.mjs
const userInput = process.stdin.on('data', gameLogic)

// Give the initial information to the player
greet()
myField.print()
play()