import React from "react";
import Header from "./components/Header"
import Home from "./components/Home"
import Vidos from "./components/Vidos";
import Infa from "./components/Infa";
import Sotceti from "./components/Sotceti";

class App extends React.Component{
  render() {
    return(
        <div id="main">
            <Header/>
            <Home/>
            <Vidos/>
            <Infa/>
            <Sotceti/>
        </div>
    )
  }
}

export default App