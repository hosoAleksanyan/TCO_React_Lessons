import { useSelector, useDispatch } from "react-redux";
import { deleteAllTasks, updateTask } from "../store/tasks/tasks.action";


export const TaskList = () => {

    const list = useSelector((state) => state.tasksReducer.tasksList);
    const dispatch = useDispatch();

    const handleCheck = (id) => {
        const tmpCompleted = list.find((t) => id === t.id);
        tmpCompleted.isComplited = !tmpCompleted.isComplited;

        dispatch(updateTask(list));
    }

    const handleDelete = () => {
        dispatch(deleteAllTasks());
    }

    const handleDelDone = () => {
        const result = list.filter((t) => !t.isComplited);
        dispatch(updateTask(result));
    }

    return (
        <div className="list">
            {
                list?.map((t) => (
                    <div key={t.id} className="list-item">
                        <p>{t.name}</p>
                        <input
                            type="checkbox"
                            defaultChecked={t.isComplited}
                            onClick={() => handleCheck(t.id)}
                        />
                    </div>
                ))
            }
            <div className="buttons">
            <button onClick={handleDelete}>Delete All</button>
            <button onClick={handleDelDone}>Delete Done Tasks</button>
            </div>
        </div>
    )
}