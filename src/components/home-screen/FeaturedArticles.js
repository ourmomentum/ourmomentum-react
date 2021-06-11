import React, {useEffect, useState} from 'react'

import BlogPreview from './blog-preview/BlogPreview'
import { useTheme } from '@material-ui/core/styles';
import axios from "axios";
import {BACKEND_URL} from "../../constants/backend_info";
import {Heading, Stack} from "@chakra-ui/react";


export default function FeaturedArticles() {
    const theme = useTheme();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(BACKEND_URL + '/api/temp/get-featured')
            .then(doc => {
                setPosts(doc.data);
            })
            .catch(err => {
                console.log(err);
            })

    }, [])

    return (
        <Stack direction={'column'} spacing={8} pt={[8, 8, 16, 16, 16]}>
            <Heading as='h2' size='3xl' letterSpacing={'0.25em'} textAlign={'center'}>FEATURED ARTICLES</Heading>
            <BlogPreview margin = '2em' posts={posts} />
        </Stack>
    )
}
