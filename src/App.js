import React from "react";
import Header from "./components/Navegacion/Header";
import { BrowserRouter as Router} from "react-router-dom";
import Productos from './components/Paginas/ItemList'



function App() {
  
    return (
      <div className="App">
        <Router>
          <Header />
          <Productos />
        </Router>
      </div>
    );
}


export default App;
