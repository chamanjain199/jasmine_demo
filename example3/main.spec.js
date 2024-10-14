describe("main.js", function () {
  describe("main()", function () {
    it("validate expression if first number is invalid", function () {
      spyOn(window, "updateResult");
      calculate("a+3");
      expect(window.updateResult).toHaveBeenCalled();
      expect(window.updateResult).toHaveBeenCalledWith(
        "Expression not recognized"
      );
      expect(window.updateResult).toHaveBeenCalledTimes(1);
    });
    it("validate expression if second number is invalid", function () {
      spyOn(window, "updateResult");
      calculate("3+b");
      expect(window.updateResult).toHaveBeenCalled();
      expect(window.updateResult).toHaveBeenCalledWith(
        "Expression not recognized"
      );
      expect(window.updateResult).toHaveBeenCalledTimes(1);
    });
    it("validate expression if operation is invalid", function () {
      spyOn(window, "updateResult");
      calculate("a_3");
      expect(window.updateResult).toHaveBeenCalled();
      expect(window.updateResult).toHaveBeenCalledWith(
        "Expression not recognized"
      );
      expect(window.updateResult).toHaveBeenCalledTimes(1);
    });
    it("Calls add", function () {
      spyOn(Calculator.prototype, "add");
      calculate("3 + 2");
      expect(Calculator.prototype.add).toHaveBeenCalled();
      expect(Calculator.prototype.add).toHaveBeenCalledWith(3);
      expect(Calculator.prototype.add).toHaveBeenCalledWith(2);
      expect(Calculator.prototype.add).toHaveBeenCalledTimes(2);
    });
    it("Calls subtract", function () {
      spyOn(Calculator.prototype, "add");
      spyOn(Calculator.prototype, "subtract");
      calculate("3 - 2");
      expect(Calculator.prototype.add).toHaveBeenCalled();
      expect(Calculator.prototype.subtract).toHaveBeenCalled();
      expect(Calculator.prototype.add).toHaveBeenCalledWith(3);
      expect(Calculator.prototype.subtract).toHaveBeenCalledWith(2);
      expect(Calculator.prototype.subtract).not.toHaveBeenCalledTimes(3);
    });
    it("Calls multiply", function () {
      spyOn(Calculator.prototype, "add");
      spyOn(Calculator.prototype, "multiply");
      calculate("3 * 2");
      expect(Calculator.prototype.add).toHaveBeenCalled();
      expect(Calculator.prototype.multiply).toHaveBeenCalled();
      expect(Calculator.prototype.add).toHaveBeenCalledWith(3);
      expect(Calculator.prototype.multiply).toHaveBeenCalledWith(2);
      expect(Calculator.prototype.multiply).not.toHaveBeenCalledTimes(3);
    });
    it("Calls divide", function () {
      spyOn(Calculator.prototype, "add");
      spyOn(Calculator.prototype, "divide");
      calculate("3 / 2");
      expect(Calculator.prototype.add).toHaveBeenCalled();
      expect(Calculator.prototype.divide).toHaveBeenCalled();
      expect(Calculator.prototype.add).toHaveBeenCalledWith(3);
      expect(Calculator.prototype.divide).toHaveBeenCalledWith(2);
      expect(Calculator.prototype.divide).not.toHaveBeenCalledTimes(3);
    });
    it("calls updateResult (example for callThrough)", function () {
      spyOn(window, "updateResult");
      spyOn(Calculator.prototype, "multiply").and.callThrough();

      calculate("3*3");
      expect(window.updateResult).toHaveBeenCalled();
      expect(Calculator.prototype.multiply).toHaveBeenCalled();
      expect(window.updateResult).toHaveBeenCalledWith(9);
    });
    it("calls updateResult (example for callFake)", function () {
      spyOn(window, "updateResult");
      spyOn(Calculator.prototype, "multiply").and.callFake(function () {
        return "Fake call";
      });

      calculate("3*3");
      expect(window.updateResult).toHaveBeenCalled();
      expect(window.updateResult).toHaveBeenCalledWith("Fake call");
      expect(Calculator.prototype.multiply).toHaveBeenCalled();
    });
    it("calls updateResult (example for returnValue)", function () {
      spyOn(window, "updateResult");
      spyOn(Calculator.prototype, "multiply").and.returnValue("Return a value");

      calculate("3*3");
      expect(window.updateResult).toHaveBeenCalled();
      expect(window.updateResult).toHaveBeenCalledWith("Return a value");
      expect(Calculator.prototype.multiply).toHaveBeenCalled();
    });
    it("calls updateResult (example for returnValues)", function () {
      spyOn(window, "updateResult");
      spyOn(Calculator.prototype, "add").and.returnValues(null, "second call");

      calculate("3+3");
      expect(window.updateResult).toHaveBeenCalled();
      expect(window.updateResult).toHaveBeenCalledWith("second call");
      expect(Calculator.prototype.add).toHaveBeenCalled();
    });
    it("calls updateResult (example for throwError)", function () {
      spyOn(Calculator.prototype, "multiply").and.throwError("some error");
      expect(function () {
        calculate("3*3");
      }).toThrowError("some error");
    });
  });
  describe("updateResult", function () {
    let outEle;
    beforeAll(function () {
      outEle = document.createElement("div");
      outEle.setAttribute("id", "calculateOutput");
      document.body.appendChild(outEle);
    });

    afterAll(function () {
      let ele = document.getElementById("calculateOutput");
      document.body.removeChild(ele);
    });
    it("Add result to DOM element", function () {
      updateResult("5");
      expect(outEle.innerText).toBe("5");
    });
  });

  describe("showVersion()", function () {
    describe("showVersion 2", function () {
      it("Show calculator version 2", function (done) {
        spyOn(window, "fetch").and.returnValue(
          Promise.resolve(new Response('{"version":"0.1"}'))
        );
        // done callback
        let calculator = new Calculator();
        calculator.version.then(function (version) {
          expect(version).toBe(version);
          done();
        });
      });
    });

    describe("showVersion 2", function () {
      it("Show calculator version 2", async function () {
        spyOn(window, "fetch").and.returnValue(
          Promise.resolve(new Response('{"version":"0.1"}'))
        );
        // async await
        let calculator = new Calculator();
        let version = await calculator.version;
        expect(version).toBe(version);
      });
    });

    it("should call the showversion method", function (done) {
      const element = spyOn(document, "getElementById").and.returnValue({
        innerText: null,
      });
      const spy = spyOnProperty(
        Calculator.prototype,
        "version",
        "get"
      ).and.returnValue(Promise.resolve("0.9"));

      showVersion();
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledTimes(1);
      spy().then(function (version) {
        expect(element().innerText).toBe(version);
        done();
      });
    });
    it("should call the showversion method async", async function () {
      const element = spyOn(document, "getElementById").and.returnValue({
        innerText: null,
      });
      const spy = spyOnProperty(
        Calculator.prototype,
        "version",
        "get"
      ).and.returnValue(Promise.resolve("0.9"));

      showVersion();
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledTimes(1);
      let version = await spy();
      expect(element().innerText).toBe(version);
    });
  });
});
