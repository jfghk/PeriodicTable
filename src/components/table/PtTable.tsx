import { Box } from '@mui/material';
import React, { memo, FC } from 'react';
import PtTableCell from '../cell/PtTableCell';
import { PtTableCellModel, PtTableDataModel, PtTableInformationModel } from '../../models/table-cell';
import components from '../../data/components.json';

type PtTableProps = {
    onCellClick: (information: PtTableInformationModel) => void;
    search: string;
    selectedOrderNumber?: number;
};

const PtTable: FC<PtTableProps> = ({ onCellClick, search, selectedOrderNumber }) => {
    const data: PtTableDataModel[] = components;
    const handleClick = (information: PtTableInformationModel) => () => {
        onCellClick(information);
    };
    const cells: PtTableCellModel[] = data.map((item) => {
        console.log()
        return {    
            information: item.information,
            position: item.position,
            active: Boolean(search) && item.information.sign.toLowerCase().includes(search.toLowerCase()),
            selected: selectedOrderNumber ===  item.information.orderNumber
        }
    });
    return (
        <Box display="grid" gridTemplateRows="repeat(9, 1fr)" gridTemplateColumns="repeat(18, 1fr)" gap={0.5}>
            {/* <Box sx={{ 'grid-column-start': '1', 'grid-row-start': '1' }}>
                <PtTableCell orderNumber={1} sign="H" name="Hydrogen" weight="1.008" />
            </Box>
            <Box sx={{ 'grid-column-start': '18', 'grid-row-start': '1' }}>
                <PtTableCell orderNumber={2} sign="He" name="Helium" weight="4.0026" />
            </Box> */}
            {cells.map(({ information, position, active, selected }, index: number) => (
                <Box
                    key={index}
                    sx={{
                        'grid-column-start': `${position.column}`,
                        'grid-row-start': `${position.row}`,
                    }}
                >
                    <PtTableCell {...information} onClick={handleClick(information)} active={active} selected={selected}/>
                </Box>
            ))}
        </Box>
    );
};

export default memo(PtTable);
