import { Box } from '@mui/material';
import  { memo, FC } from 'react';
import PtTableCell from '../cell/PtTableCell';
import { PtTableCellModel,  PtTableInformationModel } from '../../models/table-cell';


type PtTableProps = {
    onCellClick: (information: PtTableInformationModel) => void;
    cells: PtTableCellModel[];
};

const PtTable: FC<PtTableProps> = ({ onCellClick, cells}) => {
    const handleClick = (information: PtTableInformationModel) => () => {
        onCellClick(information);
    };
    return (
        <Box display="grid" gridTemplateRows="repeat(9, 1fr)" gridTemplateColumns="repeat(18, 1fr)" gap={0.5}>
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
