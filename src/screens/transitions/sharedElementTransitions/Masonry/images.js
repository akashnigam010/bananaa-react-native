const images = [
  require('../../../../../img/masonry/Cfw87359UT.png'),
  require('../../../../../img/masonry/a848dHxA4e.png'),
  require('../../../../../img/masonry/AdGXmD1CH6.png'),
  require('../../../../../img/masonry/5Gi8kova3k.png'),
  require('../../../../../img/masonry/ri90ueind7.png'),
  require('../../../../../img/masonry/kVN0FryOZk.png'),
  require('../../../../../img/masonry/v8KLi2f0Tr.png'),
  require('../../../../../img/masonry/xU42hx19BB.png'),
  require('../../../../../img/masonry/61mpAVRV73.png'),
  require('../../../../../img/masonry/pqgylg80SD.png'),
  require('../../../../../img/masonry/37r6Cqp1B8.png'),
  require('../../../../../img/masonry/N30E32431C.png'),
  require('../../../../../img/masonry/rVOcz7rd0z.png'),
  require('../../../../../img/masonry/A4g0lZ33Z8.png'),
  require('../../../../../img/masonry/j51Pva1P8L.png'),
  require('../../../../../img/masonry/158xD4xbeh.png'),
];

function randomImage() {
  return images[Math.floor(Math.random() * images.length)];
}

export default [
  {
    key: 1,
    images: [[{
      weight: 2,
      source: randomImage(),
    }, {
      weight: 1,
      source: randomImage(),
    }, {
      weight: 3,
      source: randomImage(),
    }], [{
      weight: 1,
      source: randomImage(),
    }, {
      weight: 3,
      source: randomImage(),
    }, {
      weight: 1,
      source: randomImage(),
    }, {
      weight: 1,
      source: randomImage(),
    }]],
  },
  {
    key: 2,
    images: [[{
      weight: 1,
      source: randomImage(),
    }, {
      weight: 1,
      source: randomImage(),
    }, {
      weight: 1,
      source: randomImage(),
    }, {
      weight: 3,
      source: randomImage(),
    }], [{
      weight: 3,
      source: randomImage(),
    }, {
      weight: 3,
      source: randomImage(),
    }]],
  },
  {
    key: 3,
    images: [[{
      weight: 1,
      source: randomImage(),
    }, {
      weight: 2,
      source: randomImage(),
    }, {
      weight: 1,
      source: randomImage(),
    }, {
      weight: 2,
      source: randomImage(),
    }], [{
      weight: 2,
      source: randomImage(),
    }, {
      weight: 1,
      source: randomImage(),
    }, {
      weight: 2,
      source: randomImage(),
    }, {
      weight: 1,
      source: randomImage(),
    }]],
  }
];
