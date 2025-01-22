const element = React.createElement("h1", {id:"first", className: "rahul", style:{backgroundColor: "red", color: "white", fontSize:"60px"}}, "Hello coder army");
const element2 = React.createElement("h2",{id:"second", className: "ajit", style:{backgroundColor: "pink", color: "green", fontSize: "45px"}}, "Maja aaya mujhe");
const div1 = React.createElement("div",{},[element, element2]);
const Reactroot = ReactDOM.createRoot(document.getElementById('root'))

Reactroot.render(div1)
// roots.render(element);
// roots.render(element2)