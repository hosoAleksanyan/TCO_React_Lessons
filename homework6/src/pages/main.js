import { useState } from "react";
import ListItem from "../components/listItem";
import DeleteButtons from "../components/delButtons";
import ShowButtons from "../components/showButtons";

export default function Main({ list, setList, showTasks, setShowTasks, }) {

    return (
        <div className="main">
            <ShowButtons list={list} showTasks={showTasks} setShowTasks={setShowTasks} />
            <div className="list">
                {
                    showTasks.map((i) => (
                        <ListItem
                            list={list}
                            setList={setList}
                            setShowTasks={setShowTasks}
                            item={i}
                            key={i.id}
                        />
                    ))
                }
            </div>
            <DeleteButtons list={list} setList={setList} setShowTasks={setShowTasks} />
        </div>
    );
}