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
  const [formState, setFormState] = useState({});
  let ref = useRef(null);
  useEffect(() => {
    console.log("point :", point);
  }, []);
  const onChange = ({ target: { name, value, ...rest } }) => {
    // console.log("name,value", name, value, rest);
    // let newState = formState;
    // newState[name] = value;
    // setFormState(Object.assign({}, formState, newState));
    // console.log("formState", formState);
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
              console.log("target.value", target.value);
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
          <ul className="list-group" style={{ maxHeight: 400, overflow: "scroll" }}>
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Morbi leo risus</li>
            <li className="list-group-item">Porta ac consectetur ac</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
        <div className="col-xs-12 col-md-6">
          <br />
          <h1>Storage Test</h1>
          <br />
          <form ref={ref} onChange={onChange}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                name="a1"
                value={formState.a1}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                name="a2"
                value={formState.a2}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                name="a1[b1]"
                value={formState.a1}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect2">Example multiple select</label>
              <select name="selectable" multiple className="form-control" id="exampleFormControlSelect2">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div className="form-group form-check">
              <input type="checkbox" name="a3" value={formState.a3} className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
          <p>{JSON.stringify(formState)}</p>
        </div>
      </div>
    </div>
  );
});
export default App;
