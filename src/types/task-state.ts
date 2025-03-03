import { TaskType } from './task-types';

export interface TaskState {
  tasks: TaskType[];
  loading: boolean;
  error: string | null;
}

export const initialTaskState: TaskState = {
  tasks: [],
  loading: false,
  error: null,
};
