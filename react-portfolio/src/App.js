import React, { useState } from "react";
import Header from './components/Header';
import About from "./components/About";

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
        <p>test2</p>}
      </main>
    </div>
  );
}

export default App;
