# On Online

> Simple event emitter that tells you when you are online/offline.

## Example

``` javascript
const onOnline = require('on-online');

onOnline.on('online', () => {
	console.log(`You're online`);
});

onOnline.on('offline', () => {
	console.log(`You're offline`);
});
```

## Related

* [is-online](https://github.com/sindresorhus/is-online) - Library for checking internet access

## License
MIT © [Dušan Simić](http://dusansimic.me)
