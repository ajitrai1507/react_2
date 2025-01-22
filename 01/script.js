
const React = {
    createElement: function(tag, styles,children){
        const element = document.createElement(tag);
        element.innerText = children;

        for(let key in styles){
            element.style[key] = styles[key]
        }
        return element;
    }
}

    const ReactDOM = {
        render : function(element, root){
            root.append(element);
        }
    }

const header1 = React.createElement('h1',{fontSize: "30px", backgroundColor: "cornflowerblue", color: "white"},"hello coder army")
const header2 = React.createElement('h1',{fontSize: "30px", backgroundColor: "black", color: "red"}, "Kaisee ho aap sab log")

ReactDOM.render(header1, document.getElementById('root'))
ReactDOM.render(header2, document.getElementById('root'))



// const header = document.createElement('h1');
// header.innerText = "Hello coder army";
// header.style.color = "white"
// header.style.backgroundColor = "cornflowerblue"
// header.style.fontSize = "60px"

// const header2 = document.createElement('h1');
// header2.innerText = "Hello kaise ho";
// header2.style.color = "red"
// header2.style.backgroundColor = "black"
// header2.style.fontSize = "60px"
// const root = document.getElementById('root')
// root.append(header1)
// root.append(header2)

