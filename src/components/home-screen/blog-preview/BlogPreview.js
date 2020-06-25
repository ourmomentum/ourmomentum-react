import { Grid, Grow, Icon } from '@material-ui/core';
import React, { useEffect, useState, useRef } from 'react';
import './BlogPreview.css';
import DesktopBlogPreview from './DesktopBlogPreview';
import CardsContainer from './CardsContainer';
import NextIcon from '@material-ui/icons/NavigateNext'
import PreviousIcon from '@material-ui/icons/NavigateBefore'

export default function BlogPreview(props) {
    const [actualPage, setActualPage] = useState(0);
    const { posts } = props;
    const incrementPage = () => {
        if (actualPage < posts.length - 1) {
            setActualPage(actualPage + 1);
        } else {
            setActualPage(0);
        }
    }

    const decrementPage = () => {
        if (actualPage > 0) {
            setActualPage(actualPage - 1);
        } else {
            setActualPage(posts.length - 1);
        }
    }


    return (
        <React.Fragment>
            <Grid item xs={1} className='prev-next'>
                <Icon style={{width: '50%', height: 'auto'}} onClick={decrementPage}><PreviousIcon style={{width: '100%', height: 'auto'}}/></Icon>
            </Grid>
            <Grid item xs={10} style={{marginTop: props.margin}}>
                <Grid container>
                        <CardsContainer cardNum={actualPage}>
                            {props.posts.map((el, i) => (type) => <DesktopBlogPreview post={el} key={i} type={type}> Hello world!</DesktopBlogPreview>)}
                        </CardsContainer>
                </Grid>
            </Grid>
            <Grid item xs={1} className='prev-next'>
                <Icon style={{width: '50%', height: 'auto'}} onClick={incrementPage}><NextIcon style={{width: '100%', height: 'auto'}}/></Icon>
            </Grid>
        </React.Fragment>
    )
}
