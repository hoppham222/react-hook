import logo from './logo.svg';
import './App.scss';
import Nav from './Views/Nav.js';
import { useState } from 'react';
import Todo from './Views/Todo';

const App = () => {

  let [name, setName] = useState('Pham Hợp');
  const [address, setAddress] = useState('');
  const [todos, setTodos] = useState([
    { id: 'todo1', title: 'Phạm Văn Hợp', type:'Pham' },
    { id: 'todo2', title: 'Phạm Văn Minh', type: 'Văn' },
    { id: 'todo3', title: 'Phạm Văn', type:'Quang' }
  ]);
  const hendleOnclick = (event) => {
    if (!address) {
      alert('Dữ liệu k được để trống')
      return;
    }
    //...spread syntax array
    let todo = { id:'212', title: address,type:'phạm' }
    setTodos([...todos, todo])
    setAddress('')
  }
  const hendleOnchenge = (event) => {
    setAddress(event.target.value)
  }
  
  return (
    <div className="App">
     
      {/* {console.log(obj)} */}
      <header className="App-header">
        <Nav/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Họ và tên : {name}
        </p>

        <Todo todos={todos}
        title ={'Test test'}
        />

        <Todo todos={todos.filter(item => item.type==='Pham')}
        title ={' Type Phạm'}
        />
        
        <input type="text" value={address} onChange= {(event) => hendleOnchenge(event)} />
        <button type="button" onClick={(event) =>  hendleOnclick(event) } >Click me</button>
      </header>
    </div>
  );
}

export default App;
