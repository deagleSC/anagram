import logo from './logo.svg';
import './App.css';

import { useState } from 'react';


import Anagram from './components/Anagram';

function App() {

 


  return (
    <div className="App">
      
      <Anagram 
      anagram={["A", "P", "P", "L", "E"]}
      blanks={["A", "-", "-", "L", "-"]}
      anagramOptions={["A", "P", "P", "E", "L", "Z", "Y"]}
      />
    </div>
  );

  }
export default App;
