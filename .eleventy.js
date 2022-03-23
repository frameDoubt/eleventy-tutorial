if (process.env.NODE_ENV === 'development') {
  require("dotenv").config();
}

module.exports = function(eleventyConfig) {
  eleventyConfig.deepDataMerge(true);

  return {
    dir: {
      input: "_src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["html", "njk", "11ty.js"]
  };
}