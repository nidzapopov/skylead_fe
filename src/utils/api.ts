
import { ITask } from "../types/task.types";
import api from "./axios";

export const fetchUsersApi = async () => {
    const response = await api.get("/users");
    return response.data.data;
};

export const fetchTasksApi = async () => {
    const response = await api.get("/tasks");
    return response.data.data;
};

export const addTaskApi = async (taskForm: ITask) => {
    const response = await api.post("/tasks", taskForm);
    return response.data.data;
};

export const updateTaskApi = async (taskForm: ITask) => {
    const response = await api.put(`/tasks/${taskForm._id}`, taskForm);
    return response.data.data;
};

export const deleteTaskApi = async (taskForm: ITask) => {
    await api.delete(`/tasks/${taskForm._id}`);
    return taskForm._id;
};