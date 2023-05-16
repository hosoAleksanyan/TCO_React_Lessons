export default function ShowBtnDel({ tasks, tmpTasks, setTasks }) {
    function deleteAllTasks() {
        setTasks([]);
    }
    function getBackAllTasks() {
        setTasks(tmpTasks);
    }

    function deleteDoneTasks() {
        let result = tasks.filter((task) => {
            return task.isDone === false;
        })

        setTasks(result);
    }

    return (
        <div className="del-tasks">
            <button onClick={deleteDoneTasks}>Delete done tasks</button>
            <button onClick={deleteAllTasks}>Delete all tasks</button>
            <button onClick={getBackAllTasks}>Get Back All Tasks</button>
        </div>
    );
}