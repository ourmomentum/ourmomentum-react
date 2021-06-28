import React from 'react';
import { Grid, Typography } from '@material-ui/core'
import './BlogPage.css'
import { useTheme } from '@material-ui/core/styles';
import {Box, Divider, Flex, Heading, Image, Stack, Text} from "@chakra-ui/react";
import ReactMarkdown from 'react-markdown'




export default function BlogPage(props){

  const {title, body, date, authors, editors, artists, link, thumbnailImage} = props.post;
  console.log(body);




  // const element = <Typography variant="h1" style={{fontWeight:'bold', textAlign: 'center'}}> {titleName} </Typography>

    return(
      // <h4> Issue 1: Eureka </h4>
        <Flex justify={'center'} w={'100%'}>
            <Stack direction={'column'} align={'center'} spacing={8} w={['100%', '90%', '80%', '60%']}>
              <Heading variant="h2" textAlign={'center'} fontSize={['2em', '2.5em', '2.5em', '3em']}> {title} </Heading>
                <Image src={thumbnailImage} maxH={96} alt="img" borderRadius={8} />
              <Text style={{fontStyle: "oblique", textAlign: 'center'}}> {'Written by ' + authors +'. ' + 'Edited by ' + editors + '.' + ((artists) ? ' Artwork by ' + artists + '.' : '')}</Text>
              <Divider w={'40%'} />


                    <Box w={'100%'} py={8} className={'blog-body-container'}>
                        <Text color={'#444444'} fontSize={'1.2em'}>
                          {body.split('\n').map((e, i) => <ReactMarkdown skipHtml>{e}</ReactMarkdown>)}
                        </Text>
                    </Box>
            </Stack>
        </Flex>
    );
}
