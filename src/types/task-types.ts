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
  id: string; // Идентификатор задачи
  color: string; // Цвет задачи
  description: string; // Описание задачи
  due_date: string; // Дата и время выполнения задачи
  is_archived: boolean; // Флаг архивированности
  is_favorite: boolean; // Флаг избранности
  repeating_days: RepeatingDays; // Дни недели, когда задача повторяется
};
