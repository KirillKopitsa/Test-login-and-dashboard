import {Grid} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import * as React from 'react';
import {ColorButton, styleButton} from './style';
import { Link as RouterLink } from 'react-router-dom';

const LoginButton = () => {
    return (
        <Grid item xs={12} style={styleButton}>
            <Box
                sx={{
                    '& > :not(style)': {m: 1, width: '424.47px'},
                }}
                noValidate
                autoComplete="off">
                <div>
                    <ColorButton component={RouterLink} to="/menu" fullWidth={true}>Log in</ColorButton>
                </div>
            </Box>
        </Grid>
    );
};
export default LoginButton;