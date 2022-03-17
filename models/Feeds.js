const mongoose = require('mongoose');

const feedsSchema = mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
      // unique: true
    },
  },
  { timestamps: true }
);

const feeds = (module.exports = mongoose.model('feeds', feedsSchema));

module.exports.createFeed = (feed, callback) => {
  feeds.create(feed, callback);
};
module.exports.getFeedsSpecific = (name, callback) => {
  const query = {
    name: name,
  };
  feeds.find(query, callback);
};
module.exports.getFeedsAll = (callback) => {
  feeds.find({}).limit(1000).exec(callback);
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
