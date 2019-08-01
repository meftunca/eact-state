const ghpages = require("gh-pages");
ghpages.publish(
  "example/build",
  {
    dest: "docs",
    branch: "master",
    repo: "https://github.com/meftunca/react-state.git"
  },
  err => {
    console.log("err :", err);
  }
);
