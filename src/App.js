import React ,{ useState, useEffect} from 'react';
import Todo from './Todo';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import db from './firebase';
import firebase from 'firebase';

function App() {
  // short temp momery 
  //once refesh all gone 
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
 
  // when the app loads , we need to listen to the db and fetch new todos as they added/ remove
  useEffect(() =>{
    //this code here.....fires when the app.js loads
   db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
     setTodos(snapshot.docs.map(doc => ({id: doc.id , todo: doc.data().todo}))) 
     // all to every single doc and get the todos fills and let it be todos
   })
  }, []);


  const addTodo = (event) => {
    // this will fire of when we click the button 
    event.preventDefault(); //will stop REFESH
    
    db.collection('todos').add({ // add to db & fire snapshot & update
       todo: input,                         // timestamp ofthe serve
       timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })


    setTodos([...todos, input]);//to push & keep  the new input to currect array
    setInput(''); // clear up the input once clicking Add Todo

  }

  //map is as array take the array for uesTATE
       // todos is the array name 

  return (
    <div className="App">
      <h1>Hello Lucky Programmer 🌹  ! </h1>

      <form>
    

       <FormControl>
         <InputLabel>✅😇 Write a ToDo</InputLabel>
         <Input value={input} onChange={event => setInput(event.target.value)} />
       </FormControl>


      <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
      Add ToDo
      </Button>
     {/* <button type="submit" onClick={addTodo}>Add ToDo</button>*/}
      </form>
      <ul>
        
        {todos.map(todo => ( // todo id the value that user input
          <Todo todo={todo}/> // this text.todo will puss to the props at Todo.js 
        //  <li>{todo}</li>
        ))}
       
      </ul>
    </div>
  );
}

export default App;
