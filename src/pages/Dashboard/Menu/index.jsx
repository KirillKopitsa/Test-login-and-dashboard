import {
    Grid, List,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ImageLogo from './Image';
import PageMenuComponent from './pages/PageComponent';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import SupportAgentIcon from '@material-ui/icons/ContactSupport';

const MainMenuBlock = () => {

    const style = {
        root: {
            height: '1024px',
        },
        pageMenu: {
            width: '32px', height: '32px',
        },
    };
    return (
        <Grid style={style.root} item xs={2}>
            <Grid container>
                <ImageLogo/>
                <Grid item xs={12}>
                    <nav
                        aria-label="main menu navigation">
                        <List>
                            <PageMenuComponent icon={<HomeIcon color={'primary'}
                                                               sx={style.pageMenu}/>}
                                               link={'/menu/home'}
                                               name={'Home'}/>
                            <PageMenuComponent
                                icon={<AddShoppingCartIcon color={'primary'}
                                                           sx={style.pageMenu}/>}
                                link={'/menu/orders'}
                                name={'Orders'}/>

                            <PageMenuComponent
                                icon={<SupportAgentIcon color={'primary'}
                                                        sx={style.pageMenu}/>}
                                link={'/menu/support'}
                                name={'Support'}/>

                            <PageMenuComponent
                                icon={<ExitToAppIcon sx={style.pageMenu}/>}
                                link={'/'}
                                name={'Log out'}/>


                        </List>
                    </nav>
                </Grid>
            </Grid>
        </Grid>
    );
};
export default MainMenuBlock;