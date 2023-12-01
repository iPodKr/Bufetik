const express = require('express');
const path = require('path')

const app = express();

const PORT = 3000;

app.use('/', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    try {
        res.send('hello')

    } catch (error) {
        res.statusCode(400)
    }
})


app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))