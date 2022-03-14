

const Todo = (props) => {
  const todos = props.todos;
  return (
    <div className="todos-container">
      <div className="title">
        {props.title}
      </div>
      <div className='todos'>
      {todos.map(todo => {
        return (
          <div className='todo-child' key={todo.id}>{ todo.title }</div>
        )
      }) }
      </div>
    </div>  
  )
}
export default Todo;