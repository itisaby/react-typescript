import React from 'react';
import { Button } from './Components/Button';
import { Container } from './Components/Container';
import { Greet } from './Components/Greet';
import { Heading } from './Components/Heading';
import { Input } from './Components/Input';
import { Oscar } from './Components/Oscar';
import { Person } from './Components/Person';
import { PersonList } from './Components/PersonList';
import { Status } from './Components/Status';


function App() {
  const personName = {
    firstName: 'John',
    lastName: 'Doe'

  }
  const nameList = [
    {
      firstName: 'John',
      lastName: 'Doe',
      id: 123
    },
    {
      firstName: 'Jane',
      lastName: 'Doe',
      id: 1234
    },
    {
      firstName: 'Joe',
      lastName: 'Doe',
      id: 123456
    }
  ]
  return (
    <div className="App">
      {/* Props in Typescript */}
      {/* <Greet name="Arnab" messageCount={21} isLogged={false}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>
      <Status status='success'/>  */}
      {/* <Status status='dkjhgvhbdbd'/> */}  {/* This will throw an error */}
      {/* <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>
          Oscar goes to Cafe
        </Heading>
      </Oscar> */}

      <Greet name="Arnab" messageCount={21} isLogged={false}/>
      {/* Event Props in Typescript */}
      {/* <Button
        handleClick={
          (event, id) => {
            console.log('Button clicked', event, id);
          }
        } />
        <Input value='' handleChange={(event)=> {
          console.log('Input changed', event.target.value);
        }}/> */}

        {/* Style Props */}
        {/* <Container styles={{border: '1px solid black', padding: '1rem'}}/> */}
        
        Prop Types and Tips



    </div>
  );
}

export default App;
