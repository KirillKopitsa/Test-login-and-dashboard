import {Button, Grid} from '@material-ui/core';
import Box from '@material-ui/core/Box';

const Questions = () => {

    const style = {
        root: {
            backgroundColor: '#FEFEFE',
            boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)',
        },
        p1: {
            fontStyle: 'Open Sans',
            fontWeight: '600',
            style: 'normal',
            fontSize: '16px',
            lineHeight: '22px',
            margin: '0px 62px 5px 33px',
            paddingTop: '20px',
        },
        p2: {
            fontStyle: 'Open Sans',
            fontWeight: '400',
            style: 'normal',
            fontSize: '13px',
            lineHeight: '17px',
            margin: '24px 62px 5px 33px',
            color: '#757474',
        },
    };

    return (
        <Grid style={style.root} item xs={12}>
            <Box>
                <p style={style.p1}>My Device</p>
                <p style={style.p2}> Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex.</p>
                <div style={{display: 'flex', margin: '0px 38px 14px ,0px'}}>
                    <div style={{flex: '1'}}></div>
                    <div style={{margin: '0px 38px 14px 0px'}}><Button
                        variant={'outlined'} color={'warning'}> Open
                        Ticket</Button></div>
                </div>
            </Box>
        </Grid>

    );
};
export default Questions;