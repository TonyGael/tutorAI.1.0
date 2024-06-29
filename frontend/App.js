// App.js
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/answer', { question });
    setResponse(res.data);
  };

  return (
    <div className="App">
      <h1>Tutor de Paulo Cohelo</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Pregunta:
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
      {response && (
        <div>
          <h2>Respuesta:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
