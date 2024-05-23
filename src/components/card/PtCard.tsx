import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React, { memo, FC } from 'react';
import { PtTableInformationModel } from '../../models/table-cell';

type PtCardProps = { information?: PtTableInformationModel };

const PtCard: FC<PtCardProps> = ({ information }) => {
    console.log(information);
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    <Typography variant="h6">{information?.sign}</Typography>
                    <Typography variant="body1">{information?.weight}</Typography>
                    <Typography variant="body1">{information?.orderNumber}</Typography>
                    <Typography variant="body1">{information?.name}</Typography>
                    <Typography variant="body1">{information?.valence}</Typography>
                    <Typography variant="body1">{information?.group}</Typography>
                    <Typography variant="body1">{information?.state}</Typography>
                    <Typography variant="body1">{information?.electronic}</Typography>
                    <Typography variant="body1">{information?.tMelt}</Typography>
                    <Typography variant="body1">{information?.tBoil}</Typography>
                </Typography>
            </CardContent>
        </Card>
    );
};

export default memo(PtCard);
