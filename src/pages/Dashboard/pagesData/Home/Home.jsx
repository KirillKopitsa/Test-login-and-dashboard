import {Grid} from '@material-ui/core';
import AvatarBlock from './Avatar';
import NameBlock from './information/Name';
import TicketsBlock from './Tickets';
import HistoryComponent from './HistoryOpened/InformationComponent';

const HomeBoard = () => {
    const style = {
        backgroundColor: '#F5F6F6',
    };

    return (
        <Grid style={style} item xs={10}>
            <Grid container>
                <AvatarBlock/>
                <Grid item xs={10} style={{ marginLeft:'35px' }}>
                    <NameBlock/>
                    <TicketsBlock/>
                    <Grid container>
                        <HistoryComponent/>
                        <HistoryComponent/>
                    </Grid>
                </Grid>

            </Grid>
        </Grid>
    );
};
export default HomeBoard;