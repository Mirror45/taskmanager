import { TaskType } from './task-types';

export interface TaskState {
  tasks: TaskType[];
  loading: boolean;
  error: string | null;
  editTaskId: string | null;
  isAddingTask: boolean;
}

export const initialTaskState: TaskState = {
  tasks: [],
  loading: false,
  error: null,
  editTaskId: null,
  isAddingTask: false,
};
