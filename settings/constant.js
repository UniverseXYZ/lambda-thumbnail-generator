module.exports = {
  bucket: {
    origin: "original-bucket",
    thumbnail: "thumbnailed-destination",
  },
  images: {
    dir: "images",
    extensions: [".jpg", ".jpeg", ".png"],
  },
  moment: {
    dir: "moment",
    extensions: [".gif"],
  },
  videos: {
    dir: "videos",
  },
  breakpoints: {
    sm: 640,
    md: 1240,
    lg: 1920,
  },
};
