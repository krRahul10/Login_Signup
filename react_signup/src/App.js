import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      {/* <h1>Hello world</h1> */}
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
