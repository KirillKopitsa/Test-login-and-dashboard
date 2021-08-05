import {Grid} from '@material-ui/core';
import MainImgBlock from './ImageBlock';
import MainLoginBlock from './LoginBlock';

const LoginPage = () => {
    const style = {
        height: '100vh',
    };
    return (
        <Grid style={style} container>
            <MainLoginBlock/>
            <MainImgBlock/>
        </Grid>
    );
};
export default LoginPage;