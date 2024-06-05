// src/components/Calendar.tsx
import React, { useState } from 'react';
import { DatePicker } from '@mui/lab';
import { TextField, TextFieldProps } from '@mui/material';

const Calendar: React.FC<{ onDateChange: (date: Date | null) => void }> = ({ onDateChange }) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    return (
        <DatePicker
            value={selectedDate}
            onChange={(newValue: Date | null) => {
                setSelectedDate(newValue);
                onDateChange(newValue);
            }}
            renderInput={(params: TextFieldProps) => <TextField {...params} />}
        />
    );
};

export default Calendar;
