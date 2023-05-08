#!/usr/bin/env node
import minimist from 'minimist';
import {rps} from "../lib/rpsls.js"

// Parse command line arguments
var arg = minimist(process.argv.slice(2));

// Help message to display usage information
const help_message = `Usage: node-rps [SHOT]
Play Rock Paper Scissors (RPS)
  -h, --help      display this help message and exit
  -r, --rules     display the rules and exit
Examples:
  node-rps        Return JSON with single player RPS result.
                  e.g. {"player":"rock"}
  node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                  e.g {"player":"rock","opponent":"scissors","result":"win"}`;

// Rules message to display the rules of the game
const rules = `Rules for Rock Paper Scissors:
  - Scissors CUTS Paper
  - Paper COVERS Rock
  - Rock CRUSHES Scissors`;

// Check if help flag is provided
if (arg.h || arg.help) {
	console.log(help_message);
	process.exit(0);
}

// Check if rules flag is provided
if (arg.r || arg.rules) {
	console.log(rules);
	process.exit(0);
}

// Get the player's shot from command line arguments
let shot = arg._[0]

try {
	// Call the rps function to get the result and print it as JSON
	console.log(JSON.stringify(rps(shot)));
} catch (e) {
	// If an error occurs, print the help message and rules
	console.log(help_message);
	console.log(rules);
}