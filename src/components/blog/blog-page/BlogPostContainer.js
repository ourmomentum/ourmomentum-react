import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import {BACKEND_URL} from "../../../constants/backend_info";
import { Stack, CircularProgress } from '@chakra-ui/react'
import BlogPage from "./BlogPage";
import {MOMENTUM_SIGNATURE_GREEN} from "../../../constants/colors";

function BlogPostContainer(props) {
    const { id } = useParams();
    const [postData, setPostData] = useState();

    useEffect(() => {
        axios.get(BACKEND_URL + '/api/temp/get-post/' + id)
            .then((res) => setPostData(res.data))
            .catch()
    }, [id])
    return (
        <Stack justify={'center'} w={'100%'} direction={'row'} p={8}>
            {postData ? <BlogPage post={postData}/> : <CircularProgress color={MOMENTUM_SIGNATURE_GREEN} isIndeterminate />}
        </Stack>
    );
}

export default BlogPostContainer;