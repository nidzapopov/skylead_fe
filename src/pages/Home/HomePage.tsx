import { useFetchTasks } from "./hooks";
import TasksList from "../../components/tasks/tasksList";
import Button from "../../components/button/button";
import { useState } from "react";
import TaskPopUp from "../../components/popups/taskPopUp";
import { ITask } from "../../types/task.types";
import styles from "./homePage.module.css";

const HomePage = () => {
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);
    const [isTask, setTask] = useState<ITask | null>(null);
    const { data: tasks, isLoading: isTasksLoading } = useFetchTasks();
    
    if (isTasksLoading) return <div>Loading...</div>;

    const toggleOpenPopUp = () => {
        if (isPopUpOpen) setTask(null);
        setIsPopUpOpen(!isPopUpOpen);
    }

    const handleEditTask = (task: ITask) => {
        setTask(task);
        setIsPopUpOpen(true);
    }

    return (
        <div className={styles.container}>
            <div>
                <Button
                    onClick={toggleOpenPopUp}
                    label={'Create task'}
                />
            </div>
            <TasksList tasks={tasks} setTask={handleEditTask}/>
            {isPopUpOpen && (
                <TaskPopUp closePopUp={toggleOpenPopUp} task={isTask} />
            )}
        </div>
    );
};

export default HomePage;
