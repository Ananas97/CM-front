const express = require('express');
const app = express();
const router = express.Router();
app.use('/*', router);
const path = require('path');

if(process.env.NODE_ENV === 'production'){
  app.use(express.static(__dirname + '/dist'));
}

app.use(express.static(__dirname + '/dist'));
app.listen(process.env.PORT || 8080);

//routing
// router.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname + '/dist/index.html'));
// });

console.log("it works!");
