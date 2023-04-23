// Importing express
const Express = require('express');
// Creating the app 
const app = Express();
const port = 3000;

// GET request 
app.get('/', (req, res) => {
  res.send('Hello Jade!')
})

// POST request
app.post('/', (req, res) => {
  res.send('Received a POST request');
})

// PUT request
app.put('/user/id', (req, res) => {
	console.log(id);
  res.send('Received a PUT request at /user');
})

//Delete Request
app.delete('/user', (req, res) => {
  res.send('Received a DELETE request at /user');
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})