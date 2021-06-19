const fetch = require("node-fetch");
const chalk = require("chalk");

module.exports = { showHelp: showHelp, actuateValve: actuateValve };

function showHelp() {
  let error = chalk.hex("#FF8B8B")(
    'Run "lpg --help" to get information on the usage of the lpg command.'
  );

  console.log(error);
}

function actuateValve(route) {
  let url = "http://localhost:3001/serial";

  fetch(url + route)
    .then(checkStatus)
    .catch((err) => {
      let error = chalk.hex("#FF8B8B")("route broken");
      console.log(error);
    });
}

function checkStatus(response) {
  if (response.ok) {
    console.log("actuated");
  } else {
    let error = chalk.hex("#FF8B8B")("route broken");
    console.log(error);
  }
}
