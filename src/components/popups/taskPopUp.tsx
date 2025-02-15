import { ITask } from "../../types/task.types";
import TasksForm from "../forms/tasksForm";
import styles from "./taskPopUp.module.css";

interface IProps {
    task: ITask | null;
    closePopUp: () => void;
}

const TaskPopUp = ({
    task, 
    closePopUp
}: IProps) => {
    return (
        <div className={styles.popupOverlay}>
            <div className={styles.popup}>
                <p className={styles.closeBtn} onClick={closePopUp}>X</p>
                <h2>Create tasks</h2>
                <TasksForm closePopUp={closePopUp} task={task} />
            </div>
        </div>
    );
};

export default TaskPopUp;