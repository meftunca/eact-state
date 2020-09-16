# @devloops/react-state

> React Global Context State (Gzipped 1.1 KB) 💥💥💥

> Please let me know your feedback 😇

[![NPM](https://img.shields.io/npm/v/@devloops/react-state.svg)](https://www.npmjs.com/package/@devloops/react-state)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @devloops/react-state
```

## [Demo](https://meftunca.github.io/react-state/)

## Usage

```jsx
import React, { Component } from "react";
import { GStateProvider, useGState, decorate } from "@devloops/react-state";
class Store {
  increment = () => {
    ++this.value;
  };
  decrement = () => {
    --this.value;
  };

  value = 10;

  setName = name => {
    console.log("name", name);
    this.name = name;
  };

  name = "By Devloops";
}

const pointFunc = decorate(Store, {
  increment: "actionWithPerformance",
  decrement: "actionWithPerformance",
  setName: "actionWithPerformance",
  value: "observable",
  name: "observable"
});
const App = () => {
  return (
    <GStateProvider point={pointFunc}>
      <Test />
    </GStateProvider>
  );
};
const Test = useGState("point")(({ point }) => {
  return (
          <input
            className="form-control"
            placeholder="Write Your name"
            value={point.name}
            onChange={({ target }) => {
              point.setName(target.value, "asdas");
            }}
          />
          <h2>
            Score
            <small style={{ textAlign: "center" }}> {point.value}</small>
          </h2>
          <div className="btn-group d-flex ">
            <button
              className="btn btn-warning"
              onClick={() => {
                point.increment();
                //or
                point.value = point.value + 1;
              }}
            >
              increase
            </button>
            <button
              className="btn btn-dark"
              onClick={() => {
                 point.decrement();
                 //or
                 point.value = point.value - 1;
              }}
            >
              decrease
            </button>
          </div>
  )
}))

```

## License

MIT © [meftunca](https://github.com/meftunca)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
