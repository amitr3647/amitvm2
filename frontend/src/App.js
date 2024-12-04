import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './pages/Homepage';
import Chatpage from './pages/Chatpage';

function App() {
  return (
    <div className="App">
    <Routes>
<Route path='/' element = {<HomePage/>} ></Route>
<Route path='/home' element = {<HomePage/>} ></Route>
<Route path='chats' element = {<Chatpage/>}></Route>
    </Routes>
   
    </div>
  );
}

export default App;
