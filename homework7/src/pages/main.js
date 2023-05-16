import ListItem from "../components/listItem";
import DeleteButtons from "../components/delButtons";
import ShowButtons from "../components/showButtons";
import Info from "../components/info";
import PropTypes from "prop-types";
import { useState } from "react";


export default function Main({ list, setList, showTasks, setShowTasks, }) {

    const [deletedTasks, setDeletedTasks] = useState(0);

    return (
        <div className="main">
                        <Info deletedTasks={deletedTasks} />

            <ShowButtons list={list} showTasks={showTasks} setShowTasks={setShowTasks} />
            <div className="list">
                {
                    showTasks.map((i) => (
                        <ListItem
                            list={list}
                            setList={setList}
                            setShowTasks={setShowTasks}
                            item={i}
                            deletedTasks={deletedTasks}
                            setDeletedTasks={setDeletedTasks}
                            key={i.id}
                        />
                    ))
                }
            </div>
            <DeleteButtons 
            list={list} 
            setList={setList} 
            setShowTasks={setShowTasks} 
            deletedTasks={deletedTasks}
            setDeletedTasks={setDeletedTasks}
            />
        </div>
    );
}


Main.propTypes = {
    list: PropTypes.array,
    setList: PropTypes.func,
    showTasks: PropTypes.array,
    setShowTasks: PropTypes.func
}