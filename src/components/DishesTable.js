import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const columns = [
    { id: 'dishName', label: 'Nombre', minWidth: 170 },
    { id: 'dishDescription', label: 'Descripcion Corta', minWidth: 100 },
    { id: 'imageUrl', label: 'URL Imagen', minWidth: 100 },
    { id: 'pricing', label: 'Precio', minWidth: 100 },
    { id: 'edit', label: 'Editar', minWidth: 100 },
    { id: 'delete', label: 'Eliminar', minWidth: 100 },
];

const useStyles = makeStyles({
    root: {
        width: '100%',
        marginTop: "24px"
    },
    tableWrapper: {
        maxHeight: 440,
        overflow: 'auto',
    },
});

export default function DishesTable({ rows }) {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <div className={classes.tableWrapper}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map(column => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.length > 0 && rows.map(row => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    {columns.map(column => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} >
                                                {value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </div>
        </Paper>
    );
}