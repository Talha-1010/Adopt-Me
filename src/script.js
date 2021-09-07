const Pet = () => {
    return React.createElement("div",{},[
        React.createElement("h2",{},"Tommy"),
        React.createElement("h3",{},"Dog"),
        React.createElement("h3",{},"german")
    ])
}


const App = () => {
    return React.createElement(
        "div",
        {},
        [
        React.createElement("h1",{},"Adopt-Me!"),
        React.createElement(Pet),
        React.createElement(Pet),
        React.createElement(Pet)
        ]
        
    );
};
ReactDOM.render(React.createElement(App),document.getElementById('root'));