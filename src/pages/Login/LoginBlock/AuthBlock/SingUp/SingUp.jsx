import {Grid} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import * as React from 'react';
import {styleSingUp} from './style';

const SingUp = () => {

    return (
        <Grid style={styleSingUp} item xs={12}>
            <Box
                sx={{
                    '& > :not(style)': {m: 1, width: '424.47px'},
                }}
                noValidate
                autoComplete="off">
                <div style={styleSingUp}>
                    <span style={styleSingUp.text}>Don’t have an account? &nbsp;</span>
                    <span style={styleSingUp.textSingUP}>Sign up</span>
                </div>
            </Box>
        </Grid>
    );
};

export default SingUp;