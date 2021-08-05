import {
    Grid,

} from '@material-ui/core';
import AvatarBlock from '../Home/Avatar';
import InputComponentDashboard from './Input';
import DenseTable from './Table';




const OrdersBoard = () => {
    const style = {
        backgroundColor: '#F5F6F6',
    };
    return (
        <Grid style={style} item xs={10}>
            <Grid style={{marginLeft:'50px'}} container>
                <AvatarBlock/>
                <Grid item xs={10}>
                    <h3>All Orders</h3>
                    <InputComponentDashboard text={'Search order'}/>
                    <DenseTable/>
                </Grid>
            </Grid>
        </Grid>

    );
};
export default OrdersBoard;