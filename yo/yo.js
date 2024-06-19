const express = require('express');

const app = express();

app.use(express.json());

app.get('/yo', (req,res) => {
    res.status(200).send({ message: 'Yo'});
})
 const server = app.listen(3000, () => {
    console.log('Listening at port 3000');
 })
 server.on('error', console.error);

