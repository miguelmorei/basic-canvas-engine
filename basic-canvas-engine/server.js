/**
 * Created by mmoreira on 06/08/15.
 */
var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
/*----------------------*/
/****  SERVER CONFIG  ***/
/*----------------------*/



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended : true
}));

// parse application/json
app.use(bodyParser.json())


app.use(express.static(__dirname + '/'));


app.get('/locations/', function(req, res){
    res.sendFile(__dirname + '/locations.html');
});

app.get('/*/', function(req, res){
    res.sendFile(__dirname + '/results-page.html');
});


http.listen(8080, function () {

    console.log('Listening on port 8080');

});

/*----------------------*/
/*----------------------*/









