import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Message from './Components/Message';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/**
          <h3> Functional Components</h3>
        <a
          className="App-link"
          target="_blank"
        >
        <Greet name = "Alice" lName = "User 1"> Other Users </Greet>
        <Greet name = "Haley" lName = "User 2"/>
        <Greet name = "Luke" lName = "User 3"/>
        </a>
        <h3> Class Components</h3>
        <Welcome name = "Alice" lName = "User 1"> Other Users </Welcome>
        <Welcome name = "Haley" lName = "User 2"/>
        <Welcome name = "Luke" lName = "User 3"/>
        
        <Message></Message>

        <Counter/>
        */}
        <FunctionClick/>
        <ClassClick/>
      </header>
    </div>
  );
}

export default App;
