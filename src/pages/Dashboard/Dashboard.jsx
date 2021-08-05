import {Grid} from '@material-ui/core';
import MainMenuBlock from './Menu';
import HomeBoard from './pagesData/Home';
import {Redirect, Route, Switch} from 'react-router-dom';
import OrderBoard from './pagesData/Orders';
import Support from './pagesData/Support';

const Dashboard = () => {
    const style = {
        height: '100vh',
    };

    return (
        <Grid style={style} container>

            <MainMenuBlock/>

            <Switch>

                <Route path={'/menu/home'}>
                    <HomeBoard/>
                </Route>

                <Route path={'/menu/orders'}>
                    <OrderBoard/>
                </Route>

                <Route path={'/menu/support'}>
                    <Support/>
                </Route>

                <Redirect to={'/menu/home'}/>
            </Switch>

        </Grid>

    );
};
export default Dashboard;