import Accordion from "./components/Accordion";
import Search from "./components/Search";

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

const App = () => {
  return (
    <div className="ui container">
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  );
};

export default App;
