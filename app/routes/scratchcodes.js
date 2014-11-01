var express = require('express');
var router = express.Router();

var Scratchcode = require('../models/scratchcode');

// middleware to use for all requests
router.use(function(req, res, next) {
	console.log('Something is happening.');
	next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	//res.send('Hello World!')
	res.json({ message: 'hooray! welcome to our api!' });	
});

router.route('/scratchcodes')

	.post(function(req, res) {
		
		var scratchcode = new Scratchcode();
		scratchcode.code = req.body.code;

		scratchcode.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'Scratchcode created!' });
		});
		
	})

	.get(function(req, res) {
		Scratchcode.find(function(err, scratchcodes) {
			if (err)
				res.send(err);

			res.json(scratchcodes);
		});
	});

router.route('/scratchcodes/:scratchcode_code')

	.get(function(req, res) {
		Scratchcode.findByCode(req.params.scratchcode_code, function(err, scratchcode) {
			if (err)
				res.send(err);

			res.json(scratchcode);
		});
	})

	.put(function(req, res) {
		Scratchcode.findByCode(req.params.scratchcode_code, function(err, scratchcode) {
			if (err)
				res.send(err);
			
			scratchcode.code = req.body.code;
			
			scratchcode.save(function(err) {
				if (err)
					res.send(err);
			
				res.json({ message: 'Scratchcode updated!' });
			});

		});
	})

	.delete(function(req, res) {
		Scratchcode.remove({
			code: req.params.scratchcode_code
		}, function(err, scratchcode) {
			if (err)
				res.send(err);

			res.json({ message: 'Successfully deleted' });
		});
	});

module.exports = router;