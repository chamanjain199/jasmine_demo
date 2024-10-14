describe("Calculator.js", function () {
  it("should add number to the total", function () {
    const calculator = new Calculator();
    calculator.add(5);
    expect(calculator.total).toBe(5);
  });
  it("should subtract number from the total", function () {
    const calculator = new Calculator();
    calculator.total = 5;
    calculator.subtract(1);
    expect(calculator.total).toBe(4);
  });
  it("should multiply number with the total", function () {
    const calculator = new Calculator();
    calculator.total = 6;
    calculator.multiply(2);
    expect(calculator.total).toBe(12);
  });
  it("should divide number by the total", function () {
    const calculator = new Calculator();
    calculator.total = 6;
    calculator.divide(2);
    expect(calculator.total).toBe(3);
  });

  it("Assertions", function () {
    const calculator = new Calculator();
    const calculator1 = new Calculator();

    expect(calculator).toBe(calculator1); //fail // address comparison
    expect(calculator).toEqual(calculator1); // pass // content comparison

    expect(calculator).toBeTruthy(); // pass // value shoud not be  false, undefined, null, NaN
    expect(null).toBeTruthy(); // fail
    expect(true).toBeTrue(); // pass // the actual value to be true.

    expect(calculator).toBeFalsy(); //fali // value shoud be  false, undefined, null, NaN
    expect(0).toBeFalsy(); // pass
    expect(false).toBeFalse(); // pass the actual value to be false.

    expect(calculator).not.toBe(calculator1); //pass // Invert the matcher
    expect(calculator).not.toEqual(calculator1); // fail // Invert the matcher

    var name;
    expect(name).toBeUndefined(); //pass // value should be undefined
    expect(name).toBeNull(); //fail // value should be null

    name = "Jasmine";
    expect(name).toBeDefined(); //pass // value should not be undefined

    let myArray = ["A", "B"];
    expect(myArray).toContain("A");
    expect(name).toContain("Jas");

    var va = 10 * "a";
    expect(va).toBeNaN(); // you can not compare Nan with Nan directly console.log(NaN == NaN) is false

    calculator.total = 10;
    expect(function () {
      calculator.divide(0);
    }).toThrow();

    expect(function () {
      calculator.divide(0);
    }).toThrow(new Error("Number cannot be zero")); // only passing string wont work

    expect(function () {
      calculator.divide(0);
    }).toThrowError("Number cannot be zero"); // Here we can pass error msg

    expect(function () {
      calculator.divide(0);
    }).toThrowError(Error, "Number cannot be zero"); // Here we can pass error msg

    calculator.add(10);
    expect(calculator.total).toBe(20);
    expect(calculator.total).toMatch(/-?\d+/); // can pass regex
    expect("calculator").toMatch("ator");

    expect(calculator.total).toEqual(jasmine.anything()); //value being compared is not null and not undefined.
    expect(calculator.total).toEqual(jasmine.any(Number));
    expect(calculator).toEqual(jasmine.any(Calculator)); //value being compared is not null and not undefined.

    let obj = { name: "Test", city: "indore", color: "red" };
    expect(obj).toEqual(
      jasmine.objectContaining({ city: "indore", color: "red" })
    ); // compare part of an object

    // custome matcher
    jasmine.addMatchers(CustomeMatcher);
    expect(5).toBeCalculator();
    expect(calculator).toBeCalculator();
    expect(5).not.toBeCalculator();
  });
});
