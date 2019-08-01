import React from "react";
import { Consumer } from "./Context";
//
export default storeList => Component => props => (
  <Consumer>{state => <Component {...props} {...inject(storeList, state)} />}</Consumer>
);
const inject = (storeGroup, storeList) => {
  let newStoreList = {};
  if (!Array.isArray(storeGroup) && typeof storeGroup === "object") {
    throw new Error("Just Using Array");
  }
  if (Array.isArray(storeGroup)) {
    for (let storeName in storeGroup) {
      newStoreList[storeName] = storeList[storeName];
    }
  } else {
    newStoreList[storeGroup] = storeList[storeGroup];
  }

  return newStoreList;
};
