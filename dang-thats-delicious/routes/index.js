const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const charles = { name: 'Charles', age: 100, cool: true };
  //res.send('Hey! It works!'); //* Sends the string as response
  //res.json(charles); //* Sends variable's value as response
  //res.json(req.query); //* Sends request's query in JSON as response
  //res.send(req.query.name); //* Sends parameter of request's query in JSON as response
  res.render("hello", {
    name: 'Charles',
    dog: req.query.dog,
    title: 'Food is awesome!'
  });
});

router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('');
  res.send(reverse);

});
//req: ; contains all information about original request
//res: response; contains all methods to send back data
//next (optional)

module.exports = router;
