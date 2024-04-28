const code = require("./code.js");
const assert = require("assert");

assert.strictEqual(code.tailFib(-1), 0);
assert.strictEqual(code.tailFib(0), 0);
assert.strictEqual(code.tailFib(1), 1);
assert.strictEqual(code.tailFib(2), 1);
assert.strictEqual(code.tailFib(3), 2);
assert.strictEqual(code.tailFib(4), 3);
assert.strictEqual(code.tailFib(5), 5);
assert.strictEqual(code.tailFib(6), 8);
assert.strictEqual(code.tailFib(10), 55);
assert.strictEqual(code.tailFib(50), 12586269025);
assert.strictEqual(code.tailFib(100), 354224848179262000000);

