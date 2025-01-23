import React from "react";
import ReactDOM from "react-dom/client";

// const element = React.createElement(
//   "h1",
//   {
//     id: "first",
//     className: "Ajit",
//     style: { fontSize: "45px", color: "pink", backgroundColor: "green" },
//   },
//   "Hello coder army"
// );
// const element2 = React.createElement(
//   "h2",
//   {
//     id: "second",
//     className: "Rai",
//     style: { fontSize: "40px", color: "orange", backgroundColor: "black" },
//   },
//   "Hello ji kaise ho aap"
// );
// const div1 = React.createElement("div", {}, [element,element2]);

const names = "Ajit"
const obj = {
  age:60,
  sallary: "25lakh"

}

const newElement = (
  <>
    <h1 id="first" className="ajit">Hello coder army {names}</h1>
    <h2 id="second" className="rai">Mazza aaya mujhe {obj.age} </h2>
  </>
);
const roots = ReactDOM.createRoot(document.getElementById("root"));

roots.render(newElement);
