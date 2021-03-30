import React, { useState } from 'react'
import { Dialog, DialogTitle, Table, TableHead, TableRow, TableCell, TableContainer, TableBody, Paper, Button, IconButton, Icon, TextField, Grid } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

export default function AuthorDialog(props) {
    let {open, onClose, authors, addAuthor, removeAuthor} = props;

    const [newAuthor, setNewAuthor] = useState('');

    const addNewAuthor = () => {
        if (newAuthor && newAuthor != '') {
            addAuthor(newAuthor);
        }
    }
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>View Authors</DialogTitle>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Remove</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {authors.map((author) => (
                            <TableRow key={author}>
                                <TableCell>
                                    {author}
                                </TableCell>
                                <TableCell>
                                    <Button color='secondary' onClick={removeAuthor.bind(this, author)}>Remove</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Grid container style={{padding: '1em 2em'}}>
                    <Grid item xs={9}>
                        <TextField placeholder="New Author" onChange={e=>setNewAuthor(e.target.value)}></TextField>
                    </Grid>
                    <Grid item xs />
                    <Grid item xs={2}>
                        <IconButton style={{float: 'right'}} onClick={addNewAuthor}><Icon><AddIcon /></Icon></IconButton>
                    </Grid>

                </Grid>

            </TableContainer>
        </Dialog>
    )
}
