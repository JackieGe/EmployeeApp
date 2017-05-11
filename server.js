/**
 * Created by jackie on 11/05/2017.
 */
const express = require('express');
const app = express();

app.use(express.static('dist'));
const server = app.listen(8081, function () {

    let host = server.address().address
    let port = server.address().port

    console.log("Please access http://%s:%s", host, port)

})