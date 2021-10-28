# Next  
Because asynchronous calls suck out your brain without a proper async handler. This one is just 4 lines yet it solves a huge issue.

### Install
```config
	npm install nextjs
```

### How it works?
1. Create a `Next Instance`: `var next = new Next(2, finish)`
2. Then you call `next()` as many times as you specified in the `count`. In this example it is *2*.
3. After `next` was called *2 times*, the `finish` function will be called.

### Example
```javascript
	// Include
	var Next = require('nextjs');
	
	// CREATE a Next Instance
	var next = new Next(2, finish);
	
	// Log Start
	console.log('start');
	
	// Will happen after 5 seconds passed
	setTimeout(function(){ console.log('A'); next(); }, 5000); 
	
	// Will happen after 2 seconds passed
	setTimeout(function(){ console.log('B'); next(); }, 2000); 
	
	// Will happen in the end after 5 seconds passed
	function finish(){ console.log('finished'); } 
	
	// output result
	// 0 second => start
	// 2 second => B
	// 5 second => A
	// 5 second => finished
```

## Next parameters
- **count**: the number of times you will have to call the `next()` instance. `required` `integer`
- **finish**: finishing callback `required` `function`

## Key features
- It's just 4 lines - `0.16kb`
- Easy to use
- Its part of `dietjs`
