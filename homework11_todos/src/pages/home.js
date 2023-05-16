import { AddTask } from "./addTask"
import { TaskList } from "./taskList"

export const Home = () => {
    return (
        <div className="todoApp">
            <AddTask />
            <TaskList />
        </div>
    )
}