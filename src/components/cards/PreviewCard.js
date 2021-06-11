import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {Button, Flex, Heading, Image, Stack, Text} from "@chakra-ui/react";
import { MOMENTUM_SIGNATURE_GREEN} from "../../constants/colors";
import {Link} from "react-router-dom";
import ReactMarkdown from 'react-markdown'

export default function PreviewCard(props) {
    const {title, body, thumbnailImage, _id} = props.post;
    const { shouldExit, callback } = props;

    return (
            <Stack direction={'column'} boxShadow={'-10px 10px 20px #d9d9d9, 10px -10px 20px #ededed'}
                   borderRadius={'1em'} p={8} h={'100%'}>
                <Flex justify={'center'} w={'100%'} >
                    <Image src={thumbnailImage} maxH={72} w={'auto'} alt='Article Imagery' borderRadius={16}/>
                </Flex>
                <Stack pt={4}>
                <Heading textTransform={'uppercase'} textAlign={'center'} fontSize={'1.5em'}>{title}</Heading>
                    <Text>{body.substring(0, 350) + '... '}<Link to={'/post/'+_id}><Button fontWeight={'bold'} variant={'link'} color={ MOMENTUM_SIGNATURE_GREEN }>Read More</Button></Link></Text>
                </Stack>
            </Stack>
    )
}
