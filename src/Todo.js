import React,{useState} from 'react';
import './Todo.css';
import { Button, List,Avatar,  ListItemAvatar, ListItem, ListItemText, Modal } from '@material-ui/core'
import db from './firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));


// props to pass the todo text from app.js
function Todo(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState();


       const handleOpen = () => {
         setOpen(true);
       };

       const updateTodo = () => {
           //update the todo with new input text
           db.collection('todos').doc(props.todo.id).set({
               todo: input
           }, {merge: true}); //prevent from overwriting 

           setOpen(false);
       }

    return (
        <>
        <Modal
          open={open}
          onClose={e => setOpen(false)} //function 
        >
            <div className={classes.paper}>
                <h1>I am a modal</h1>
                <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)}/>
                <Button onClick={updateTodo}>Update ToDo</Button>
            </div>
        </Modal>
        <List className="todo_list">
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
             <ListItemText primary={props.todo.todo} secondary="Get Your Job DONE!! 😃"    />
            </ListItem>
            <button onClick={e => setOpen(true)}>Edit</button>
            <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()} />
        </List>
        </>
    )
}

export default Todo
