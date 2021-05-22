import React from 'react';
import './App.css';
import Counter from './Counter';
import { useSelector } from 'react-redux';

export default function App() {

  const count = useSelector((state) => state.counter.count);
  const voters = ["Anthony", "Ann"];

  return (
    <div className="App">
      <header className="App-header">
        <h2>The total votes is: {count}</h2>
        { voters.map((voter)=>(
          <Counter name="voter" />
        ))}
      </header>
    </div>
  );
};