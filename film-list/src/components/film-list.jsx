import React, { useState } from 'react';

function Timer() {
  const [list, setList] = useState(['ready', 'set', 'GO']);
  const [text, setText] = useState('');

  const handleInput = event => {
    setText(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setList([...list, text]);
    setText('');
  };

  return (
    <div>
      <h1>Timer</h1>
      <ul>
        {list.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input value={text} onChange={handleInput} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Timer;
