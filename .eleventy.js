var dateFilter = require("nunjucks-date-filter");
var readerBar = require("eleventy-plugin-reader-bar");
const striptags = require("striptags");

function extractExcerpt(article) {
  if (!article.hasOwnProperty("templateContent")) {
    console.warn(
      'Failed to extract excerpt: Document has no property "templateContent".'
    );
    return null;
  }

  let excerpt = null;
  const content = article.templateContent;

  excerpt = striptags(content)
    .substring(0, 500) // Cap at 500 characters
    .replace(/^\\s+|\\s+$|\\s+(?=\\s)/g, "")
    .trim()
    .concat("...");
  return excerpt;
}

dateFilter.setDefaultFormat("dddd, MMM D YYYY");

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("date", dateFilter);
  eleventyConfig.addFilter("excerpt", extractExcerpt);
  eleventyConfig.addPlugin(readerBar);

  return {
    dir: {
      input: "src",
      includes: "templates",
      output: "dist",
    },
  };
};
