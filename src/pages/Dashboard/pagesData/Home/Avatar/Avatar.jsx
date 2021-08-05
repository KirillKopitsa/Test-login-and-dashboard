import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';
import {Grid, IconButton, Stack} from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';

const AvatarBlock = () => {
    const styleAvatar = {
        display:'flex',
        justifyContent:'flex-end',
        padding:'10px 40px 0px 0px',

    }

    return(
        <Grid style={styleAvatar} item xs={12}>
            <Stack direction="row" spacing={1}>
                <IconButton color={'primary'} aria-label="add to shopping cart">
                    <NotificationsIcon sx={{ width: 40, height: 20 }}/>
                </IconButton>
                <Avatar
                    alt="Remy Sharp"
                    src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
                    sx={{ width: 56, height: 56 , marginTop:'16px',}}
                />
                <IconButton color={'default'} aria-label="add to shopping cart">
                    <KeyboardArrowDownOutlinedIcon sx={{ width: 40, height: 20 }}/>
                </IconButton>
            </Stack>
        </Grid>
    )
}
export default AvatarBlock;