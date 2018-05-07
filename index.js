const isOnline = require('is-online');
const EventEmitter = require('events');

class OnOnline extends EventEmitter {
	constructor() {
		super();

		let state = true;

		setInterval(() => {
			isOnline().then(online => {
				if (state !== online) {
					this.emit(online ? 'online' : 'offline');
					state = online;
				}
			});
		}, 5000);
	}
}

module.exports = new OnOnline();
