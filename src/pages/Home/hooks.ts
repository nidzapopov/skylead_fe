import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchUsersApi, fetchTasksApi, addTaskApi, updateTaskApi, deleteTaskApi } from "../../utils/api";
import { queryClient } from "../../App";
import { ITask } from "../../types/task.types";

export const useFetchUsers = () => {
    return useQuery({
        queryKey: ["users"],
        queryFn: fetchUsersApi,
    });
};

export const useFetchTasks = () => {
    return useQuery({
        queryKey: ["tasks"],
        queryFn: fetchTasksApi,
    });
};

export const useAddTask = () => {
    return useMutation({
        mutationKey: ["tasks"],
        mutationFn: (taskForm: ITask) => addTaskApi(taskForm),
        onSuccess: (task) => {
            queryClient.setQueryData(
                ["tasks"],
                (tasks: ITask[]) => {
                    return [...tasks, task];
                }
            );
        },
    });
}; 

export const useUpdateTask = () => {
    return useMutation({
        mutationKey: ["tasks"],
        mutationFn: (taskForm: ITask) => updateTaskApi(taskForm),
        onSuccess: (task) => {
            queryClient.setQueryData(
                ["tasks"],
                (tasks: ITask[]) => {
                    return tasks.map(oldTask =>
                        oldTask._id === task._id ? task : oldTask
                    );
                }
            );
        },
    });
};

export const useDeleteTask = () => {
    return useMutation({
        mutationKey: ["tasks"],
        mutationFn: (taskForm: ITask) => deleteTaskApi(taskForm),
        onSuccess: (id) => {
            queryClient.setQueryData(
                ["tasks"],
                (tasks: ITask[]) => {
                    return tasks.filter((task) => id !== task._id);
                }
            );
        },
    });
};
