import { Stack, Typography } from '@mui/material';
import React, { memo, FC } from 'react';

type PtTableCellProps = {
    orderNumber: number;
    sign: string;
    name: string;
    weight: string;
    onClick: () => void;
    active: boolean;
    selected: boolean;
};

const PtTableCell: FC<PtTableCellProps> = ({ orderNumber, sign, name, weight, onClick, active, selected }) => {
    return (
        <Stack
            flexDirection="column"
            sx={{
                background: selected ? '#00008438' : '#00008412',
                width: '80px',
                height: '80px',
                border: active ? '2px solid red' : '2px solid transparent',
                padding: '4px',
                "&:hover": {
                    backgroundColor: '#00008438',
                    cursor: "pointer",
                    
                  }
            }}
            onClick={onClick}
        >
            <Typography variant="caption" sx={{ lineHeight: '16px' }}>
                {orderNumber}
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: '600', lineHeight: '20px' }}>
                {sign}
            </Typography>
            <Typography variant="caption" sx={{ lineHeight: '16px', letterSpacing: '-0.05em' }}>
                {name}
            </Typography>
            <Typography variant="caption" sx={{ lineHeight: '16px', letterSpacing: '-0.05em' }}>
                {weight}
            </Typography>
        </Stack>
    );
};

export default memo(PtTableCell);
