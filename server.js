const mongoose = require('mongoose');
const app = require('express')();
// const cors = require('cors');
const bodyParser = require('body-parser');
const allroutes = require('./routes/routes');
const config = require('./config/config');

function connect() {
  mongoose.Promise = global.Promise;
  const options = {
    //useMongoClient: true,
    server: {
      socketOptions: {
        keepAlive: 1,
      },
    }
  };
  //return mongoose.connect(config.mongodb.url, { useMongoClient: true }).connection;
  return mongoose.connect(config.mongodb.url, options).connection;
}

function listen() {
  app.listen(config.port);
  console.log(`started on port: ${config.port}`);
}
const connection = connect();
// app.use(cors());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', allroutes);

connection
  .on('error', console.log)
  .once('open', listen);

// listen();
