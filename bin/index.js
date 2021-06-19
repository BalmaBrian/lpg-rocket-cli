#! /usr/bin/env node

const yargs = require("yargs");
const chalk = require("chalk");
const utils = require("./utils");

const usage = chalk.hex("#9FD1FF")("\nUsage: lpg [options] route");

const options = yargs
  .usage(usage)
  .help(true)
  .options({
    v: {
      alias: "valve",
      demandOption: false,
      describe: "Acuate valve at specified route.",
      type: "string",
    },
    V: {
      alias: "valve_test",
      demandOption: false,
      describe: "Test valve controller test route.",
      type: "boolean",
    },
  }).argv;

// Dealing with v Flag
if (yargs.argv.v != null || yargs.argv.valve != null) {
  utils.actuateValve(yargs.argv.v || yargs.argv.valve);
  return;
}

// Dealing with V Flag
if (yargs.argv.V == true || yargs.argv.valve_test == true) {
  utils.actuateValve("/test/TEST");
  return;
}

// Alert about the help flag for incorrect use of the lpg command
if (yargs.argv._[0] == null) {
  utils.showHelp();
  return;
}
