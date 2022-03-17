var express = require('express');
var router = express.Router();
prod = require('../models/Products');
feeds = require('../models/Feeds');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/allProds', function (req, res, next) {
  // res.send('respond with a resource');
  prod.getProductsall((err, prods) => {
    if (err) {
      res.status(500).json(err);
    } else {
      // console.log(users);
      res.json(prods);
    }
  });
});

router.get('/getNames', function (req, res, next) {
  // res.send('respond with a resource');
  prod.getNamesOfProducts((err, prods) => {
    if (err) {
      res.status(500).json(err);
    } else {
      // console.log(users);
      res.json(prods);
    }
  });
});

router.get('/getGraphData', function (req, res, next) {
  // res.send('respond with a resource');
  prod.getGraphData(req.query.names, (err, prods) => {
    if (err) {
      res.status(500).json(err);
    } else {
      // console.log(users);
      res.json(prods);
    }
  });
});

router.delete('/deleteProducts', function (req, res, next) {
  // res.send('respond with a resource');
  prod.deleteProds(req.query.names, (err, prods) => {
    if (err) {
      res.status(500).json(err);
    } else {
      // console.log(users);
      res.json(prods);
    }
  });
});

router.post('/createProduct', function (req, res, next) {
  // res.send('respond with a resource');
  prod.createProduct(req.body, (err, prods) => {
    if (err) {
      res.status(500).json(err);
    } else {
      // console.log(users);
      res.json(prods);
    }
  });
});

router.post('/updatePrice', function (req, res, next) {
  // res.send('respond with a resource');
  prod.updatePrice(req.body, (err, prods) => {
    if (err) {
      res.status(500).json(err);
    } else {
      // console.log(users);
      res.json(prods);
    }
  });
});

router.get('/allFeeds', function (req, res, next) {
  // res.send('respond with a resource');
  feeds.getFeedsAll((err, feeds) => {
    if (err) {
      res.status(500).json(err);
    } else {
      // console.log(users);
      res.json(feeds);
    }
  });
});

router.post('/createFeed', function (req, res, next) {
  // res.send('respond with a resource');
  feeds.createFeed(req.body, (err, Feed) => {
    if (err) {
      res.status(500).json(err);
    } else {
      // console.log(users);
      res.json(Feed);
    }
  });
});

module.exports = router;
