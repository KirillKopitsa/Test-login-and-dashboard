import {Grid} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

const PaperImage = ({img , text}) => {
    const style = {
        container:{
            display: 'flex',
            justifyContent: 'center',

        },
        img: {
            height: '96px',
            width: '80px',
        },
        paper : {
            display:'flex',
            justifyContent:'center',
            borderRadius:'0px',
            flexDirection:'column',
            alignItems:'center',
            height: '160px',
            width: '164px',
        },
        text:{
            fontStyle:'Open Sans' ,
            fontWeight:'600' ,
            style:'normal',
            fontSize:'16px',
            lineHeight:'21px',
        }
    }

    return (
        <Grid item style={style.container} xs={3}>
            <Paper style={style.paper} elevation={0}>
                <div><img style={style.img} src={img} alt=""/></div>
                <div><span style={style.text}>{text}</span></div>

            </Paper>
        </Grid>
    )
}
export default PaperImage;