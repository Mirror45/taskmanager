import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { fetchTasks } from '../store/thunks/task-thunks';

export const useTasks = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { tasks, loading, error } = useSelector((state: RootState) => state.tasks);

  useEffect(() => {
    if (!loading && tasks.length === 0) {
      dispatch(fetchTasks());
    }
  }, [dispatch, loading, tasks.length]);

  return { tasks, loading, error };
};
