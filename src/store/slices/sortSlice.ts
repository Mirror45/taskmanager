import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SortState } from '../../types/sort';

const initialState: SortState = {
  sortOrder: 'default',
};

const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSortOrder: (state, action: PayloadAction<'default' | 'date-up' | 'date-down'>) => {
      state.sortOrder = action.payload;
    },
    resetSortOrder: (state) => {
      state.sortOrder = 'default';
    },
  },
});

export const { setSortOrder, resetSortOrder } = sortSlice.actions;

export default sortSlice.reducer;
