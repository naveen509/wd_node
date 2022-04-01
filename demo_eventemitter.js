var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('Event handler fired');
}

//Assign the eventhandler to an event:
eventEmitter.on('hd', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('hd');