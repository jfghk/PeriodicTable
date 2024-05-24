import PTGrid from './components/grid/PtGrid';
import { AppBar, Box, Container, CssBaseline, Toolbar, Typography } from '@mui/material';

function App() {
    return (
        <>
            <CssBaseline />
            <div className="App">
                <AppBar position="static">
                    <Container maxWidth={false}>
                        <Toolbar disableGutters>
                            <Typography>Pt Table</Typography>
                        </Toolbar>
                    </Container>
                </AppBar>
                <Container maxWidth={false}>
                  <Box pt={2}>
                    <PTGrid></PTGrid>
                  </Box>
                </Container>
            </div>
        </>
    );
}

export default App;
