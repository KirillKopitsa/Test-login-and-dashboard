import {IconButton} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import * as React from 'react';
import {stylePart} from './partStyle';

const OrderPart = ({bottomline}) => {
    return (
        <div style={
            {
                borderBottom: bottomline ? '1px solid #E5E5E5' : '',
                ...stylePart.root
            }}>
            <div>
                <p style={stylePart.orderText}>Order #1212 Iphone</p>
                <p style={stylePart.bottomText}>Open data</p>
            </div>

            <div><IconButton
                sx={{width:'32px' , height:'32px'}}
                style={stylePart.arrow} color={'primary'}
                aria-label="add to shopping cart">
                <NavigateNextIcon/>
            </IconButton></div>
        </div>
    );
};

export default OrderPart;