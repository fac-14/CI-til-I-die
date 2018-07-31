const tape = require("tape");
const maths = require("./maths");

tape("check tape is working", t => {
  let expected = 2;
  t.equal(1 + 1, expected, "2 should equal 2");
  t.end();
});

tape("maths should have an add method", t => {
  t.equal(maths.hasOwnProperty("add"), true, "'add' key is present in object");
  t.equal(typeof maths.add, "function", "maths.add is a function");
  t.equal(maths.add(1, 1), 2, "1+1 = 2");
  t.equal(maths.add(10, 2), 12, "10+2 = 12");
  t.end();
});

tape("maths should have a subtract method", t => {
  t.equal(
    maths.hasOwnProperty("subtract"),
    true,
    "'subtract' key is present in object"
  );
  t.equal(typeof maths.add, "function", "maths.subtract is a function");
  t.equal(maths.subtract(2, 1), 1, "2-1 = 1");
  t.equal(maths.subtract(10, 2), 8, "10-2 = 8");
  t.end();
});

tape("maths should have a multiply method", t => {
  t.equal(
    maths.hasOwnProperty("multiply"),
    true,
    "'multiply' key is present in object"
  );
  t.equal(typeof maths.multiply, "function", "maths.multiply is a function");
  t.equal(maths.multiply(2, 2), 4, "2*2 = 4");
  t.equal(maths.multiply(10, 2), 20, "10*2 = 20");
  t.end();
});
