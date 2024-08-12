import React from "react"
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function LeftBar() {
    return(
        <div className="left">
                <Alert variant="outlined" severity="info">
                    <h1>Heading</h1>
                </Alert>
            <Stack sx={{ width: '100%' }} spacing={3}>
                <Alert variant="outlined" severity="info">
                    Limpopo
                </Alert>
                <Alert variant="outlined" severity="info">
                    North West
                </Alert>
                <Alert variant="outlined" severity="info">
                    Northern Capes
                </Alert>
                <Alert variant="outlined" severity="info">
                    Eastern Capes
                </Alert>
                <Alert variant="outlined" severity="info">
                    Free State
                </Alert>
                <Alert variant="outlined" severity="info">
                    Mpumalanga
                </Alert>
            </Stack>
        </div>
    );
}