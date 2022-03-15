import logo from './logo.svg';
import './App.scss';
import Nav from './Views/Nav.js';
import Todo from './Views/Todo';
import Covid from './Views/Covid';
import Blog from './Views/Blog';
import DetailBlog from './Views/DetailBlog';
import AddNewBlog from './Views/AddNewBlock';

import { useState, useEffect } from 'react';
import { CountDowwn, NewCountDown } from './Views/Countdown';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom"

const App = () => {

  let [name, setName] = useState('Pham Hợp');
  const [address, setAddress] = useState('');
  const [todos, setTodos] = useState([
    { id: 'todo1', title: 'Phạm Văn Hợp', type:'Pham' },
    { id: 'todo2', title: 'Phạm Văn Minh', type: 'Văn' },
    { id: 'todo3', title: 'Phạm Văn', type:'Quang' }
  ]);
  useEffect(() => {
    // console.log('userEffect address')
  }, [address]);

  useEffect(() => {
    // console.log('userEffect todos')
  }, [todos])
  const hendleOnclick = (event) => {
    if (!address) {
      alert('Dữ liệu k được để trống')
      return;
    }
    //...spread syntax array
    let todo = { id: Math.floor(Math.random()*1000), title: address,type:'Pham' }
    setTodos([...todos, todo])
    setAddress('')
  }
  const hendleOnchenge = (event) => {
    setAddress(event.target.value)
  }

  const onTimesup = () => {
    alert('hết thời gian ')
  }

  const deleteDataTodo = (id) => {
    let currentTodos = todos;
    currentTodos = todos.filter(item => item.id !== id)
    setTodos(currentTodos);
  }
  
  return (
    <BrowserRouter>
      <div className="App">
      
        {/* {console.log(obj)} */}
        <header className="App-header">
          <Nav/>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Họ và tên : {name}
          </p>
          {/* <Covid /> */}
          {/* <CountDowwn onTimesup={onTimesup} />
          <NewCountDown onTimesup={onTimesup} /> */}
          <Switch>
            <Route path='/Covid'> <Covid/> </Route>
            <Route path='/Countdown' ><CountDowwn onTimesup={onTimesup} /></Route>
            <Route path='/NewCountDown'><NewCountDown onTimesup={onTimesup} /></Route>
            <Route path='/Blog' exact><Blog /></Route>
            <Route path='/Blog/:id'>
              <DetailBlog />
            </Route>
            <Route path='/Add-new-blog'>
              <AddNewBlog />
            </Route>
          </Switch>
          


          {/* <Todo todos={todos}
            title={'Test test'}
            deleteDataTodo ={deleteDataTodo}
          />

          <Todo todos={todos.filter(item => item.type==='Pham')}
            title={' Type Phạm'}
            deleteDataTodo = {deleteDataTodo}
          /> */}
          
          {/* <input type="text" value={address} onChange= {(event) => hendleOnchenge(event)} />
          <button type="button" onClick={(event) =>  hendleOnclick(event) } >Click me</button> */}
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
