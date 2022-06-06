import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react';
const getData = async ()=>{
  fetch("/api", {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
    'Content-Type': 'application/json'
    // 'Content-Type': 'application/x-www-form-urlencoded',
    }
  }).then( res => res.json()).then( (res1) =>{
    console.log(res1);
  });
}

getData();

function App() {
  return (
    <div className="App">
      Hifi
    </div>
  );
}

export default App;
