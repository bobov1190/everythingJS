// Text-Based RPG Game

// Player object
const player = {
	name: 'Hero',
	health: 100,
	attack: 10,
	level: 1,
	experience: 0,
	gold: 0,
}

// Enemy object
const enemies = [
	{ name: 'Goblin', health: 30, attack: 5, experience: 20, gold: 10 },
	{ name: 'Orc', health: 50, attack: 7, experience: 30, gold: 20 },
	{ name: 'Dragon', health: 100, attack: 15, experience: 100, gold: 50 },
]

// Function to simulate a random encounter with an enemy
function encounter() {
	const enemy = enemies[Math.floor(Math.random() * enemies.length)]
	console.log(`A wild ${enemy.name} appears!`)
	battle(enemy)
}

// Function to simulate a battle
function battle(enemy) {
	while (player.health > 0 && enemy.health > 0) {
		console.log(`${player.name} attacks the ${enemy.name}!`)
		enemy.health -= player.attack
		console.log(`The ${enemy.name} has ${enemy.health} health left.`)

		if (enemy.health <= 0) {
			console.log(`The ${enemy.name} is defeated!`)
			player.experience += enemy.experience
			player.gold += enemy.gold
			console.log(
				`${player.name} gains ${enemy.experience} experience and ${enemy.gold} gold.`
			)
			levelUp()
			break
		}

		console.log(`The ${enemy.name} attacks ${player.name}!`)
		player.health -= enemy.attack
		console.log(`${player.name} has ${player.health} health left.`)

		if (player.health <= 0) {
			console.log(`${player.name} has been defeated! Game Over.`)
			return
		}
	}
}

// Function to level up the player
function levelUp() {
	if (player.experience >= player.level * 50) {
		player.level += 1
		player.attack += 5
		player.health = 100
		console.log(`${player.name} leveled up! Now at level ${player.level}.`)
	}
}

// Function to start the game
function startGame() {
	console.log('Welcome to the Text-Based RPG!')
	console.log(
		`Player: ${player.name}, Health: ${player.health}, Attack: ${player.attack}`
	)

	while (player.health > 0) {
		const action = prompt(
			'What would you like to do? (explore/rest/status/quit)'
		).toLowerCase()

		switch (action) {
			case 'explore':
				encounter()
				break
			case 'rest':
				player.health = 100
				console.log(`${player.name} rests and recovers to full health.`)
				break
			case 'status':
				console.log(
					`Player: ${player.name}, Health: ${player.health}, Attack: ${player.attack}, Level: ${player.level}, Experience: ${player.experience}, Gold: ${player.gold}`
				)
				break
			case 'quit':
				console.log('Thank you for playing!')
				return
			default:
				console.log(
					'Invalid action. Please choose explore, rest, status, or quit.'
				)
		}
	}
}

startGame()
