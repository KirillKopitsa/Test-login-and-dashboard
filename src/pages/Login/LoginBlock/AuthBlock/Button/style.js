import {styled} from '@material-ui/core/styles';
import {Button} from '@material-ui/core';

export const styleButton = {
    display: 'flex',
    justifyContent: 'center',
};

export const ColorButton = styled(Button)(({theme}) => ({
    color: '#FEFEFE',
    backgroundColor: '#26c6da',
    height: '48px',
    fontFamily: 'Open Sans',
    '&:hover': {
        backgroundColor: '#80deea',
    },
}));