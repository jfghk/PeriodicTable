import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FC, useState } from 'react';

type PtSearchProps = {
    value: string;
    onChange: (value: string) => void;
};

const PTSearch: FC<PtSearchProps> = ({ value, onChange }) => {
    const handleChange = (event: any) => {
        console.log(event.target.value);
        onChange(event.target.value);
    };
    return <TextField label="Search" variant="outlined" value={value} onChange={handleChange} fullWidth />;
};

export default PTSearch;
