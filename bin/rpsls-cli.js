#!/usr/bin/env node
import minimist from 'minimist';
import {rpsls} from "../lib/rpsls.js";

// Parse command-line arguments
var arg = minimist(process.argv.slice(2));

// Help message with instructions and usage examples
const help_message = `Usage: node-rpsls [SHOT]
Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!
  -h, --help        display this help message and exit
  -r, --rules       display the rules and exit
Examples:
  node-rpsls        Return JSON with single player RPSLS result.
                    e.g. {"player":"rock"}
  node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                    e.g {"player":"rock","opponent":"Spock","result":"lose"}
`;

// Rules for the Lizard-Spock Expansion of Rock Paper Scissors
const rules = `Rules for the Lizard-Spock Expansion of Rock Paper Scissors:
- Scissors CUTS Paper
- Paper COVERS Rock
- Rock SMOOSHES Lizard
- Lizard POISONS Spock
- Spock SMASHES Scissors
- Scissors DECAPITATES Lizard
- Lizard EATS Paper
- Paper DISPROVES Spock
- Spock VAPORIZES Rock
- Rock CRUSHES Scissors
`;

// Display help message if -h or --help flag is provided
if (arg.h || arg.help) {
    console.log(help_message);
    process.exit(0);
}

// Display rules if -r or --rules flag is provided
if (arg.r || arg.rules) {
    console.log(rules);
    process.exit(0);
}

let shot = arg._[0]; // Get the user's shot from command line arguments

try {
    console.log(JSON.stringify(rpsls(shot))); // Play RPSLS and display the result
} catch (e) {
    console.log(rules); // Display rules if an error occurs
}