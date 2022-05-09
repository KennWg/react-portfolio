import React, { useState } from "react";
import Header from './components/Header';
import About from "./components/About";
import Portfolio from "./components/Portfolio";

function App() {
  const categories = ['about', 'portfolio', 'contact', 'resume'];

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div className="App">
      <Header currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      ></Header>
      <main>
        {currentCategory==='about' && 
        <About></About>}
        {currentCategory==='portfolio' && 
        <Portfolio></Portfolio>}
      </main>
    </div>
  );
}

export default App;
