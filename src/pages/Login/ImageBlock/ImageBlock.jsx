import {Grid} from '@material-ui/core';
import {imgCompanyStyle, styleImg} from './style';
import image from '../../../images/loginpage/LoginPageImg.png';

const ImgCompany = () => {
    return (
        <Grid item xs={12} md={7}>
            <Grid style={imgCompanyStyle} item xs={12}>
                <div style={styleImg}>
                    <img
                        style={{
                            width: '706.74px',
                            height: '666px',
                        }}
                        src={image}
                        alt=""/>
                    <img alt=""/>
                </div>
            </Grid>
        </Grid>
    );
};
export default ImgCompany;