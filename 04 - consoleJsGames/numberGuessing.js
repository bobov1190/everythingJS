// Game settings
const min = 1
const max = 100
const maxAttempts = 10

// Randomly generated number
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min

let attempts = 0
let guessedCorrectly = false

console.log(`Welcome to the Number Guessing Game!`)
console.log(`I have selected a number between ${min} and ${max}.`)
console.log(`You have ${maxAttempts} attempts to guess it.`)

function guessNumber() {
	const guess = parseInt(
		prompt(`Enter your guess (Attempt ${attempts + 1} of ${maxAttempts}):`)
	)

	if (isNaN(guess) || guess < min || guess > max) {
		console.log(`Please enter a valid number between ${min} and ${max}.`)
	} else {
		attempts++

		if (guess === randomNumber) {
			guessedCorrectly = true
			console.log(
				`Congratulations! You've guessed the correct number ${randomNumber} in ${attempts} attempts.`
			)
		} else if (guess < randomNumber) {
			console.log(`Too low! Try again.`)
		} else {
			console.log(`Too high! Try again.`)
		}
	}

	if (!guessedCorrectly && attempts < maxAttempts) {
		guessNumber()
	} else if (!guessedCorrectly) {
		console.log(
			`Game over! You've used all ${maxAttempts} attempts. The correct number was ${randomNumber}.`
		)
	}
}

// Start the game
guessNumber()
