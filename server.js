'use strict';

const express = require('express');
const app = express();

app.use('/public', express.static(process.cwd() + '/public'));

//s erves static file by default containing instructions to use this microservice
app.route('/')
  .get(function(req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
  })

// this work for natural to unix,
// but is not working for unix to natural

// checks whether valid date and returns a json string
app.route('/api/timestamp/:timeVar')
  .get(function(req, res) {
    let date = new Date(req.params.timeVar);
    // options for local date string format
    let options = { month: 'long', day: 'numeric', year: 'numeric'};
    // converts to date to seconds since Jan 01 1970 (divide by 1000 since JS defaults to milliseconds)
    let unixTime = Date.parse(date);
    let natTime = date.toLocaleDateString('en-US', options);
    // verifies a valid date was requested  
    if (isNaN(parseInt(unixTime))) {
      unixTime = null;
      natTime = null;
    }
    res.json({ unix: unixTime, natural: natTime });
  })

// Respond not found to all the wrong routes
app.use(function(req, res, next){
  res.status(404);
  res.type('txt').send('Not found');
});

// Error Middleware
app.use(function(err, req, res, next) {
  if(err) {
    res.status(err.status || 500)
      .type('txt')
      .send(err.message || 'SERVER ERROR');
  }  
})

app.listen(process.env.PORT, function () {
  console.log('Node.js listening ...');
});

