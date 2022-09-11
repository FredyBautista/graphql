import React, { useState } from 'react';
import ListTopics from './Components/ListTopics/ListTopics';
import FormSearch from './Components/FormSearch/FormSearch';
import './App.css';

const App = () => {
  const [topic, setTopic] = useState('react');

  const handleOnSubmit = (value) => {
    setTopic(value);
  };

  return (
    <div className="App">
      <h1>Topics</h1>
      <FormSearch onSubmit={handleOnSubmit} value={topic} />
      <ListTopics search={topic} onClick={handleOnSubmit} />
    </div>
  );
}

export default App;
