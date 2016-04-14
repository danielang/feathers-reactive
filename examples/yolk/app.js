const feathers = require('feathers');
const memory = require('feathers-memory');
const socketio = require('feathers-socketio');
const rest = require('feathers-rest');

const app = feathers()
  .configure(socketio())
  .configure(rest())
  .use(feathers.static(__dirname))
  .use('/messages', memory());

app.listen(3030);
