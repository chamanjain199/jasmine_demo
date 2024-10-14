module.exports = function (config) {
  config.set({
    frameworks: ["jasmine"],
    preprocessors: { "*.js": "coverage" },
    files: ["./CustomeMatcher.js", "*.js", "*.spec.js"],
    plugins: ["karma-jasmine", "karma-chrome-launcher", "karma-coverage"],
    reporters: ["dots", "coverage"],
    colors: true,
    browsers: ["Chrome"],
    coverageReporter: {
      type: "html",
      dir: "coverage/",
    },
    // singleRun: true,
  });
};
