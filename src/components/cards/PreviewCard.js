import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {Box, Button, Divider, Flex, Heading, Image, Stack, Text} from "@chakra-ui/react";
import {MOMENTUM_LIGHT_GREEN, MOMENTUM_SIGNATURE_GREEN} from "../../constants/colors";
import {Link} from "react-router-dom";
import ReactMarkdown from 'react-markdown'

export default function PreviewCard(props) {
    const {title, body, authors, editors, thumbnailImage, _id} = props.post;
    const { shouldExit, callback } = props;
    console.log(props.post)
    return (
            <Stack direction={'column'}
                   boxShadow={props.disableShadow ? 'none' : '-10px 10px 20px #d9d9d9, 10px -10px 20px #ededed'}
                   borderRadius={24}
                   p={8}
                   h={'100%'}
            >

                <Flex justify={'center'} w={'100%'} >
                    <Image src={thumbnailImage} maxH={72} w={'auto'} alt='Article Imagery' borderRadius={16}/>
                </Flex>
                <Stack pt={4}>
                    <Heading textTransform={'uppercase'} textAlign={'center'} fontSize={'1.5em'}>{title}</Heading>
                    <Text color={'gray.400'} textAlign={'center'} fontStyle={'oblique'} fontSize={'sm'}> Written by {authors}. Edited by {editors}.</Text>
                    <Divider />
                    <Box>
                        <Text mt={4}>{body.substring(0, 300) + '... '}<Link to={'/post/'+_id}><Button fontWeight={'bold'} variant={'link'} color={ MOMENTUM_SIGNATURE_GREEN }>Read More</Button></Link></Text>
                    </Box>
                    </Stack>
            </Stack>
    )
}
