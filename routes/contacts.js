const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.get('/', (req, res) => {
	Contact.find({})
	.then(users => {
		res.json(users);
	})
	.catch(err => res.status(400).json(err));
});

router.post('/', (req, res) => {
	let contact = {
		name: req.body.name,
		email: req.body.email,
		phone: req.body.phone,
		address: req.body.address,
		muban: req.body.muban,
		tambon: req.body.tambon,
		organization: req.body.organization
	}
	
	new Contact(contact).save()
		.then(contact => res.json(contact))
		.catch(err => res.status(400).send(err));

});

router.get('/:contactId', (req, res) => {
	Contact.findById(req.params.contactId)
	.then(contact => {
		if(!contact) return res.status(404).json({msg: "Contact not found"});

		res.json(contact);
	})
	.catch(err => res.status(400).json(err));
});

router.put('/:contactId', (req, res) => {
	let update = {}
	console.log(req.body);
	if(req.body.name !== undefined) update.name = req.body.name;
	if(req.body.email !== undefined) update.email = req.body.email;
	if(req.body.phone !== undefined) update.phone = req.body.phone;
	if(req.body.address !== undefined) update.address = req.body.address;
	if(req.body.muban !== undefined) update.muban = req.body.muban;
	if(req.body.tambon !== undefined) update.tambon = req.body.tambon;
	if(req.body.organization !== undefined) update.organization = req.body.organization;
	console.log(update);

	Contact.findByIdAndUpdate(req.params.contactId, { $set: update }, { new: true })
	.then(contact => {
		console.log(contact)
		if(!contact) return res.status(404).json({msg: 'Contact not found' });
		res.json(contact);
	})
	.catch(err => res.json(400).json(err));
});

router.delete('/:contactId', (req, res) => {
	Contact.findByIdAndRemove(req.params.contactId)
	.then(contact => {
		if(!contact) return res.status(404).json({ msg: "Contact not found" });
		res.json(contact);
	})
	.catch(err => res.status(400).json(err));
});

module.exports = router;