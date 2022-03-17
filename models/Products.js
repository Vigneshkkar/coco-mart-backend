const mongoose = require('mongoose');

const productsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      // unique: true
    },
    image: {
      type: String,
      required: true,
    },
    priceDetails: [
      {
        date: {
          type: Date,
        },
        price: {
          type: Number,
        },
      },
      { timestamps: true },
    ],
  },
  { timestamps: true }
);

const prod = (module.exports = mongoose.model('products', productsSchema));

module.exports.createProduct = (product, callback) => {
  prod.create(product, callback);
};
module.exports.updatePrice = (price, callback) => {
  const query = price.names;
  prod.updateMany(
    { name: { $in: query } },
    { $push: { priceDetails: price.priceDetails } },
    callback
  );
};
module.exports.getProductsSpecific = (name, callback) => {
  const query = {
    Name: name,
  };
  prod.find(query, callback);
};

module.exports.getNamesOfProducts = (callback) => {
  prod.find({}, { name: 1, _id: 0 }).exec(callback);
};
module.exports.getGraphData = (names, callback) => {
  const query = JSON.parse(names);
  prod
    .find({ name: { $in: query } }, { name: 1, priceDetails: 1, _id: 0 })
    .exec(callback);
};

module.exports.deleteProds = (names, callback) => {
  const query = JSON.parse(names);
  prod.deleteMany({ name: { $in: query } }).exec(callback);
};

module.exports.getProductsall = (callback) => {
  //   prod.find({}, callback);
  prod.aggregate(
    [
      {
        $addFields: {
          price: {
            $arrayElemAt: [
              '$priceDetails',
              {
                $indexOfArray: [
                  '$priceDetails.date',
                  { $max: '$priceDetails.date' },
                ],
              },
            ],
          },
        },
      },
      { $project: { priceDetails: 0 } },
    ],
    callback
  );
};
