import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React, { memo, FC } from 'react';
import { PtTableInformationModel } from '../../models/table-cell';
import { Grid } from '@mui/material';

type PtCardProps = { information?: PtTableInformationModel };

const PtCard: FC<PtCardProps> = ({ information }) => {
    console.log(information);
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant="h6" color="text.secondary">
                    {information?.sign}
                </Typography>
                <Grid container>
                    <Grid xs={4}>
                        <Typography sx={{ fontSize: 14 }}>Weight</Typography>
                        <Typography sx={{ fontSize: 14 }}>Number</Typography>
                        <Typography sx={{ fontSize: 14 }}>Name</Typography>
                        <Typography sx={{ fontSize: 14 }}>Valence</Typography>
                        <Typography sx={{ fontSize: 14 }}>Group</Typography>
                        <Typography sx={{ fontSize: 14 }}>State</Typography>
                        <Typography sx={{ fontSize: 14 }}>Electronic</Typography>
                        <Typography sx={{ fontSize: 14 }}>Melt</Typography>
                        <Typography sx={{ fontSize: 14 }}>Boil</Typography>
                    </Grid>
                    <Grid xs={8}>
                        <Typography variant="body1" sx={{ fontSize: 14 }} color="text.secondary">
                            {information?.weight}
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: 14 }} color="text.secondary">
                            {information?.orderNumber}
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: 14 }} color="text.secondary">
                            {information?.name}
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: 14 }} color="text.secondary">
                            {information?.valence}
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: 14 }} color="text.secondary">
                            {information?.group}
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: 14 }} color="text.secondary">
                            {information?.state}
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: 14 }} color="text.secondary">
                            {information?.electronic}
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: 14 }} color="text.secondary">
                            {information?.tMelt}
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: 14 }} color="text.secondary">
                            {information?.tBoil}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default memo(PtCard);
