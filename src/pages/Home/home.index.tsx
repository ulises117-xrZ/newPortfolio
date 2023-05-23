
import { Box, Grid } from '@mui/material';
import { useEffect } from 'react';


type Props = {
    name: string
};

const HomeScreen = ({ name }: Props) => {
    return (
        <Box>
            <Grid container columns={8}>
                <Grid xs={4}>
                    {name}
                </Grid>
                <Grid xs={4}>
                    Ulises Cruz
                </Grid>
            </Grid>
        </Box>
    )
}

export default HomeScreen;