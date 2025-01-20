import logo from './logo.svg';
import './App.css';
import UploadFile from './UploadFile';


import React, {useEffect, useState } from 'react'


function App() {

  const [backendData, setBackendData] = useState ([{}])

  useEffect(() =>{
    fetch("/api").then(
      response => response.json()

    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, []) // [] after the component to run only on the first render of the component
  

  return ( 
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {(typeof backendData.users === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )}

      <UploadFile />


    </div>
  );
}

export default App;

