function it(testLabel, expectation) {
  console.log(`Test: ${testLabel}`)
  expectation();
}

function expect(a) {
  return {
    toEqual: function(b) {
      if (a == b) {
        console.log('PASS');
      } else {
        console.log('FAIL');
        console.log(`expected ${a} to equal ${b}`);
      }
    }
  }
}
