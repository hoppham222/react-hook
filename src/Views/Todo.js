

// const Todo = (props) => {
const Todo = ({ todos, title, deleteDataTodo }) => {
  // const todos = props.todos;
  // const { todos, title, deleteDataTodo } = props;
  const hendleDelete = (id) => {
    deleteDataTodo(id);
  }
  return (
    <div className="todos-container">
      <div className="title">
        {title}
      </div>
      <div className='todos'>
      {todos.map(todo => {
        return (
          <div key={todo.id}>
            <li className='todo-child' >{todo.title}
              &nbsp; <span onClick={() => hendleDelete(todo.id)}>x</span> </li>
          </div>
        )
      }) }
      </div>
    </div>  
  )
}
export default Todo;