import { useState } from "react";
import { useAddTask, useDeleteTask, useFetchUsers, useUpdateTask } from "../../pages/Home/hooks";
import { IUser } from "../../types/user.types";
import Input from "../input/input";
import Select from "../select/select";
import Button from "../button/button";
import { ITask } from "../../types/task.types";

interface IProps {
    task: ITask | null;
    closePopUp: () => void;
}

const TasksForm = ({
        task, 
        closePopUp
    }: IProps) => {
    const { mutate: addTask } = useAddTask();
    const { mutate: updateTask } = useUpdateTask();
    const { mutate: deleteTask } = useDeleteTask();

    const initTask = {
        title: "",
        description: "",
        userId: "",
        status: "",
    }
    
    const [formData, setFormData] = useState<ITask>((task) ?? initTask);
    const [isMessage, setMessage] = useState<string | null | undefined>(null);

    const { data: users, isLoading: isUsersLoading } = useFetchUsers();
    if (isUsersLoading) return <div>Loading users...</div>;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        addTask(formData, {onSuccess:() => {
            clearForm();
        },
        onError: (error: any) => {
            setMessage(error.response.data.message);
        }});
    }

    const updateSubmit = () => {
        updateTask(formData, {onSuccess:() => {
            clearForm();
        },
        onError: (error: any) => {
            setMessage(error.response.data.message);
        }});
    }

    const deleteSubmit = () => {
        deleteTask(formData, {onSuccess:() => {
            clearForm();
        },
        onError: (error: any) => {
            setMessage(error.response.data.message);
        }});
    }

    const clearForm = () => {
        setFormData(initTask);
        closePopUp();
    }

    const userOptions = users.map((user: IUser) => ({
        value: user._id, 
        label: `${user.firstName} ${user.lastName}`,
    }));

    const statusOptions = [
        {value: "todo", label: "TODO"},
        {value: "in_progress", label: "IN PROGRESS"},
        {value: "done", label: "DONE"}
    ];

    return (
        <div>
            <div>{isMessage}</div>
            <Input 
                value={formData.title}
                name="title"
                type="text"
                placeholder="title"
                onChange={handleChange}
            />
            <Input 
                value={formData.description}
                name="description"
                type="textarea"
                placeholder="description"
                onChange={handleChange}
            />
            <Select
                value={formData.userId}
                name="userId"
                onChange={handleChange}
                options={userOptions}
            />
            <Select
                value={formData.status}
                name="status"
                onChange={handleChange}
                options={statusOptions}
            />
            <Button 
                onClick={task != null ? updateSubmit : handleSubmit} 
                label={task != null ? 'Update task' : 'Save task'} 
            />
            {(task && 
                <Button 
                    onClick={deleteSubmit} 
                    label={'Delete task'} 
                />
            )}
        </div>
    );
};

export default TasksForm;