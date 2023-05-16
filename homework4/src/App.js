import './assets/styles/style.scss';
import './App.css';
import ToDoInput from './components/toDoInput';
import ShowList from './components/toDoList/showList';

function App() {
  return (
    <div>
      <ToDoInput />
      <ShowList />
    </div>
  );
}

export default App;
