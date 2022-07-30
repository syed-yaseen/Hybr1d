const express = require('express');
const cors = require('cors');
const authRouter = require('../routes/auth.router');
const buyerRouter = require('../routes/buyer.router');
const sellerRouter = require('../routes/seller.router');


module.exports = function (app) {

  app.use(express.json({ limit: '50mb' }));
  app.use(express.urlencoded({ extended: true, limit: '50mb' }));

  app.get('', (req, res) => {
    res.send('welcome to Syed Yaseen\'s project');
  });
    
    app.use('/api/auth', authRouter);
    app.use('/api/buyer', buyerRouter);
    app.use('/api/seller', sellerRouter);
};
