'use client';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';
import { useState } from 'react';


export default function DateReserve() {
    const [date, setDate] = useState<Dayjs | null>(null); 

    return (
        <div style={{ padding: '10px', maxWidth: '300px' }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker 
            
            value={date}
            onChange={(newValue)=>{setDate(newValue);}}/>
        </LocalizationProvider>

        </div>
    );
}

