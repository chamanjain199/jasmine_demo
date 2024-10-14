(() => {
  function t() {
    this.total = 0;
  }
  (t.prototype.add = function (t) {
    return (this.total += t);
  }),
    (t.prototype.subtract = function (t) {
      return (this.total -= t);
    }),
    (t.prototype.divide = function (t) {
      if (0 == t) throw new Error("Number cannot be zero");
      return (this.total /= t);
    }),
    (t.prototype.multiply = function (t) {
      return (this.total *= t);
    }),
    Object.defineProperty(t.prototype, "version", {
      get: function () {
        return fetch(
          "https://gist.githubusercontent.com/leelanarasimha/4b3dde448c828ec54f29fcc727c680df/raw/096bb0f055877c5f8e7243518be7be03772d2c4a/version.json"
        )
          .then(function (t) {
            return t.json();
          })
          .then(function (t) {
            return t.version;
          });
      },
      configurable: !0,
      enumerable: !0,
    });
})(),
  (() => {
    function t(t) {
      let e = document.getElementById("calculateOutput");
      e && (e.innerText = t);
    }
    document.getElementById("calculateBtn") &&
      document
        .getElementById("calculateBtn")
        .addEventListener("click", function () {
          !(function (e) {
            let n = /[+\-*/]/,
              c = e.split(n),
              o = e.match(n),
              r = +c[0],
              i = +c[1];
            if (null == o || isNaN(r) || isNaN(i))
              return void t("Expression not recognized");
            t("");
            let u = o[0];
            const a = new Calculator();
            let l;
            switch ((a.add(r), u)) {
              case "+":
                l = a.add(i);
                break;
              case "-":
                l = a.subtract(i);
                break;
              case "*":
                l = a.multiply(i);
                break;
              case "/":
                l = a.divide(i);
            }
            t(l);
          })(document.getElementById("calculateInput").value);
        });
  })();
