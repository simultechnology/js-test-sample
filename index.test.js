let fizzBuzz = require('./index');

describe("convert number to string", () => {
  test("when 1 is passed, string '1' will be returned.", () => {
    expect(fizzBuzz(1)).toBe('1');
  });

  test("when 2 is passed, string '2' will be returned.", () => {
    expect(fizzBuzz(2)).toBe('2');
  });
})

describe("when A multiple of 3 is passed, string 'Fizz' will be returned.", () => {
  test("when 3 is passed, string 'Fizz' will be returned.", () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });
});

describe("when A multiple of 5 is passed, string 'Buzz' will be returned.", () => {
  test("when 5 is passed, string 'Buzz' will be returned.", () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });
});

describe("when A multiple of 3 and 5 is passed, string 'FizzBuzz' will be returned.", () => {
  test("when 15 is passed, string 'FizzBuzz' will be returned.", () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });
});