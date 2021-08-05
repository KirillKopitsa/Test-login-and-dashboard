import * as React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import {FormControlLabel, Grid} from '@material-ui/core';
import {styleRemember} from './style';

const RememberComponent = () => {

    return (
        <Grid style={styleRemember} item xs={12}>
            <Box
                sx={{
                    '& > :not(style)': {m: 1, width: '424.47px'},
                }}
                noValidate
                autoComplete="off"
            >
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <FormControlLabel
                        value="end"
                        control={<Checkbox
                            sx={{
                                color:
                                    '#80deea',
                                '&.Mui-checked': {
                                    color: '#80deea',
                                },
                            }}
                        />}
                        label="Remember me"
                        labelPlacement="end"
                    />
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <span
                            style={styleRemember.text}>Forgotten password ?</span>
                    </div>
                </div>

            </Box>
        </Grid>
    );

};
export default RememberComponent;