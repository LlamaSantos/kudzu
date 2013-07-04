#!/usr/bin/env node

var app = require("commander");

app.
	.version("0.0.1")
	.usage("[options]")
	.option("-c", "create [feature]", "Create a new feature.")
	parse(process.argv);