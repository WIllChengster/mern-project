const express = require('express');
const PORT = process.env.port || 9000;
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/api/get-stuff', (req, res) => {
    res.send({success: true, message: 'Here is some stuff from the backend'});
});


app.get('/', (req, res) => {
    res.send('<h1> Ryan is good </h1>')
});

app.listen(PORT, () => {
    console.log('server is running on port: '+PORT );
});

