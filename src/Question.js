import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

// import questions from './data';

const Question = ({ title, info }) => {
  const [question, setQuestion] = useState(false);
  return <main>
    <div className="container">

      <div className="accordion">
        <div className="accordion__item">
          <div className="accordion__heading" onClick={() => setQuestion(!question)} >
            <p className="accordion__title">{title}</p>
            <span className="accordion__icon">
              {question ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </span>
          </div>
          <div className="accordion__details">
            {question && <p> {info}</p>}
          </div>
        </div>
      </div>
    </div>

  </main>


};

export default Question;
