const CustomeMatcher = {
  toBeCalculator: function () {
    return {
      compare: function (actual, expected) {
        let result = {
          pass: false,
          message: "",
        };
        if (actual instanceof Calculator) {
          result.pass = true;
        } else {
          result.pass = false;
          result.message = actual + " is not an instance of Calculator";
        }
        return result;
      },
    };
  },
};
