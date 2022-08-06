const mongoose = require('mongoose');
const chalk = require('chalk');

const dbUrl = process.env.MONGO_URL;

module.exports = () => {
  try {
    mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

    mongoose.connection.on('connected', () => {
      console.log(chalk.bold.green(`connected to mongoDB ${dbUrl}`));
    });

    // mongoose.set('debug', true);

    mongoose.connection.on('error', (err) => {
      console.log(chalk.bold.red(`MongoDB has occured ${err}`));
    });

    mongoose.connection.on('disconnected', () => {
      console.log('MongoDB disconnected');
    });

    process.on('SIGINT', () => {
      mongoose.connection.close(() => {
        console.log('MongoDB is disconnected due to application termination');
        process.exit(0);
      });
    });
  } catch (err) {
    console.error(err);
  }
};
