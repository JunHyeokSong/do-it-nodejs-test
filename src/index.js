const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/react-view/build/index.html', (err) => {
        if (err) {
            console.log(`sendFile of '/' has error: ${err}`)
            res.end(err.message)
        }
    });
});

app.use(express.static(__dirname + '/react-view/build'))

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
});