import {Grid} from '@material-ui/core';
import {style} from '../style';

const NameBlock = () => {

    return (
        <Grid item style={style.root} xs={12}>
            <p style={style}>Hi Peter</p>
        </Grid>
    );
};
export default NameBlock;