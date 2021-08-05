import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import HeightIcon from '@material-ui/icons/Height';
import {Button} from '@material-ui/core';
import {
    blueInProgressButton,
    orangeOpenButton,
    RedInProgressButton,
} from './style';

function createData(name, calories, fat, carbs, protein) {
    return {name, calories, fat, carbs, protein};
}

const rows = [
    createData('1901', 'Device order', '12.01.2021', '-', <Button
        sx={orangeOpenButton} size={'small'} variant="contained">Open</Button>),

    createData('1902', 'Contact order', '12.01.2021', '-', <Button
        sx={blueInProgressButton} size={'small'} variant="contained">In
        progress</Button>),

    createData('1903', 'Extra Contract order', '12.01.2021', '-', <Button
        sx={RedInProgressButton} size={'small'}
        variant="contained">Closed</Button>),

];

export default function DenseTable() {

    const tableStyle = {
        root: {
            backgroundColor: '#F8F8F8',
            boxShadow: '0px 0px 0px 0px',
        },
    };

    return (
        <TableContainer
            sx={tableStyle.root}
            style={{marginTop: '25px'}} component={Paper}>
            <Table sx={{minWidth: 650}} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Button size={'small'} sx={{marginLeft: '0px'}}
                                    color={'primary'} endIcon={<HeightIcon/>}>
                                Id
                            </Button>
                        </TableCell>

                        <TableCell align="right">
                            <Button size={'small'} endIcon={<HeightIcon/>}>
                                Order
                            </Button>
                        </TableCell>

                        <TableCell align="right">
                            <Button size={'small'} endIcon={<HeightIcon/>}>
                                Order Date
                            </Button>
                        </TableCell>

                        <TableCell align="right">
                            <Button size={'small'} endIcon={<HeightIcon/>}>
                                End date
                            </Button>
                        </TableCell>


                        <TableCell align="right">
                            <Button size={'small'} endIcon={<HeightIcon/>}>
                                Status
                            </Button>
                        </TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
