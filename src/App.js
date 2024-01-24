import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TodoList from './components/TodoList.js';
import { ThemeProvider } from './components/ThemeProvide.js';
import ThemeButton from './components/ThemeButton.js';
import MyPage from './components/MyPage.js';

function App() {
  const [visible, setVisible] = useState(false)
  
  return (
    <div className="App">
      <TodoList/>
    </div>
  );
}
export default App;