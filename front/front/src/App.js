import React, {useState} from 'react';
import axios from 'axios';
import './App.css';
  
function App() {
    
  const [campos, setCampos] = useState({
    name: '',
    age: '',
    email: '',
    password: '',
    confPassword: ''
  })

  function handleInputChange(event) {
    campos[event.target.name] = event.target.value;
    setCampos(campos);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(campos);
    send();
  }

  function send() {
    const formData = new FormData();

    Object.keys(campos).forEach(key => formData.append(key, campos[key]));

    axios.post('http://localhost:5050/send', formData, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => alert(response.data));
  }

  return (
    <div className="App">
    <header className="App-header">
    <form onSubmit={handleFormSubmit}>
    <h2> Geeks For Geeks </h2>
    <h3> Sign-up Form </h3>
        <label >
          Name:
        </label><br/>
        <input type="text" name="name" onChange={handleInputChange} /><br/>
        <label >
          Age:
        </label><br/>
        <input type="text" name="age" onChange={handleInputChange} /><br/>
        <label>
          Email:
        </label><br/>
        <input type="text" name="email" onChange={handleInputChange} /><br/>
        <label>
          Password:
        </label><br/>
        <input type="text" name="password" onChange={handleInputChange} /><br/>
        <label>
          Confirm Password:
        </label><br/>
        <input type="text" name="confirmpassword" onChange={handleInputChange} /><br/>
        <input type="submit" value="Submit"/>
      </form>
    </header>
    </div>
  );
}
  
export default App;