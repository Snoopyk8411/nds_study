#!/usr/bin/env node

const { getArgs } = require('./utils/args');
const { runApp } = require('./app');

const userArguments = getArgs(process.argv);

runApp(userArguments);