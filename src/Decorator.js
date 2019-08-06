const action = (target, key, descriptor) => {
  let fn = descriptor.value;

  return {
    enumerable: false,
    configurable: false,
    value: function() {
      fn(...arguments);
      this.setState();
    }
  };
};
const actionWithPerformance = (target, key, descriptor) => {
  let fn = descriptor.value;

  return {
    enumerable: false,
    configurable: false,
    value: function() {
      let t0 = performance.now();
      fn(...arguments);
      this.setState();
      let t1 = performance.now();
      console.log("Call to doSomething took " + (t1 - t0).toFixed(3) + " milliseconds.");
    }
  };
};

const readOnly = (target, name, descriptor) => {
  descriptor.writable = false;
  return descriptor;
};
const observable = (target, name, descriptor) => {
  let fn = descriptor.value;
  // descriptor.writable = true;
  descriptor = {};
  descriptor.configurable = true;
  descriptor.enumerable = true;
  descriptor.get = function() {
    return fn;
  };
  descriptor.set = function(newValue) {
    fn = newValue;
    this.setState();
  };

  return descriptor;
};

const log = (target, name, descriptor) => {
  const original = descriptor.value;
  if (typeof original === "function") {
    descriptor.value = function(...args) {
      try {
        const result = original.apply(this, args);
        console.log(`Result: ${result}`);
        return result;
      } catch (e) {
        console.log(`Error: ${e}`);
        throw e;
      }
    };
  }
  return descriptor;
};
const decoratorList = {
  action,
  actionWithPerformance,
  readOnly,
  observable,
  log
};
export default (thing, decorators) => {
  let obj = typeof thing === "function" ? new thing() : thing;
  for (let prop in decorators) {
    let propertyDecorators = decoratorList[decorators[prop]];
    if (!Array.isArray(propertyDecorators)) {
      propertyDecorators = [propertyDecorators];
    }
    const descriptor = Object.getOwnPropertyDescriptor(obj, prop);
    const newDescriptor = propertyDecorators.reduce(
      (accDescriptor, decorator) => decorator(obj[prop], prop, accDescriptor),
      descriptor
    );
    if (newDescriptor) Object.defineProperty(obj, prop, newDescriptor);
  }
  return obj;
};
