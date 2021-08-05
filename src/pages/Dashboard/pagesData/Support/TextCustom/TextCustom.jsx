import {Grid} from '@material-ui/core';


const GreetingText = ({text , stylesText , styleBlock}) => {



    return (
        <Grid style={styleBlock} item xs={10}>
            <div>
                <span style={stylesText}>
                        {text}
                </span>
            </div>
        </Grid>
    );
};
export default GreetingText;