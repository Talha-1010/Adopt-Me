/* global React ReactDOM */
{
  {
    const Pet = (props) => {
      return React.createElement("div", {}, [
        React.createElement("h2", {}, props.name),
        React.createElement("h3", {}, props.animal),
        React.createElement("h3", {}, props.breed),
      ]);
    };

    const App = () => {
      return React.createElement("div", {}, [
        React.createElement("h1", {}, "Adopt-Me!"),
        React.createElement(Pet, {
          name: "Tommy",
          animal: "Dog",
          breed: "german shepherd",
        }),
        React.createElement(Pet, {
          name: "Milo",
          animal: "Dog",
          breed: "bulldog",
        }),
        React.createElement(Pet, {
          name: "Jasper",
          animal: "Dog",
          breed: "Siberian Husky",
        }),
      ]);
    };
    ReactDOM.render(React.createElement(App), document.getElementById("root"));
  }
}
