import React from 'react';
import ListTopics from './Components/ListTopics/ListTopics';
import Loader from './Components/Loader/Loader';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Topics</h1>
      <ListTopics />
    </div>
  );
}

export default App;
