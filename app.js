// Requires \\
var express = require('express');
var bodyParser = require('body-parser');


// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\
app.get('/', function(req, res){
  res.send('Hello')
});

var submissions = []
app.post('/submit', function(req, res){
//    console.log(req.body)
//    jsYes.submitVideo(req.body);
    submissions.push(req.body);
//    console.log(submissions)
    res.redirect('/')
})

app.get('/viewContest', function(req, res) {
    res.sendFile('viewContest.html', {root: './public'})
})

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})