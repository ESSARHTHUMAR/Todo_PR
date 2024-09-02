import React from 'react'
import AddTodo from './AddTodo'
import FilterByDate from './FilterByDate'
import Todos from './Todos'

const CompleteTodo = () => {
  return (
    <div>
        <AddTodo />
        <FilterByDate />
        <Todos />
    </div>
  )
}

export default CompleteTodo