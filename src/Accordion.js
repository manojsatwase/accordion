import React, { useState } from 'react'
import data from "./data";
import SingleQuestion from './SingleQuestion';
function Accordion() {
 const [questions, Setquestion] = useState(data);
 return (
  <div className="container">
   <header>
    <h12>Accordion</h12>
   </header>
   <section className="info">
    {
     questions.map((question) => {
      return <SingleQuestion key={question.id} {...question} />
     })
    }
   </section>
  </div>
 )
}

export default Accordion
