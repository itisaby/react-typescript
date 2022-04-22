import React from 'react';
import { Greet } from './Components/Greet';
import { Person } from './Components/Person';
import { PersonList } from './Components/PersonList';


function App() {
  const personName = {
    firstName: 'John',
    lastName: 'Doe'
  }
  const nameList = [
    {
      firstName: 'John',
      lastName: 'Doe'
    },
    {
      firstName: 'Jane',
      lastName: 'Doe'
    },
    {
      firstName: 'Joe',
      lastName: 'Doe'
    }
  ]
  return (
    <div className="App">
      <Greet name="Arnab" messageCount={21} isLogged={false}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>
    </div>
  );
}

export default App;
