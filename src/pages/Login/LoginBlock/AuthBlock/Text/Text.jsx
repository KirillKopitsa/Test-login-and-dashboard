import {Grid} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import * as React from 'react';
import {styleText} from './style';

const LoginText = ( ) => {
    return(
        <Grid item xs={12} style={styleText}>
            <Box
                sx={{
                    '& > :not(style)': {m: 1, width: '424.47px'},
                }}
                noValidate
                autoComplete="off"
            >
                <div style={styleText.text}>
                    Log in
                </div>
            </Box>
        </Grid>
    )
}

export default LoginText;