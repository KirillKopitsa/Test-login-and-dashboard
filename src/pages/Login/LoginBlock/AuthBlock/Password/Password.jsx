import * as React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import {Grid} from '@material-ui/core';

export default function PasswordComponent() {
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
                <TextField type={'password'}
                           size="small"
                           id="password-login"
                           label="Enter your password"
                           variant="filled"/>
            </Box>
        </Grid>
    );
}