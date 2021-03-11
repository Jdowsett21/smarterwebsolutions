const cors = require('cors');
const cookieParser = require('cookie-parser');
const emails = require('../routes/emails');
const bodyParser = require('body-parser');
const express = require('express');
const helmet = require('helmet');
const path = require('path');
module.exports = function (app) {
  app.use(cookieParser());
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(helmet());
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/out'));
  }
  app.use('/api/emails', emails);

  if (process.env.NODE_ENV === 'production') {
    app.get('/services', (req, res) => {
      res.sendFile(
        path.resolve(__dirname, '../client', 'out', 'services.html'),
        function (err) {
          if (err) {
            res.status(500).send(err);
          }
        }
      );
    });
    app.get('/emails', (req, res) => {
      res.sendFile(
        path.resolve(__dirname, '../client', 'out', 'emails.html'),
        function (err) {
          if (err) {
            res.status(500).send(err);
          }
        }
      );
    });
    app.get('/technical', (req, res) => {
      res.sendFile(
        path.resolve(__dirname, '../client', 'out', 'technical.html'),
        function (err) {
          if (err) {
            res.status(500).send(err);
          }
        }
      );
    });
    app.get('/404', (req, res) => {
      res.sendFile(
        path.resolve(__dirname, '../client', 'out', '404.html'),
        function (err) {
          if (err) {
            res.status(500).send(err);
          }
        }
      );
    });
    app.get('/grivety', (req, res) => {
      res.sendFile(
        path.resolve(__dirname, '../client', 'out', 'grivety.html'),
        function (err) {
          if (err) {
            res.status(500).send(err);
          }
        }
      );
    });
    app.get('/mediaor', (req, res) => {
      res.sendFile(
        path.resolve(__dirname, '../client', 'out', 'mediaor.html'),
        function (err) {
          if (err) {
            res.status(500).send(err);
          }
        }
      );
    });
    app.get('/portfolio', (req, res) => {
      res.sendFile(
        path.resolve(__dirname, '../client', 'out', 'portfolio.html'),
        function (err) {
          if (err) {
            res.status(500).send(err);
          }
        }
      );
    });
    app.get('/contactSuccess', (req, res) => {
      res.sendFile(
        path.resolve(__dirname, '../client', 'out', 'contactSuccess.html'),
        function (err) {
          if (err) {
            res.status(500).send(err);
          }
        }
      );
    });
    app.get('/cleanSoils', (req, res) => {
      res.sendFile(
        path.resolve(__dirname, '../client', 'out', 'cleanSoils.html'),
        function (err) {
          if (err) {
            res.status(500).send(err);
          }
        }
      );
    });
    app.get('/contact', (req, res) => {
      res.sendFile(
        path.resolve(__dirname, '../client', 'out', 'contact.html'),
        function (err) {
          if (err) {
            res.status(500).send(err);
          }
        }
      );
    });
    app.get('/process', (req, res) => {
      res.sendFile(
        path.resolve(__dirname, '../client', 'out', 'process.html'),
        function (err) {
          if (err) {
            res.status(500).send(err);
          }
        }
      );
    });

    app.get('*', (req, res) => {
      res.sendFile(
        path.resolve(__dirname, '../client', 'out', 'index.html'),
        function (err) {
          if (err) {
            res.status(500).send(err);
          }
        }
      );
    });
  }
};
