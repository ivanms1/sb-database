const express = require('express');
const bcrypt = require('bcryptjs');

const router = express.Router();
const User = require('../models/User');

router.post('/login', (req, res) => {
	User.findOne({email: req.body.email})
	.then(user => {
		if(!user) return res.status(404).json({ msg: 'User not found' });
		console.log(user, user.password)
		bcrypt.compare(req.body.password, user.password)
		.then(isMatch => {
			if(isMatch) return res.json(user);
			return res.status(400).json({ msg: 'Invalid password' });
		})
	})
	.catch(err => res.status(400).send(err));
});

router.post('/register', (req, res) => {
	let newUser = {
		email: req.body.email,
		password: req.body.password
	}

	User.findOne({ email: newUser.email })
	.then(user => {
		console.log(user)
		if(user) return res.status(400).json({msg: 'Email already in database'});
		else {
			bcrypt.genSalt(10, (err, salt) => {
				bcrypt.hash(newUser.password, salt, (err, hash) => {
					if(err) return res.status(400).json({msg: 'Something went wrong'});
					newUser.password = hash;

					new User(newUser).save()
					.then(user => res.json(user))
					.catch(err => res.status(400).json(err))
				})
			})
		}
	})
});

module.exports = router;
