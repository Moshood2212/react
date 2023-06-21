import React from 'react'
const Book = ({title,year,})  => {
  return (
    <div>
      <h2>Title:{title} </h2>
      <p> year:{year} </p>
    </div>
    
  );
};
const Books = () => {
  return (
    <div>
      <h3>bestselling Books</h3>
      <Book title="sugar" />
      <Book title="boy" />
      <Book title="husband" year="2001" />

    </div>
  )
  
};
// outputting list






export default Books