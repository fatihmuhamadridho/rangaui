import React, { useState } from 'react';
import classes from './DateInput.module.css';

interface DateInputProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  minDate?: Date;
  maxDate?: Date;
}

const DateInput = ({
  value,
  onChange,
  placeholder = 'Select date',
  className = '',
  minDate,
  maxDate,
}: DateInputProps) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(value ? new Date(value) : null);

  const toggleCalendar = () => setIsCalendarOpen((prev) => !prev);

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setIsCalendarOpen(false);
    if (onChange) {
      onChange(date.toISOString().split('T')[0]); // Format YYYY-MM-DD
    }
  };

  const renderCalendarDays = () => {
    const today = new Date();
    const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    const days: JSX.Element[] = [];

    for (let day = 1; day <= lastDayOfMonth.getDate(); day++) {
      const date = new Date(today.getFullYear(), today.getMonth(), day);
      const isDisabled = (minDate && date < minDate) || (maxDate && date > maxDate);
      const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();

      days.push(
        <div
          key={day}
          className={`${classes.calendarDay} ${
            isDisabled ? classes.disabledDay : ''
          } ${isSelected ? classes.selectedDay : ''}`}
          onClick={!isDisabled ? () => handleDateClick(date) : undefined}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  return (
    <div className={`${classes.dateInputContainer} ${className}`}>
      <div className={classes.inputBox} onClick={toggleCalendar}>
        {selectedDate ? selectedDate.toISOString().split('T')[0] : placeholder}
      </div>
      {isCalendarOpen && (
        <div className={classes.calendar}>
          <div className={classes.calendarHeader}>
            <span>{new Date().toLocaleString('default', { month: 'long' })}</span>
            <span>{new Date().getFullYear()}</span>
          </div>
          <div className={classes.calendarDays}>{renderCalendarDays()}</div>
        </div>
      )}
    </div>
  );
};

export default DateInput;
