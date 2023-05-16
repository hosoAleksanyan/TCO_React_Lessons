import PropTypes from "prop-types";

export default function DeleteButtons({ list, setList, setShowTasks, deletedTasks, setDeletedTasks }) {

    const delAllTasks = () => {
        setDeletedTasks(deletedTasks + list.length);

        setList([]);
        setShowTasks([]);
    }

    const delDoneTasks = () => {
        let result = list.filter((i) => {
            return !i.isCompleted;
        });

        let delResult = list.filter((i)=>{
            return i.isCompleted;
        })

        setDeletedTasks(deletedTasks + delResult.length);

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

DeleteButtons.propTypes = {
    list: PropTypes.array,
    setList: PropTypes.func,
    setShowTasks: PropTypes.func,
}