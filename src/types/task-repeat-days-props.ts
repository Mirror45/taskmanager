export interface TaskRepeatDaysProps {
  selectedDays: string[];
  // eslint-disable-next-line no-unused-vars
  onDayChange: (day: string) => void;
  isRepeatVisible: boolean;
  onToggleRepeat: () => void;
}
