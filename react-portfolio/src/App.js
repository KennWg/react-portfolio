import React, { useState } from "react";
import Header from './components/Header';

function App() {
  const categories = ['about', 'portfolio', 'contact', 'resume'];

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div className="App">
      <Header currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      ></Header>
    </div>
  );
}

export default App;
