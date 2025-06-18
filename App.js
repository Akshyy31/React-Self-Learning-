let heading = React.createElement(
  "h1",
  { id: "heading", abc: "abc" },
  React.createElement(
    "div",
    { id: "second" },

    [
      React.createElement("h1", { id: "h1" }, " Namaste React"),
      React.createElement("h2", { id: "h2" }, "Hello"),
    ]
  )
);

let root = ReactDOM.createRoot(document.getElementById("main"));

console.log(root);

root.render(heading);
