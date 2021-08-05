import {Grid} from '@material-ui/core';
import PaperTicket from './TicketComponent';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SettingsBackupRestoreIcon
    from '@material-ui/icons/SettingsBackupRestore';
import CheckCircleOutlineOutlinedIcon
    from '@material-ui/icons/CheckCircleOutlineOutlined';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import {styleIconColorizer} from '../helpers';

const TicketsBlock = () => {
    const style = {

        display: 'flex',
        justifyContent: 'space-between',
        lastTicketstext: {
            fontFamily: 'Open Sans',
            fontWeight: '600',
            fontStyle: 'normal',
            fontSize: '20px',
            lineHeight: '21px',
        },
        viewStyle: {
            fontFamily: 'Open Sans',
            fontWeight: '600',
            fontStyle: 'normal',
            fontSize: '17px',
            lineHeight: '27px',
            color: '#198D99',
        },
        ticketsContainer: {
            display: 'flex',
            justifyContent: 'center',

        },
    };

    return (
        <Grid  container>

            <Grid style={style} item xs={12}>
                <div style={style.lastTicketstext}>Last tickets</div>
                <div style={style.viewStyle}>View all</div>
            </Grid>

            <Grid item xs={12}>
                <Grid container style={style.ticketsContainer}>
                    <PaperTicket icon={<AccessTimeIcon
                        sx={styleIconColorizer('#FFD6BA', '#F28123')}
                    />} text1={'10'} text2={'Open'}/>

                    <PaperTicket icon={<SettingsBackupRestoreIcon
                        sx={styleIconColorizer('#D9F0FF', '#0093F5')}
                    />} text1={'20'} text2={'In progress'}/>

                    <PaperTicket icon={<CheckCircleOutlineOutlinedIcon
                        sx={styleIconColorizer('#E4F0D0', '#069E2D')}/>}
                                 text1={'40'} text2={'Closed with SLA'}/>

                    <PaperTicket icon={<CancelOutlinedIcon
                        sx={styleIconColorizer('#FDD9D8', '#B80C09')}
                    />} text1={'04'} text2={'Canceled with SLA'}/>

                </Grid>

            </Grid>

        </Grid>

    );
};
export default TicketsBlock;