
import {Grid, IconButton} from '@material-ui/core';
import {stylePart} from '../../../Home/HistoryOpened/InformationComponent/Part/partStyle';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import * as React from 'react';

const CustomBlock = ({text}) => {

    const style = {
        root: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '10px',
            height: '88px',
            backgroundColor: '#FEFEFE',
            boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)',
        },

        p1: {
            fontStyle: 'Open Sans',
            width: '100vh',
            fontWeight: '600',
            style: 'normal',
            fontSize: '16px',
            lineHeight: '22px',
            margin: '24px 62px 5px 33px',
        },
    };

    return (
        <Grid style={style.root} item xs={12}>

            <div style={{flex: '1'}}>
                <span style={style.p1}>{text}</span>
            </div>
            <div><IconButton
                sx={{width:'32px' , height:'32px'}}
                style={stylePart.arrow} color={'primary'}
                aria-label="add to shopping cart">
                <NavigateNextIcon/>
            </IconButton></div>

        </Grid>
    );
};

export default CustomBlock;