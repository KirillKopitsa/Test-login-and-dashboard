import {
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core';
import {Link as RouterLink} from 'react-router-dom';

const PageMenuComponent = ({name, icon, link }) => {



    return (
        <ListItem sx={{height: '32px', marginBottom: '15px'}}>
            <ListItemButton component={RouterLink} to={link}>
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText primary={name}/>
            </ListItemButton>
        </ListItem>
    );
};
export default PageMenuComponent;