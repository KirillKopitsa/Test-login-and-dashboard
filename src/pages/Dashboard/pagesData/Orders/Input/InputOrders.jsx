import {IconButton, InputBase, Paper} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const InputComponentDashboard = ({text , button = null}) => {

    return (
        <>
            <Paper
                component="form"
                sx={{
                    p: '2px 4px',
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                }}
            >

                <InputBase
                    sx={{ml: 1, flex: 1}}
                    placeholder={text}
                    inputProps={{'aria-label': `${text}`}}
                />
                <IconButton type="submit" sx={{p: '10px'}} aria-label="search">
                    <SearchIcon/>
                </IconButton>
            </Paper>
        </>
    );
};
export default InputComponentDashboard;