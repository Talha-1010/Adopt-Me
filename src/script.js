import ReactDOM from "react-dom";
import Pet from "./Pet";

    const App = () =>{
      return(
        <div>
           <h1>Adopt Me!</h1>
             <Pet name ="Tommy" animal="Dog" breed="german shepherd" />
             <Pet name ="Milo" animal="Dog" breed="bulldog" />
             <Pet name ="Jasper" animal="Dog" breed="Siberian Husky" />
        </div>
      );
    };

ReactDOM.render(<App/>, document.getElementById("root"));
