'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT;

app.use('/public', express.static(process.cwd() + '/public'));

// serves static file by default containing instructions to use this microservice
app.route('/')
  .get(function(req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
  })

// timestamp microservice
app.route('/api/timestamp/:timeVar')
  .get(function(req, res) {
    let date = req.params.timeVar;
    let options = { month: 'long', day: 'numeric', year: 'numeric'}; // options for displaying natural time
    let unixTime = null;
    let natTime = null;
    
    // first checks if a string was passed as a parameter
    if (isNaN(date)) {
      date = new Date(date);
      // then checks that a valid date was actually passed before setting time variables
      if (date.getTime() >= 0 && date.getTime() <= Date.now()) {
        natTime = date.toLocaleDateString('en-US', options);
        unixTime = date.getTime() / 1000;
      }
    }
    // otherwise checks if a number was passed as a parameter and sets time variable
    else if (date >= 0) {
      date = new Date(date * 1000);
      // then checks that a valid date was actually passed before setting time variables
      if (date.getTime() >= 0 && date.getTime() <= Date.now()) {
        natTime = date.toLocaleDateString('en-US', options);
        unixTime = date.getTime() / 1000;
      }
    }
    
    res.json({ unix: unixTime, natural: natTime });
  })

// respond not found for all invalid routes
app.use(function(req, res, next){
  res.status(404);
  res.type('txt').send('Not found');
});

// error handling for middleware
app.use(function(err, req, res, next) {
  if(err) {
    res.status(err.status || 500)
      .type('txt')
      .send(err.message || 'SERVER ERROR');
  }  
})

app.listen(port, function () {
  console.log('Node.js listening ...');
});

