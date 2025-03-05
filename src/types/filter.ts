export enum FilterType {
  // eslint-disable-next-line no-unused-vars
  All = 'all',
  // eslint-disable-next-line no-unused-vars
  Overdue = 'overdue',
  // eslint-disable-next-line no-unused-vars
  Today = 'today',
  // eslint-disable-next-line no-unused-vars
  Favorites = 'favorites',
  // eslint-disable-next-line no-unused-vars
  Repeating = 'repeating',
  // eslint-disable-next-line no-unused-vars
  Archive = 'archive',
}

export interface FilterState {
  activeFilter: FilterType;
}

export const initialFilterState: FilterState = {
  activeFilter: FilterType.All,
};
