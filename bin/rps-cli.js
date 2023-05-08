#!/usr/bin/env node
import minimist from 'minimist';
import {rps} from "../lib/rpsls.js"

var arg = minimist(process.argv.slice(2));

const help_message = `Usage: node-rps [SHOT]
Play Rock Paper Scissors (RPS)
  -h, --help      display this help message and exit
  -r, --rules     display the rules and exit
Examples:
  node-rps        Return JSON with single player RPS result.
                  e.g. {"player":"rock"}
  node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                  e.g {"player":"rock","opponent":"scissors","result":"win"}`; 

const rules = `Rules for Rock Paper Scissors:
  - Scissors CUTS Paper
  - Paper COVERS Rock
  - Rock CRUSHES Scissors`; 

if (arg.h || arg.help) {
	console.log(help_message);
	process.exit(0);
}

if (arg.r || arg.rules) {
	console.log(rules);
	process.exit(0);
}

let shot = arg._[0]

try {
	console.log(JSON.stringify(rps(shot)));
} catch (e) {
	console.log(help_message);
	console.log(rules);
}