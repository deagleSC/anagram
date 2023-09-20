import logo from './logo.svg';
import './App.css';

import { useState } from 'react';


import Anagram from './components/Anagram';

function App() {

 


  return (
    <div className="App">
      
      <Anagram 
      anagram={["O", "R", "A", "N", "G", "E"]}
      blanks={["O", "-", "-", "N", "-", "E"]}
      anagramOptions={["A", "R", "P", "G", "L", "Z", "Y"]}
      />
    </div>
  );

  }
export default App;
