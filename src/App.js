import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {
  const [formValue, setFormValue] = useState({
    first_name: "",
    last_name: "",
    email: "",
    title: "",
  });
  const [teamMembers, setTeamMembers] = useState([]);

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormValue({...formValue, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const newMember = {
      first_name: formValue.first_name.trim(),
      last_name: formValue.last_name.trim(),
      email: formValue.email.trim(),
      title: formValue.title.trim(),
    };
    setTeamMembers([...teamMembers, newMember]);
  };



  return (
    <div className="App">
      <h1>Simple Team Building Form!</h1>
      <Form values={formValue} onChange={onChange} onSubmit={onSubmit} />
      {teamMembers.map((friend) => {
        return (
          <div> className="new-submissions" key={friend.id}>
            <h2>{friend.first_name}</h2>
            <h2>{friend.last_name}</h2>
            <h3>{friend.email}</h3>
            <h3>{friend.title}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;
