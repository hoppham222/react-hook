import logo from './logo.svg';
import './App.scss';

const App = () => {
  let name = 'Pham Hợp';
  let obj = { name: 'Phạm Hợp', channel: 'Phạm Văn Hợp' };
  let link = 'https://www.facebook.com/';
  return (
    <div className="App">
      {/* {console.log(obj)} */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Họ và tên : {name} - {obj.name}
        </p>
        <a href={link} target = "_blank">Facebook</a>
      </header>
    </div>
  );
}

export default App;
