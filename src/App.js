import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import CaptionImage from './components/CaptionImage';
import BlinkCompnent from './components/BlinkComponent.js';
import CountComponent from './components/CountComponent.js';
import { useState } from 'react';
import FocusInputButton from './components/RegisterInputButton.js';
import ChangeColor from './components/ChangeColor.js';
import TodoList from './components/TodoList.js';


function App() {
  const [visible, setVisible] = useState(false)
  
  return (
    <div className="App">
      <TodoList/>
    </div>
  );
}
export default App;