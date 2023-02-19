import { getAllByText } from '@testing-library/react';
import React from 'react'
import Todo from './todo'

const Todos = (props) => {
  console.log(props.onNewTodo);
  const person = {
    id: 1,
    name: "Alex"
  };

  props.onNewTodo(person);

  return (
    <div> < Todo /> </div>
  )
}

export default Todos