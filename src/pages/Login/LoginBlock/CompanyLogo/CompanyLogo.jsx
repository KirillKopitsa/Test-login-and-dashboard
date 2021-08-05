import {Grid} from '@material-ui/core';
import image from "../../../../images/loginpage/img.png"
import {styleLogo} from './style';

const ComnapyLogo = () => {
    return (
        <Grid item style={styleLogo.root} xs={12}>
            <img src={image} alt=""/>
        </Grid>
    );
};
export default ComnapyLogo;