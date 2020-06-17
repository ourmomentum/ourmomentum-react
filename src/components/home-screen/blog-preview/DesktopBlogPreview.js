import React, { useState } from 'react'
import { Paper, Grid, Button, Divider, Icon } from '@material-ui/core'
import NextIcon from '@material-ui/icons/NavigateNext'
import PreviousIcon from '@material-ui/icons/NavigateBefore'
import { Pagination } from '@material-ui/lab'
import DesktopBlogContent from './DesktopBlogContent'


export default function DesktopBlogPreview(props) {

    const [actualPage, setActualPage] = useState(0);

    const handlePageChange = (event, value) => {
        console.log(value);
        setActualPage(value - 1);
    }
    const incrementPage = () => {
        if (actualPage < props.posts.length - 1) {
            setActualPage(actualPage + 1);
        } else {
            setActualPage(0);
        }
    }

    const decrementPage = () => {
        if (actualPage > 0) {
            setActualPage(actualPage - 1);
        } else {
            setActualPage(props.posts.length - 1);
        }
    }


    return (
        <Paper style={{borderRadius: "1em", padding: "2em 0", width: "100%"}} elevation={5}>
            <Grid container style={{}}>
                <Grid item xs={1} className='prev-next'>
                    <Icon style={{width: '50%', height: 'auto'}} onClick={decrementPage}><PreviousIcon style={{width: '100%', height: 'auto'}}/></Icon>
                </Grid>
                    <DesktopBlogContent currentPost = {props.posts[0]} newPost={props.posts[actualPage]}/>
                <Grid item xs={1} className='prev-next'>
                    <Icon style={{width: '50%', height: 'auto'}} onClick={incrementPage}><NextIcon style={{width: '100%', height: 'auto'}}/></Icon>
                </Grid>
            </Grid>
            <Divider style={{marginTop: '1em'}} />
            <Grid container>
                <Grid item xs={12} style={{display: 'flex', justifyContent: 'center', paddingTop: '1em'}}>
                    <Button style={{fontSize: '1em'}}>Read More</Button>
                </Grid>
            </Grid>
            <Grid container style={{marginTop: '0.5em'}}>
                <Grid item xs={12} style={{display: 'flex', justifyContent: 'center'}}>
                    <Pagination count={props.posts.length} onChange={handlePageChange} page={actualPage + 1} color='primary' hideNextButton hidePrevButton/>
                </Grid>
            </Grid>
        </Paper>
    )
}
