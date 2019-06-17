const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');

const app = express();
const router = express.Router();
const port = process.env.port || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));

//  Routes

const api = require('./server/routes/api');

router.get('/api', api);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on ${port} port.`);
});

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'simpletaxiappp@gmail.com',
    pass: 'ThinkPadTaxi666'
  }
});

var mailOptions = {
  from: 'youremail@gmail.com',
  to: '15bogdan17@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'Verification, please l'
};

transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
