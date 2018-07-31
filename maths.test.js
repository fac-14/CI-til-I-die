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
