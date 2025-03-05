import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { resetSortOrder } from '../store/slices/sortSlice';
import { RootState } from '../store/store';

const useResetSortOnFilterChange = () => {
  const dispatch = useAppDispatch();
  const activeFilter = useAppSelector((state: RootState) => state.filter.activeFilter);

  useEffect(() => {
    dispatch(resetSortOrder());
  }, [activeFilter, dispatch]);
};

export default useResetSortOnFilterChange;
