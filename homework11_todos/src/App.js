import { useSelector } from "react-redux";
import { tasksReducer } from "./store/tasks/tasks.reducer";
import { Home } from "./pages/home";


function App() {


  return (
    <div>
      <Home/>
    </div>
  );
}

export default App;
