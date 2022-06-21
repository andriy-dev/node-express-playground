// MODULES
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const { john, peter } = require("./4-first-module");
const sayHi = require("./5-second-module");
const data = require("./6-alternative-syntax");
// The INVOKED function in "7-mind-grenade" will also run in the actual module
require("./7-mind-grenade");

sayHi("susan");
sayHi(john);
sayHi(peter);