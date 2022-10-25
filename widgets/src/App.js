import { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  {
    title: "What is React?",
    content: "React is a free and open-source front-end JavaScript library.",
  },
  {
    title: "Why uses React?",
    content: "React is a favorite JS library among developers",
  },
  {
    title: "How do you useReact?",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: "The color red ",
    value: "red",
  },
  {
    label: "The color blue ",
    value: "blue",
  },
  {
    label: "The color green ",
    value: "green",
  },
];

// User clicks on 'List'
// 1- Chnage the URL but don't do a full page refresh
// 2- Each Route could detect the URL has changed
// 3- Route could update piece of state tracking the current pathname
// 4- Each Route reenders, showing/hiding components appropiately

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className=" ui container">
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>

      <Route path="/dropdown">
        <Dropdown
          label="select a color"
          options={options}
          selected={selected}
          onSelecetdChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
export default App;
