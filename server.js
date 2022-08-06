const express = require('express');

const app = express();
const chalk = require('chalk');

require('dotenv').config();

// adding the start up routes
require('./startup/routes')(app);
require('./service/database.service')();

// initializing the port number to a variable from environment variables
const port = process.env.APP_PORT;

// const port = 3000;

// running the app on the port
app.listen(port, () => {
  console.log(chalk.bold.green(`Listening on port ${port} . . .`));
});
