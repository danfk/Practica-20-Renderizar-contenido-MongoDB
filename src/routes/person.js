const express = require ('express');
const router = express.Router();
const mongoose = require('mongoose');
let Person = require ('../models/person.js');

router.get('/gente', async (req, res) => {
    const Persons = await Person.find({});
    res.render( Persons);
});

module.exports = router;