const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5002;
const feedback = require('./Routes/feedback.router.js')


/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));
//const feedback = require('./Routes/feedback.router')

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/feedback', feedback);

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});