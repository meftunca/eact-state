import React, { useEffect, useRef, useState } from "react";
import pointFunc from "./store/pointFunc";
import { GStateProvider, useGState } from "@devloops/react-state";

const App = () => {
  return (
    <GStateProvider point={pointFunc}>
      <Test />
    </GStateProvider>
  );
};

const Test = useGState("point")(({ point }) => {
  let ref = useRef(null);
  useEffect(() => {
    console.log("point :", point);
  }, []);
  const onChange = ({ target: { name, value } }) => {
    point.formState[name] = value;
    point.setState();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <br />
          <h1>State Test</h1>
          <br />
          <h3>{point.name}</h3>

          <input
            className="form-control"
            placeholder="Write Your name"
            value={point.name}
            onChange={({ target }) => {
              point.setName(target.value, "asdas");
            }}
          />
          <br />
          <br />
          <h2>
            Score
            <small style={{ textAlign: "center" }}> {point.value}</small>
          </h2>
          <div className="btn-group d-flex ">
            <button
              className="btn btn-warning"
              onClick={() => {
                point.increment();
                // console.log("point.increment", point.value);
              }}
            >
              increase
            </button>
            <button
              className="btn btn-dark"
              onClick={() => {
                // point.decrement();
                point.value = point.value - 1;
                // console.log("point.increment", point.value);
              }}
            >
              decrease
            </button>
          </div>
        </div>
        <div className="col-xs-12 col-md-6">
          <br />
          <h1>Storage Test</h1>
          <br />
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              name="email"
              value={point.formState.email}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={onChange}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              name="password"
              value={point.formState.password}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect2">Example multiple select</label>
            <select name="selectable" className="form-control" id="exampleFormControlSelect2" onChange={onChange}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>

          <button type="button" className="btn btn-primary">
            Submit
          </button>
          <p>{JSON.stringify(point.formState, null, "\t")}</p>
        </div>
      </div>
    </div>
  );
});
export default App;
