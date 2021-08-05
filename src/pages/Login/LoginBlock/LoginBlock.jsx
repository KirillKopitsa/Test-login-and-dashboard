import {Grid} from '@material-ui/core';
import ComnapyLogo from './CompanyLogo';
import AuthComponents from './AuthBlock';

const MainLoginBlock = () => {
    const style = {
        display: 'flex',
        justifyContent: 'center',
    };
    return (
        <Grid item xs={12} sm={12} md={5}>
            <Grid style={style} container>
                <ComnapyLogo/>
                <AuthComponents/>
            </Grid>
        </Grid>
    );
};
export default MainLoginBlock;