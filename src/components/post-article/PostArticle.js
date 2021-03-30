import React, { useState } from 'react'
import { Grid, Typography, TextField, Button} from '@material-ui/core'
import { makeAuthorizedRequest } from '../../utilities/MomentumRequests';
import AuthorDialog from './AuthorDialog';

export default function PostArticle() {

    const [postContent, setPostContent] = useState({authors: 'Test', thumbnailImage: 'Test'});
    const [authors, setAuthors] = useState([]);
    const [showAuthorDialog, setShowAuthorDialog] = useState(false);

    const onInputFieldChange = (e) => {
        setPostContent({...postContent, [e.target.name]: e.target.value});
    }

    const submitPost = () => {
        console.log({...postContent, authors: authors.join()})
        makeAuthorizedRequest('/api/inProgressBlog/create', {...postContent, authors: authors.join()});
    }

    const addAuthor = (author) => {
        setAuthors([...authors, author]);
    }

    const removeAuthor = (removedAuthor) => {
        setAuthors(authors.filter((author) => author != removedAuthor));
    }

    return (
        <React.Fragment>
            <Grid style={{width: '100%', marginTop: '2em'}} container>
                <Grid item xs={12} className='flex-center'>
                    <Typography variant='h2'>Create Blog Post</Typography>
                </Grid>
            </Grid>




            <Grid container style={{marginTop: '2em'}}>
                <Grid item xs />
                <Grid item xs={12} md={8} lg={6} style={{display: 'flex', flexDirection: 'column'}}>
                    <TextField placeholder="Title" fullWidth style={{textAlign: 'center'}} inputProps={{style: {textAlign: 'center', fontWeight: 600, fontSize: '1.5em'}}} name='title' onChange={onInputFieldChange}/>
                    <TextField placeholder="Enter Markdown Text" variant='outlined' multiline fullWidth style={{marginTop: '1em'}} name='body' onChange={onInputFieldChange}/>
            
                </Grid>
                <Grid item xs />
            </Grid>

            <Grid container style={{marginTop: '1em'}}>
                <Grid item xs={12} className='flex-center'>
                    <Button onClick={() => setShowAuthorDialog(true)}variant='contained' color='secondary' style={{marginRight: '2em'}}>Edit Authors</Button>
                    <Button onClick={submitPost} variant='contained' color='primary'>Submit</Button>
                </Grid>
            </Grid>

            <AuthorDialog open={showAuthorDialog} onClose={() => setShowAuthorDialog(false)} authors={authors} addAuthor={addAuthor} removeAuthor={removeAuthor} />
        </React.Fragment>
    )
}
