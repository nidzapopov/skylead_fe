
import { ITask } from "../../types/task.types";
import styles from "./tasksList.module.css";

interface IProps {
    tasks: ITask[];
    setTask: (task: ITask) => void;
}

const TasksList = ({
    tasks, 
    setTask
}: IProps) => {
    const groupedTasks = tasks.reduce<Record<string, ITask[]>>((acc, task) => {
        if (!acc[task.status]) {
            acc[task.status] = [];
        }
        acc[task.status].push(task);
        return acc;
    }, {});

    return (
        <div className={styles.container}>
            {Object.keys(groupedTasks).map((status) => (
                <div key={status} className={styles.box}>
                    <h3 style={{ textTransform: "capitalize" }}>{status}</h3>
                    <ul>
                        {groupedTasks[status].map((task) => (
                            <li onClick={() => setTask(task)} key={task._id} className={styles.item}>
                                <h3 className={styles.title}>{task.title}</h3>
                                <p className={styles.description}>{task.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default TasksList;