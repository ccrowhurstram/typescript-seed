# typescript-seed

Starter project for typescript

## Getting started

1. `npm install`
2. `npm test` - runs sample test


## Adding more tests

Add more tests by creating typescript spec files:

1. Optionally create a subfolder under the the `src/` directory
2. add a file under the `src/` directory or the subfolder you created above. Name this file to match the pattern `xxx.spec.ts`
    * EG: my-test.spec.ts

## Running and debugging tests

* `npm t` - run the tests and immediately close the browser after each test run
* `npm test:w` - run the tests in watch mode; as soon as you make any change to a test file, the tests will run
* `npm test:debug` - run the tests but do not close the browser
    * Click the "DEBUG" button in the browser launched by the tests
    * Use the chrome dev tools (press F12 in the browser) to debug the test code

## Compiling typescript

To compile the typescript files to javascript, *either*:

* In Visual Studio Code, press the shortcut keys: `CTLR+SHIFT+B`
* `npm tsc` 


## Resources

* Jasmine docs: https://jasmine.github.io/2.5/introduction
