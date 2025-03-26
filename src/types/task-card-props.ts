import { TaskType } from './task-types';

export interface TaskCardProps {
  task: TaskType;
  onEdit: () => void;
}
