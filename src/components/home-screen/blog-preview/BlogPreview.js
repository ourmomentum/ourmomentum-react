import React, { useEffect, useState, useRef } from 'react';
import './BlogPreview.css';
import PreviewCard from '../../cards/PreviewCard';
import CardsContainer from './CardsContainer';
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { motion } from 'framer-motion';
import {Box, Center, IconButton, Stack} from "@chakra-ui/react";
import {Icon} from "@chakra-ui/icons";

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
        <Stack w={'100%'} direction={'row'} align={'center'} p={8} spacing={8}>
                <Center w={'10%'}>
                    <IconButton aria-label={'previos-featured-post'} icon={<ArrowLeftIcon />} onClick={decrementPage} size={'lg'} />
                </Center>
                <Box w={'80%'}>
                    <CardsContainer cardNum={actualPage}>
                        {props.posts.map((el, i) => <motion.div key={i} layout><PreviewCard post={el}/></motion.div>)}
                    </CardsContainer>
                </Box>
                <Center w={'10%'}>
                    <IconButton aria-label={'previos-featured-post'} icon={<ArrowRightIcon />} onClick={incrementPage} size={'lg'}/>
                </Center>
        </Stack>
    )
}
