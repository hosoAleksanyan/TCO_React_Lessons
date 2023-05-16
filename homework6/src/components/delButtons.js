export default function DeleteButtons({ list, setList, setShowTasks }) {

    const delAllTasks = () => {
        setList([]);
        setShowTasks([]);
    }

    const delDoneTasks = () => {
        let result = list.filter((i) => {
            return !i.isCompleted;
        });
        
        setList(result);
        setShowTasks(result)
    }

    return (
        <div className="delButtons">
            <button onClick={delDoneTasks}>Delete done tasks</button>
            <button onClick={delAllTasks}>Delete all tasks</button>
        </div>
    );
}