import React, { Component, useState, useEffect } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

const App = () => {
  const [data, setData] = useState([]);
  const [a, seta] = useState(false);
  console.log('seta9', a);

  const [buttonText, setButtonText] = useState('Upload');
  const handleClick = (e) => {
    //useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then(
        (data) => setData(data),
        seta(true)
        // this.setState(() => {
        //   return { data };
        // })
      );
    //}, []);
    setButtonText('Thanks, uploaded');
  };
  return (
    <>
      {
        <p>
          {a ? 'This way! :)' : 'No way! :('} - {a | JSON}
        </p>
      }
      <ul>
        {data.map((item) => (
          <li key={item.username}> {item.username} </li>
        ))}
      </ul>
      <br />
      <button onClick={handleClick}> {buttonText} </button>
    </>
  );
};

render(<App />, document.getElementById('root'));
