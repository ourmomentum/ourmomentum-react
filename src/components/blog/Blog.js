// HELP
import React, {useEffect, useState} from 'react';
import MomentumFooter from '../footer/MomentumFooter';
import { useTheme } from '@material-ui/core/styles';
import { BrowserRouter, Route } from 'react-router-dom';
import {SimpleGrid, Box, Flex, Heading, Stack, Spacer, Center, Button, Alert, AlertIcon} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import axios from "axios";
import {BACKEND_URL} from "../../constants/backend_info";
import {MOMENTUM_SIGNATURE_GREEN} from "../../constants/colors";
import PreviewCard from "../cards/PreviewCard";

export default function Blog(){
    const [currentArticleNumber, setCurrentArticleNumber] = useState(0);
    const [articles, setArticles] = useState([]);
    const [doneWithPosts, setDoneWithPosts] = useState(false);
    const [loadingMorePosts, setLoadingMorePosts] = useState(false);

    useEffect(() => {
        getMorePosts();
    }, [])

    const getMorePosts = () => {
        setLoadingMorePosts(true);
        axios.get(BACKEND_URL + '/api/temp/get-posts/' + currentArticleNumber).then(res => {
            if (res.data.length === 0) {
                setDoneWithPosts(true);
                return;
            }
            setCurrentArticleNumber(articles.length + res.data.length);
            setArticles([...articles, ...res.data]);
        }).catch(err => {
            console.log(err);
        })
            .finally(() => setLoadingMorePosts(false));

    }

    return(
        <Stack direction={'column'} width={'100%'} align={'center'} spacing={16} py={16}>
            <Heading textAlign={'center'}>View Our Latest Blog Posts Here!</Heading>
            <SimpleGrid columns={[1, 1, 1, 2, 3]} w={'80%'} spacing={16}>
                {articles.map((e, i) => {
                    return <PreviewCard post={e} key={i} />
                })}
            </SimpleGrid>
            <Center w={'100%'}>
                {!doneWithPosts ?
                    <Button color={MOMENTUM_SIGNATURE_GREEN} onClick={getMorePosts} isLoading={loadingMorePosts}>Get
                        More Posts</Button>
                    :
                    <Alert status={'success'} w={['90%', '90%', '85%', '60%', '40%']}>
                        <AlertIcon/>
                        Congratulations! You have reached the end of our posts!
                    </Alert>
                }
            </Center>
        </Stack>
    );
}
