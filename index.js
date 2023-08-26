// function receivesAFunction(callback);

const receivesAFunction = (callback) => callback();
const returnsANamedFunction = () => {
  return function namedFunction() {
    return "Named function";
  };
};

const returnsAnAnonymousFunction = () => () => "Anonymous function";
