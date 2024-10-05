
//this page is same as index.jsx or main.jsx

function customeReact(reactElement, container){
    const domElement  = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children;

    for(const prop in reactElement.props){
        if(prop  === "children") continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}


const reactElement  = {
    type: 'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to open google'
}

const mainContainer =document.getElementById('root');

customeReact(reactElement, mainContainer);



