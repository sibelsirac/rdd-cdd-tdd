#!/usr/bin/env node
'use strict';

const meow = require('meow');
const chalk = require('chalk');
const updateNotifier = require('update-notifier');
const pkg = require('./package.json');
const weather = require('./');

const cli = meow({
	help: [
		'Usage',
		'  $ weather <input>',
		'',
		'Options',
		'  city [Default: Dhaka]',
		'  country [Default: Bangladesh]',
		'  scale (C/F) [Default: Celcius]',
		'',
		'Examples',
		'  $ weather London UK C',
		'  London, UK',
		'  Condition: Partly Cloudy',
		'  Temperature: 32C'
	]
});
// convert the fahrenheit temperature to the celsius temperature 
function _toCelcius(temp) {
	return Math.round(((temp - 32) * 5) / 9);
}

updateNotifier({ pkg}).notify();

weather(cli.input, (err, result) => {
	if (err) {
		console.log(chalk.bold.red(err));
		process.exit(1);
	}
// conditon of the weather
	let condition = result.query.results.channel.item.condition.text;
	//temperature initialization
	let temperature;

	if (cli.input[2] && cli.input[2] === 'C') {
	//convert to celsius if the user type C 
		temperature = _toCelcius(result.query.results.channel.item.condition.temp) + 'C';
	} else if (cli.input[2] && cli.input[2] === 'F') {
	// do not need to convert the temperature is in fahrenheit if the user type F
		temperature = result.query.results.channel.item.condition.temp + 'F';
	} else {
	// the temperature is converted in celsius automatically if the user type nothing
		temperature = _toCelcius(result.query.results.channel.item.condition.temp) + 'C';
	}
    //take the first entry of the user and put it in the city variable , by default city is initialized at 'Dhaka'
	let city = cli.input[0] ? cli.input[0] : 'Dhaka'; 
	// take the second entry of the user and put it in the country variable , by default country is initialized at 'Bangladesh'
	let country = cli.input[1] ? cli.input[1] : 'Bangladesh';
// chalk print in the console in color the diferent element of the query and the result
	console.log(chalk.red(city + ', ' + country));
	console.log(chalk.cyan('Condition: ' + chalk.yellow(condition)));
	console.log(chalk.cyan('Temperature: ' + chalk.yellow(temperature)));
	process.exit();
});
