const express = require('express');
const path = require('path');
const app = express();


app.enable('trust proxy');

app.use (function (req, res, next) {
  if (req.secure) {
          // request was via https, so do no special handling
          next();
  } else {
          // request was via http, so redirect to https
          console.log(req.headers.host);
          res.redirect('https://' + req.headers.host + req.url);
  }
});  


app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
//... your code here ...
                                
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Portifolio Rodando na porta %s', port);
});