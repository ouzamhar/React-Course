import { React, useEffect, useState, useRef } from "react";

const Dropdown = ({ options, selected, onSelecetdChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    document.body.addEventListener("click", (event) => {
      //   if (ref.current.contains(event.target)) {
      //     console.log("body clicked1");
      //     return;
      //   }
      setOpen(false);
      console.log("body clicked");
    });
  }, []);
  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelecetdChange(option)}
      >
        {option.label}
      </div>
    );
  });
  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">Select a Color</label>
        <div
          onClick={(e) => {
            e.stopPropagation();
            setOpen(!open);
          }}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;

// //   useEffect(() => {
//     document.body.addEventListener(
//         "click",
//         () => {
//           setOpen(false);
//         },
//         { capture: true }
//       );
//     }, []);
