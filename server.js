const express = require('express');
const app = express();

if(process.env.NODE_ENV === 'production'){
  //set static folder
  app.use(express.static('/dist/index.html'));
}


app.use(express.static(__dirname + '/dist'));
app.listen(process.env.PORT || 8080);
