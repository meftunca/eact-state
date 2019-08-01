import React, { Component } from "react";
import { Provider } from "./Context";

class GStateProvider extends Component {
  constructor(props) {
    super(props);
    let { children, ...rest } = this.props;
    this.state = getStore(rest);
  }
  componentDidMount() {
    let { children, ...rest } = this.props;
    const store = getStore(rest);
    getTrigger(store, this.setGState);
  }
  setGState = () => {
    let { children, ...rest } = this.props;
    const store = getStore(rest);
    this.setState({ ...store });
  };
  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

const getStore = newProps => createObject(Object.entries(newProps));
const createObject = array => {
  let obj = {};
  array.map(i => (obj[i[0]] = i[1]));
  return obj;
};
const getTrigger = (store, trigger) => {
  Object.values(store).map(i =>
    Object.defineProperty(i, "setState", {
      value: trigger,
      enumerable: false,
      writable: false,
      configurable: false
    })
  );
};
export default GStateProvider;
