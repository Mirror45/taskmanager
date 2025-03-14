export interface TaskDateProps {
  value?: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (date: string) => void;
  isRecurring: boolean;
  onRepeatToggle: () => void;
}
