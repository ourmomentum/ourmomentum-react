import React, { useEffect, useState, useRef } from 'react';
import './BlogPreview.css';
import PreviewCard from '../../cards/PreviewCard';
import CardsContainer from './CardsContainer';
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { motion } from 'framer-motion';
import {Box, Center, IconButton, Stack} from "@chakra-ui/react";
import {Icon} from "@chakra-ui/icons";

export default function BlogPreviewDesktop(props) {
    const { posts, incrementPage, decrementPage, page } = props;

    return (
        <Stack w={'100%'} direction={'row'} align={'center'} p={8} spacing={8}>
                <Center w={'10%'}>
                    <IconButton aria-label={'previos-featured-post'} icon={<ArrowLeftIcon />} onClick={decrementPage} size={'lg'} />
                </Center>
                <Box w={'80%'}>
                    <CardsContainer cardNum={page}>
                        {props.posts.map((el, i) => <motion.div key={i} layout><PreviewCard post={el}/></motion.div>)}
                    </CardsContainer>
                </Box>
                <Center w={'10%'}>
                    <IconButton aria-label={'previos-featured-post'} icon={<ArrowRightIcon />} onClick={incrementPage} size={'lg'}/>
                </Center>
        </Stack>
    )
}
