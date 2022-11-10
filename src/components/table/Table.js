import React from 'react';
import './table.scss';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
    const rows = [
        {
            id: 1143155,
            product: 'Acer Nitro 5',
            img: 'https://picsum.photos/200/300/?blur',
            customer: 'John Smith',
            date: '1 March',
            amount: 785,
            method: 'Cash on Delivery',
            status: 'Approved',
        },
        {
            id: 2235235,
            product: 'Playstation 5',
            img: 'https://picsum.photos/seed/picsum/200/300',
            customer: 'Micheal Doe',
            date: '1 March',
            amount: 900,
            method: 'Online Payment',
            status: 'Pending',
        },
        {
            id: 2342353,
            product: 'Pedragon S101',
            img: 'https://picsum.photos/seed/picsum/200/300',
            customer: 'John Smith',
            date: '1 March',
            amount: 35,
            method: 'Cash on Delivery',
            status: 'Pending',
        },
        {
            id: 2357741,
            product: 'Razer Blade 15',
            img: 'https://picsum.photos/seed/picsum/200/300',
            customer: 'Jane Smith',
            date: '1 March',
            amount: 920,
            method: 'Online',
            status: 'Approved',
        },
        {
            id: 2341355,
            product: 'ASUS ROG Strix',
            img: 'https://picsum.photos/200/300?grayscale',
            customer: 'Harold Carol',
            date: '1 March',
            amount: 2000,
            method: 'Online',
            status: 'Pending',
        },
    ];

    return (
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className="tableCel">Tracking ID</TableCell>
                        <TableCell className="tableCel">Product</TableCell>
                        <TableCell className="tableCel">Customer</TableCell>
                        <TableCell className="tableCel">Date</TableCell>
                        <TableCell className="tableCel">Amount</TableCell>
                        <TableCell className="tableCel">Payment Method</TableCell>
                        <TableCell className="tableCel">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell className="tableCel">{row.id}</TableCell>
                            <TableCell className="tableCel">
                                <div className="cellWrapper">
                                    <img src={row.img} alt="" className="image" />
                                    {row.product}
                                </div>
                            </TableCell>
                            <TableCell className="tableCel">{row.customer}</TableCell>
                            <TableCell className="tableCel">{row.date}</TableCell>
                            <TableCell className="tableCel">{row.amount}</TableCell>
                            <TableCell className="tableCel">{row.method}</TableCell>
                            <TableCell className="tableCel">
                                <span className={`status ${row.status}`}>{row.status}</span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default List;
