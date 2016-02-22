#! /usr/bin/env node

var publicIp = require('public-ip'),
    chalk = require('chalk'),
    config = require('./lib/config'),
    events = require('events');

var units = {
        type: 'us',
        tmp: '˚F',
        speed: 'mph'
    };

var ip = '';

publicIp(function (err, res) {
    if (err) {
        console.log(chalk.red('✗ couldn\'t find public ip address'));
    } else if (res) {
        ip = res;
    }
});

var Config = new config(units, ip);
Config.sudo();

console.log(chalk.dim('powered by Forecast.io'));
