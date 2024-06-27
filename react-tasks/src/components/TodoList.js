import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const TodoList = () => {
    const [todos, setTodos] = useState([{task: 'code', id: uuidv4(), isDone: false}]);
    const[newTodo, setNewTodo] = useState('');

    const updateMark = (id) => {
      setTodos(todos.map((todo) => {
         if (todo.id === id) {
          return {
            ...todo,
            isDone: true, 
          }
         } else {
          return todo;
         }
      }))
    }

    const updateMarkAll = () => {
      setTodos((prevTodos) => 
        prevTodos.map((todo) => {
          return {
            ...todo,
            isDone: true,
          }
        })
      )
    }

    const addTodos = () => {
      setTodos([...todos, {task: newTodo, id: uuidv4(), isDone: false}]);
      setNewTodo('');
    }

    const updateTodos = (event) => {
      setNewTodo(event.target.value);
    }

    const upperCaseAll = () => {
      setTodos(todos.map((todo) => {
        return {
          ...todos, task: todo.task.toUpperCase()
        }
      }))
    }
    const uppercaseEach = (id) => {
     setTodos(todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        }
      } else {
        return todo;
      }
     }))
    }

    const deleteTodos = (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    }
    
  return (
    <div style={{color: 'white'}}>
      <input style={{color: 'white'}} placeholder='write new tak here' value={newTodo} onChange={updateTodos}  />
      <button  style={{color: 'white'}} onClick={addTodos} >Add Task</button>
      <br></br>
      <hr></hr>
      <h4>Todo List Tasks Added</h4>
      <ul>
      {todos.map((todo) => (<li key={todo.id}>
        <span style={todo.isDone ? {textDecorationLine: 'line-through'} : {}}>{todo.task}</span>
        <button onClick={() => deleteTodos(todo.id)} style={{color: 'white'}}>delete</button>
        <button style={{color: 'white'}} onClick={() => uppercaseEach(todo.id)}>upperCase</button>
        <button style={{color: 'white'}} onClick={() => updateMark(todo.id)}>mark done</button>
      </li>))}
      </ul>
      <br></br>
      <button style={{color: 'white'}} onClick={upperCaseAll}>UpperCaseALl</button>
      <button style={{color: 'white'}} onClick={updateMarkAll}>mark done all</button>
    </div>
  )
}

export default TodoList
