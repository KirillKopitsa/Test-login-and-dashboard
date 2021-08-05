import {Grid, Paper} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import * as React from 'react';
import {styleHistory} from './style';
import OrderPart from './Part';

const HistoryComponent = () => {


    return (
        <Grid style={{marginTop: '50px'}} item xs={6}>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    '& > :not(style)': {
                        m: 1,
                        width: 456,
                        height: 280,
                    },
                }}
            >
                <Paper elevation={1}>
                    <div style={
                        {
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '24px 24px 0px 24px',
                        }
                    }>
                        <span style={styleHistory.mainText}>Orders</span>
                        <span style={styleHistory.viewAlltext}> View all</span>
                    </div>
                    <p style={styleHistory.lastOpenedText}>Last opened orders</p>

                    <OrderPart bottomline={true}/>
                    <OrderPart bottomline={true}/>
                    <OrderPart bottomline={false}/>


                </Paper>
            </Box>

        </Grid>
    );
};
export default HistoryComponent;