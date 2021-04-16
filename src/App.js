import './App.css';
import React from "react";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Info from "./Components/Info/Info";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">

      <Header />

      <main>
        <About/>
        <Portfolio/>
        <Info/>
      </main>

      <Footer/>
    </div>
  );
}

export default App;
