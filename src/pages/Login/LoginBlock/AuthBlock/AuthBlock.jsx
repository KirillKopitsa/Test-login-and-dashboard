import {Grid} from '@material-ui/core';
import PhoneNumber from './PhoneNumber';
import PasswordComponent from './Password';
import LoginText from './Text';
import RememberComponent from './RememberAndForgot';
import LoginButton from './Button';
import SingUp from './SingUp';
import {styleAuth} from './style';

const AuthComponents = () => {
    return (
        <Grid style={styleAuth} item xs={12} sm={12} md={5}>
            <Grid  container>
                <LoginText/>
                <PhoneNumber/>
                <PasswordComponent/>
                <RememberComponent/>
                <LoginButton/>
                <SingUp/>
            </Grid>

        </Grid>
    );
};
export default AuthComponents;