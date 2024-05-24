import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PTCard from '../card/PtCard';
import PTSearch from '../text-field/PtSearch';
import PtTableCell from '../cell/PtTableCell';
import PtTable from '../table/PtTable';
import { PtTableCellModel, PtTableDataModel, PtTableInformationModel } from '../../models/table-cell';
import { useState } from 'react';
import components from '../../data/components.json';

function PTGrid() {
    const data: PtTableDataModel[] = components;

    const [cellInformation, setCellInformation] = useState<PtTableInformationModel>(data[0].information);
    const [searchString, setSearchString] = useState('')

    const handleCellClick = (information: PtTableInformationModel) => {
        setCellInformation(information);
    };
    const handleSearchChange = (value: string) => {
        setSearchString(value)
    }
       
    
    const cells: PtTableCellModel[] = data.map((item) => {
        return {    
            information: item.information,
            position: item.position,
            active: Boolean(searchString) && item.information.sign.toLowerCase().includes(searchString.toLowerCase()),
            selected: cellInformation?.orderNumber ===  item.information.orderNumber
        }
    });
    return (
        <Grid container spacing={2}>
            <Grid item xs={2}>
                <PTSearch value={searchString} onChange={handleSearchChange}/>
                <Box marginTop={2}><PTCard information={cellInformation}/></Box>
            </Grid>
            <Grid item xs={10}>
                <PtTable onCellClick={handleCellClick} cells={cells}/>
            </Grid>
        </Grid>
    );
}
export default PTGrid;
