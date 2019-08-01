import { decorate } from "@devloops/react-state";
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

const GStore = decorate(Store, {
  increment: "actionWithPerformance",
  decrement: "actionWithPerformance",
  setName: "actionWithPerformance",
  value: "observable",
  name: "observable"
});
export default GStore;
