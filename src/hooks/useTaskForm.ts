import React, { useState, useEffect } from 'react';
import { TaskType } from '../types/task-types';

export const useTaskForm = (task?: TaskType) => {
  // Initializing states depending on whether we are editing a task or creating a new one
  const [text, setText] = useState(task ? task.description : '');
  const [selectedDays, setSelectedDays] = useState<string[]>(
    task && task.repeating_days
      ? Object.entries(task.repeating_days)
          .filter(([isSelected]) => isSelected)
          .map(([day]) => day)
      : [],
  );
  const [selectedColor, setSelectedColor] = useState(task ? task.color : 'black');
  const [taskDate, setTaskDate] = useState<string>(task?.due_date || '');
  const [isRecurring, setIsRecurring] = useState<boolean>(task?.due_date ? true : false);
  const [isRepeatVisible, setIsRepeatVisible] = useState<boolean>(selectedDays.length > 0);

  // When the task changes (if a task is provided), update the states
  useEffect(() => {
    if (task) {
      setText(task.description);
      setSelectedDays(
        Object.entries(task.repeating_days)
          .filter(([isSelected]) => isSelected)
          .map(([day]) => day),
      );
      setSelectedColor(task.color);
      setTaskDate(task.due_date || '');
      setIsRecurring(!!task.due_date);
    }
  }, [task]);

  useEffect(() => {
    setIsRepeatVisible(selectedDays.length > 0);
  }, [selectedDays.length]);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value);
  const handleDayChange = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day],
    );
  };
  const handleColorChange = (color: string) => setSelectedColor(color);
  const handleRepeatToggle = () => setIsRecurring((prev) => !prev);
  const toggleRepeatVisibility = () => setIsRepeatVisible((prev) => !prev);

  return {
    text,
    setText,
    selectedDays,
    setSelectedDays,
    selectedColor,
    setSelectedColor,
    taskDate,
    setTaskDate,
    isRecurring,
    setIsRecurring,
    isRepeatVisible,
    setIsRepeatVisible,
    handleTextChange,
    handleDayChange,
    handleColorChange,
    handleRepeatToggle,
    toggleRepeatVisibility,
  };
};
