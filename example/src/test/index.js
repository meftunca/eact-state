import React from "react";
import { useGState } from "@devloops/react-state";

const App = ({ point }) => {
  console.log("point", new point());
  return (
    <div className="container">
      <br />
      <h1>By Meftunca</h1>
      <br />
      <h3>{point.name}</h3>

      <input
        className="form-control"
        placeholder="Write Your name"
        value={point.name}
        onChange={({ target }) => {
          point.setName(target.value);
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
            console.log("point", point);
            // point.increment();
            // point.value = 2;
            // point.setState();
          }}
        >
          increase
        </button>
        <button
          className="btn btn-dark"
          onClick={() => {
            point.decrement();
          }}
        >
          decrease
        </button>
      </div>
    </div>
  );
};
export default useGState(App);
