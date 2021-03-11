const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/email', async (req, res) => {
  const smtpTrans = nodemailer.createTransport({
    host: 'smarterwebsolutions-ca.mail.protection.outlook.com',
    port: 25,
    secure: false,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOpts = {
    from: 'James | Smarter Web Solutions',
    to: req.body.email,
    subject: `${req.body.firmName} | Expert Website Review`,

    //   html: `<div class="heading-section">

    //   <img src="../client/public/img/Company.png" alt="image" class="image" />
    // </div>
    // <div class="title-section">
    // <h1 class="title-text">${req.body.firmName} | Expert Website Review</h1>
    // </div>
    // <div class="video-section">
    // <iframe width="560" height="315" src=${req.body.url} class='video frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    // </div>
    // <div class='text-section><p class='text'>
    // Hi ${req.body.firstName},

    // My name is James and I work with businesses in the GTA to improve their websites.  I came across your website and made a quick video on a couple things you could do to improve your site.

    // If you have any questions about my video feel free to contact me at here.

    // Sincerely,

    // James</p>
    // </div>`,
  };

  // Attempt to send the email
  smtpTrans.sendMail(mailOpts, (error, response) => {
    if (error) {
      console.log(
        '🚀 ~ file: emails.js ~ line 54 ~ smtpTrans.sendMail ~ error',
        error
      );

      res.send('contact-failure'); // Show a page indicating failure
    } else {
      res.send('contact-success'); // Show a page indicating success
    }
  });
});

module.exports = router;

router.post('/', async (req, res) => {
  console.log('hello');
  const smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });
  const mailOpts = {
    from: 'Your sender info here', // This is ignored by Gmail
    to: process.env.GMAIL_USER,
    subject: req.body.subject,
    text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`,
  };

  // Attempt to send the email
  smtpTrans.sendMail(mailOpts, (error, response) => {
    if (error) {
      res.send('contact-failure'); // Show a page indicating failure
    } else {
      res.send('contact-success'); // Show a page indicating success
    }
  });
});

router.post('/application', async (req, res) => {
  const smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOpts = {
    from: 'Your sender info here', // This is ignored by Gmail
    to: process.env.GMAIL_USER,
    subject: `Position: ${req.body.position} from ${req.body.name}, `,
    text: `Contact Info: ${req.body.email},
    Cover Letter: ${req.body.coverLetter}`,
    // attachments: req.body.files,
  };

  // Attempt to send the email
  smtpTrans.sendMail(mailOpts, (error, response) => {
    if (error) {
      res.send('contact-failure'); // Show a page indicating failure
    } else {
      res.send('contact-success'); // Show a page indicating success
    }
  });
});

module.exports = router;
