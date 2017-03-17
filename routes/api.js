const express = require('express');
const router = express.Router();


//get
router.get('/ninjas', function (req, res) {
    res.send({ type: 'GET'});
});

//add
router.post('/ninjas', function (req, res) {
    console.log(req.body);
    res.send({ type: 'POST',
               name: req.body.name,
               rank: req.body.rank 
});
});

//update
router.put('/ninjas/:id', function (req, res) {
    res.send({ type: 'PUT'});
});

//delte
router.delete('/ninjas/:id', function (req, res) {
    res.send({ type: 'DELETE'});
});

module.exports = router;