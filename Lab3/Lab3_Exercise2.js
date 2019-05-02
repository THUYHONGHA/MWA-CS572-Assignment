var EvenEmitter = require('events');

class Gym extends EvenEmitter{
    constructor(){
        super();
        setInterval(()=> this.emit('boom'), 1000);
    }
    boom(){
        this.emit('boom');
    }
}

var gym = new Gym();
gym.on('boom', () => console.log('Athlete is working out'));
gym.boom();