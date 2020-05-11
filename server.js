const express = require('express');
const app = express();

if(process.env.NODE_ENV === 'production'){
  //set static folder
  app.use(express.static('/dist/web-app/index.html'));
}


app.use(express.static(__dirname + '/dist/we-app'));
app.listen(process.env.PORT || 8080);
