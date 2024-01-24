import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
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