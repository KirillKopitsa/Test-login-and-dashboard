import * as React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import {Grid} from '@material-ui/core';

export default function PhoneNumber() {
    const style = {
        display:'flex',
        justifyContent:'center',
    }
    return (
        <Grid style={style} item xs={12}>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': {m: 1, width: '424.47px'},
                }}
                noValidate
                autoComplete="off"
            >
                <TextField type={'number'}
                           size="small"
                           id="filled-basic"
                           label="Phone number"
                           variant="filled"/>
            </Box>
        </Grid>
    );
}