// // 1- import the React and ReactDOM libraries

// // library that defines what a component is and how multiple components work together
// import React from "react";
// // libaray that knows how to get a component to show up in the browser
// import ReactDOM from "react-dom/client";
// // 2- get a reference to the div with id root
// const el = document.getElementById("root");
// // 3- tell react to take control of that element
// const root = ReactDOM.createRoot(el);
// // 4- create a component
// function App() {
//   return <h1>Hi there!</h1>;
// }
// // 5- show the component on the screen
// root.render(<App />);

// import React from "react";
// import ReactDOM from "react-dom/client";

// const el = document.getElementById("root");
// const root = ReactDOM.createRoot(el);

// function App() {
//   return <h1>Hi there!</h1>;
// }

// root.render(<App />);

import React from "react";
import ReactDOM from "react-dom/client";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

function App() {
  return (
    <div class="wrapper">
      <textarea
        readOnly
        maxLength={3}
        spellCheck
        style={{ backgroundColor: "gray" }}
      />
    </div>
  );
}

root.render(<App />);

// Converting HTML TO JSX
// 1- All props names follow camelCase
// 2- Number attributes use curly braces
// 3- 'true' can be written with just the property name. 'False' should be written with curly braces
// 4- The 'class' attribute is written as 'className'
// 5- In-line styles are provided as objects : style={{}}
