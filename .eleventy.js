var dateFilter = require("nunjucks-date-filter");
var readerBar = require("eleventy-plugin-reader-bar");

dateFilter.setDefaultFormat("dddd, MMM D YYYY");

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("date", dateFilter);
  eleventyConfig.addPlugin(readerBar);

  return {
    dir: {
      input: "src",
      includes: "templates",
      output: "dist",
    },
  };
};
