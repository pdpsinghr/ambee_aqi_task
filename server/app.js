const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./db');
const result = require('./aqiCalculation/index')
const rateLimit = require("express-rate-limit");
var cors = require('cors');
app.use(cors());
const users = require('./routes/user');
const threads = require('./routes/thread')
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 100
});
app.use(limiter);
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);
var db = mongoose.connection;
db.on('error', function (error) {
    if (error.message && error.message.match(/failed to connect to server .* on first connect/)) {
        setTimeout(function () {
            mongoose.connect(config.DB, {useNewUrlParser: true}).catch(() => {

            })
        }, 1000)
    } else {
        console.error(new Date(), String(error));
    }
})
// result.AQICalculator.getAQIResult("PM10", 125).then((result) => {
//     console.log('result here', result);
//   }).catch(err => {
//     console.log(err);
//   })


app.use(passport.initialize());
require('./passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/users', users);
app.use('/api/threads', threads);
// app.post('/createThreads', function (req, res) {
//   res.send(req.body)
// })
app.get('/', function(req, res) {
    res.send('hello');
});

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        console.log(`Server is running on PORT ${PORT}`);
    });
}