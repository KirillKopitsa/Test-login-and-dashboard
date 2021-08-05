import {Grid} from '@material-ui/core';
import imageLogo from '../../../../images/loginpage/img.png';

const ImageLogo = () => {
    const style = {
        img: {
            width: '204.47px',
            height: '64px',
            marginLeft: '22px',
            marginTop: '16px',
        },
    };

    return (
        <Grid item xs={12}>
            <img style={style.img} src={imageLogo} alt=""/>
        </Grid>
    )
}
export default ImageLogo;