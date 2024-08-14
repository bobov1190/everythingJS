// Words array for the game
const words = ['javascript', 'hangman', 'browser', 'programming', 'developer']
const word = words[Math.floor(Math.random() * words.length)]
let hiddenWord = Array(word.length).fill('_').join('')
let attempts = 6
let guessedLetters = []

console.log('Welcome to Hangman!')
console.log(`Your word: ${hiddenWord}`)

// Function to update the hidden word based on the player's guess
function updateHiddenWord(letter) {
	let newHiddenWord = ''
	for (let i = 0; i < word.length; i++) {
		if (word[i] === letter) {
			newHiddenWord += letter
		} else {
			newHiddenWord += hiddenWord[i]
		}
	}
	hiddenWord = newHiddenWord
}

// Function to check if the player has won
function checkWin() {
	return hiddenWord === word
}

// Function to handle each guess
function guessLetter() {
	const letter = prompt('Guess a letter:').toLowerCase()

	if (guessedLetters.includes(letter)) {
		console.log("You've already guessed that letter. Try again.")
	} else if (word.includes(letter)) {
		guessedLetters.push(letter)
		updateHiddenWord(letter)
		console.log(`Good guess! Your word: ${hiddenWord}`)
	} else {
		guessedLetters.push(letter)
		attempts--
		console.log(`Wrong guess! You have ${attempts} attempts left.`)
	}

	if (checkWin()) {
		console.log("Congratulations! You've guessed the word!")
	} else if (attempts > 0) {
		guessLetter()
	} else {
		console.log(`Game over! The word was "${word}".`)
	}
}

// Start the game
guessLetter()
