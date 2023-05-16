import ShowBtnList from './todoBtnList';
import ShowBtnDel from './todoBtnDel';

export default function ShowList({tmpTasks, tasks, setTasks}) {

    return (
        <div>
            <h2 className="box-title">TodoList</h2>
            <div className="to-do-list">
                <ShowBtnList />
                <ul className="tasks">
                    {
                        tasks.map((task, i) => {
                            return <li key={i}>{task.toDo}</li>
                        })
                    }
                </ul>
                <ShowBtnDel tasks={tasks} tmpTasks={tmpTasks} setTasks={setTasks} />
            </div>
        </div>
    );
}