import React from "react";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function Nav () {
    return(
        <div className="Nav">
            <div className="top1">
                <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert variant="outlined" severity="info">
                        Data

                    </Alert>
                    <Alert variant="outlined" severity="warning">
                        Data
                    </Alert>
                </Stack>
            </div>

            <div className="top2">
                <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert variant="outlined" severity="info">
                        Data
                    </Alert>
                    <Alert variant="outlined" severity="warning">
                        Data
                    </Alert>
                </Stack>
            </div>

            <div className="top3">
                <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert variant="outlined" severity="info">
                        Data
                    </Alert>

                    <Alert variant="outlined" severity="warning">
                        Data
                    </Alert>
                </Stack>    
            </div>
        </div>
    );
}