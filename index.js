const express = require('express');
const PORT = process.env.port || 9000;
const cors = require('cors');
const app = express();
const { resolve } = require('path');



app.use(cors());

app.use(express.static(resolve(__dirname, "client", "dist")))

function log(msg){
    return(req, res, next) => {
        console.log(msg)
        next()
    }
    
}

app.use('/api/get-stuff*', log('hello'))

app.get('/api/get-stuff', (req, res) => {
    res.send({success: true, message: 'Here is some stuff from the backend'});
});

app.post('/api/get-user', (req, res) => {
    res.send({success:true, user: {name:'ryan ', age: 69}})
})

app.get('*', (req, res) => {
    res.sendFile(resolve(__dirname, 'client', 'dist', 'index.html'))
})

app.listen(PORT, () => {
    console.log('server is running on port: '+PORT );
});

