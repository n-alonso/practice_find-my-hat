import { myField } from "../app.mjs"

// Define the different type of cells in the field
const unexplored = '░'
const player = '*'
const hat = '^'
const hole = 'O'

// Select a random field type out of unexplored and hole with a ratio of 3 to 1
export const selectRandom = () => {
    const random = Math.floor(Math.random() * 4) + 1
    switch (random) {
      case 1:
      case 2:
      case 3:
        return unexplored;
        break;
      case 4:
        return hole;
        break;
    }
}

// Print a greeting message as standard output
export const greet = () => process.stdout.write(
    `Hello player and welcome to Find My Hat!\n
    Below you can see the game field, in which there is unexplored field (░), holes where you can fall (O), and a hat (^)!\n
    You will start in the top-left corner and your character will be marked with an asterisk (*).\n
    You will need to walk until you find your hat, but be careful! if you leave the field or fall in a hole you will lose.\n\n`
)
// Print a message with instructions on how to play
export const play = () => process.stdout.write(
    `\nWhich direction would you like to move?\n
    Write 'up/right/down/left' to play or 'quit' to exit this program: \n`
)

// Generate a random index from 0 to 9
const randomIndex = () => Math.floor(Math.random() * 10)
// Populate the play field with the random function, then add a one player and one hat
export const populateMyField = () => {
    myField.fieldArray.forEach(
      array => array.forEach(
        (element, index) => {
          array[index] = selectRandom()
        }
      )
    )
    myField.fieldArray[0][0] = player
    myField.fieldArray[randomIndex()][randomIndex()] = hat
}