export {rps, rpsls}

function rps(shot) {
	let computer = Math.floor(Math.random()*3);
	computer = computer == 0 ? "Rock" :
					computer == 1 ? "Paper" :
					"Scissors";

	if (shot == undefined) {
		return {player: computer };
	}

	let user = shot.toLowerCase();

	let options = ["Rock", "Paper", "Scissors"];

	if (!options.includes(user)) {
			if (user === "Lizard" || user === "Spock") {
				console.error(`${shot} is out of range.`);
				throw new RangeError();
			} else {
				console.error(`${shot} is not a valid choice.`);
				throw new RangeError();
			}
		}

	let result = '';

	if (computer === user) {
		result = "Tie";
	} else if (computer === "Rock" && user === "Scissors" || computer === "Paper" && user === "Rock" || computer === "Scissors" && user === "Paper") {
		result = "Lose";
	} else {
		result = "Win";
	}

	return { player: user,
		opponent: computer,
		result: result
	};
}

function rpsls(shot) {
	let computer = Math.floor(Math.random()*5);
	computer = computer == 0 ? "Rock" :
		computer == 1 ? "Paper" :
		computer == 2 ? "Scissors" :
		computer == 3 ? "Lizard" :
		"Spock";

	if (shot == undefined) {
		return {player: computer };
	}
	
	let options = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

	let user = shot.toLowerCase();

	if (!options.includes(user)) {
		console.error(`${shot} is not a valid choice.`);
		throw new RangeError();
	}

	let result = '';

	if (computer === user) {
		result = "Tie";
	} else if (computer === "Rock" && user === "Scissors" || computer === "Paper" && user === "Rock" || computer === "Scissors" && user === "Paper") {
		result = "Lose";
	} else if (computer === "Rock" && user === "Lizard" || computer === "Lizard" && user === "Spock" || computer === "Spock" && user === "Rock") {
		result = "Lose";
	} else if (computer === "Spock" && user === "Scissors" || computer === "Scissors" && user === "Lizard" || computer === "Paper" && user === "Spock" || computer === "Lizard" && user === "Paper") {
		result = "Lose";
	} else {
		result = "Win";
	}

	return {player: user,
		opponent: computer,
		result: result
	};
}