import { useState, useEffect } from "react";
import Head from "./head";
import Main from "./main";
import Loading from "../components/loading";

const tasks = [
    { id: Math.random(), text: "Create App", isCompleted: true },
    { id: Math.random(), text: "Install Sass", isCompleted: false },
    { id: Math.random(), text: "Create folders and files", isCompleted: true },
    { id: Math.random(), text: "Add Git", isCompleted: false },
    { id: Math.random(), text: "Coding", isCompleted: false }
];

export default function Home() {
    const [list, setList] = useState();
    const [showTasks, setShowTasks] = useState();

    useEffect(() => {
        setTimeout(() => {
            setList(tasks);
            setShowTasks(tasks);
        }, 1500);
    }, []);

    return (
        <div className="home">
            {
                list ?
                    <div>
                        <Head list={list} setList={setList} setShowTasks={setShowTasks} />
                        <Main list={list} setList={setList} showTasks={showTasks} setShowTasks={setShowTasks} />
                    </div>
                    :
                    <Loading />
            }
        </div>
    );
}