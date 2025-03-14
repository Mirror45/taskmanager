export type RepeatingDays = {
  mo: boolean;
  tu: boolean;
  we: boolean;
  th: boolean;
  fr: boolean;
  sa: boolean;
  su: boolean;
};

export type TaskType = {
  isRepeat: any;
  id: string;
  color: string;
  description: string;
  due_date: string;
  is_archived: boolean;
  is_favorite: boolean;
  repeating_days: RepeatingDays;
};
