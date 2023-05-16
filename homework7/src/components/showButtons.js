import PropTypes from "prop-types";

export default function ShowButtons({ list, showTasks, setShowTasks }) {

    const showAllTasks = () => {
        setShowTasks(list)
    }

    const showDoneTasks = () => {
        let result = list.filter((i) => {
            return i.isCompleted;
        });

        setShowTasks(result);
    }

    const showTodoTasks = () => {
        let result = list.filter((i) => {
            return !i.isCompleted;
        });

        setShowTasks(result);
    }

    return (
        <div className="showButtons">
            <button onClick={showAllTasks}>All</button>
            <button onClick={showDoneTasks}>Done</button>
            <button onClick={showTodoTasks}>Todo</button>
        </div>
    );
}

ShowButtons.propTypes = {
    list: PropTypes.array,
    showTasks: PropTypes.array,
    setShowTasks: PropTypes.func
}