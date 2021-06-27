import React, { useEffect, useState } from 'react';
import './App.css';
import Items from './Items';


function App() { 
  const [list, setList] = useState([]);
  


  useEffect(() => {
    fetch('http://localhost:3333/list')
      .then(data => data.json())
      .then(items => {  
          setList(items)
      })
   
  }, [ ])
 
 
  return (
<div className="App">
{list.map(list => {
  return(
      <Items 
      key={list.id}
      name={list.name}
      picture={list.picture}
     
      />
      );
  })}
    </div>
  );
}

export default App;
