
export enum TaskStatus {
    TODO = "todo",
    IN_PROGRESS = "in_progress",
    DONE = "done"
}

export interface ITask{
    _id?: string;
    title: string;
    description: string;
    status: TaskStatus | string;
    userId: string;
}
