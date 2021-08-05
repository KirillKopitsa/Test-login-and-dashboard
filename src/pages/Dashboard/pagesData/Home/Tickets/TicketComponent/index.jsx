import {Grid, IconButton, Paper} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import * as React from 'react';

const PaperTicket = ({icon, text1, text2}) => {

    const style = {
        paper: {
            // margin: '0',
            // marginTop: '5px',
        },
        firstText: {
            marginLeft: '38px',
            marginTop: '0px',
            marginBottom: '2px',
            fontStyle: 'Open Sans',
            fontWeight: '300',
            fontSize: '28px',
            lineHeight: '29px',
        },
        secondText: {
            marginLeft: '38px',
            fontStyle: 'Open Sans',
            fontWeight: '700',
            fontSize: '18px',
            marginTop: '0px',
            lineHeight: '24.51px',
        },
    };

    return (
        <Grid item >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent:'center',
                    '& > :not(style)': {
                        m: 1,
                        width: 218,
                        height: 136,
                    },
                }}
            >
                <Paper style={style.paper} elevation={1}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                    }}>
                        <IconButton color={'default'}
                                    aria-label="add to shopping cart">
                            {icon}
                        </IconButton>
                    </div>
                    <p style={style.firstText}>{text1}</p>
                    <p style={style.secondText}>{text2}</p>
                </Paper>
            </Box>
        </Grid>
    );
};
export default PaperTicket;