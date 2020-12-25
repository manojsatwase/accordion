import React, { useState } from 'react'

function SingleQuestion({ title, info }) {
 const [showInfo, setShowInfo] = useState(false);
 return (
  <article className="accordion-item">
   <div className="accordion__heading">
    <h2 className="accordion__title">
     {title}
    </h2>
   </div>
   <div className="according__details">
    {showInfo && <p>{info}</p>}
   </div>
   <button className="btn btn-primary" onClick={() => setShowInfo(!showInfo)}>
    {showInfo ? "+" : "-"}
   </button>
  </article>
 )
}

export default SingleQuestion;
