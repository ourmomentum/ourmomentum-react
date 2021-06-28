import React, {useEffect, useState} from 'react'

import { useTheme } from '@material-ui/core/styles';
import axios from "axios";
import {BACKEND_URL} from "../../constants/backend_info";
import {CircularProgress, Flex, Heading, Stack} from "@chakra-ui/react";
import BlogPreview from "./blog-preview/BlogPreview";
import {MOMENTUM_SIGNATURE_GREEN} from "../../constants/colors";


export default function FeaturedArticles() {
    const theme = useTheme();
    const [posts, setPosts] = useState([]);
    const [actualPage, setActualPage] = useState(0);


    const incrementPage = () => {
        if (actualPage < posts.length - 1) {
            setActualPage(actualPage => actualPage + 1);
        } else {
            setActualPage(0);
        }
    }

    const decrementPage = () => {
        if (actualPage > 0) {
            setActualPage(actualPage => actualPage - 1);
        } else {
            setActualPage(posts.length - 1);
        }
    }


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
            {posts.length === 0 ? <Flex justify={'center'}><CircularProgress isIndeterminate size={16} color={MOMENTUM_SIGNATURE_GREEN}/></Flex> : <BlogPreview posts={posts} incrementPage={incrementPage} decrementPage={decrementPage} page={actualPage} />}
        </Stack>
    )
}
