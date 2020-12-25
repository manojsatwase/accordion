import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';

function App() {
  const [questions, setQuestion] = useState(data);
  return <main className="container">
    <header>
      <h1>React Accordion</h1>
      <p className="tagline">Cool facts about React</p>
    </header>
    {
      questions.map((question) => {
        return <SingleQuestion key={question.id} {...question} />
      })
    }

  </main>
}

export default App;
