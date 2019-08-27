const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './public/dist/public')));
// require('./server/config/routes')(app);

app.listen(8000);