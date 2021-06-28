import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import ContactForm from './ContactForm'
import {Flex, Heading, Link, Stack, Text, Button, LinkOverlay, Divider} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { MOMENTUM_SIGNATURE_GREEN} from "../../constants/colors";


export default function Contact(){
  return (
      <Flex w={'100%'} justify={'center'}>
        <Stack direction={'column'} aling={'center'} px={8} w={['100%', '90%', '80%', '65%', '50%']} spacing={8} py={8} textAlign={'center'} align={'center'}>
          <Heading size={"3xl"} fontStyle={'bold'}>
          Contact Us
          </Heading>
          <Divider />
            <Stack direction={'row'} spacing={2} align={'center'} justify={'center'}>
              <EmailIcon color={MOMENTUM_SIGNATURE_GREEN} />
              <Link href={'mailto:contact@ourmomentum.org'} color={MOMENTUM_SIGNATURE_GREEN}><i>contact@ourmomentum.org</i></Link>
            </Stack>
            <Text>
              If you have any questions, comments or feedback, please let us know here! Someone from our team will respond as soon as possible!
            </Text>

            <Text fontStyle={'italic'} fontSize={'sm'}>
              ( PS – If you want to tell our team how good looking they are, that’s ok too :) )
            </Text>
            <Stack direction={'column'} spacing={8} w={['100%', '90%', '75%']} align={'center'}>
              <a href={'https://www.instagram.com/momentumagazine/?hl=en'} style={{width: '100%'}} target={'_blank'}>
                <Button colorScheme={'pink'} color={'white'} w={'100%'} >
                  <Typography variant="subtitle1">Instagram</Typography> <InstagramIcon  fontSize="default" style={{marginLeft: "5px"}}/>
                </Button>
              </a>
              <a href={'https://twitter.com/ourmomentumag'} isExternal style={{width: '100%'}} target={'_blank'}>
                <Button colorScheme={'twitter'} w={'100%'}>
                  <Typography variant="subtitle1">Twitter</Typography> <TwitterIcon  fontSize="default" style={{marginLeft: "5px"}}/>
                </Button>
              </a>
              <a href={'https://www.linkedin.com/company/momentummagazine/'} style={{width: '100%'}} target={'_blank'}>
                <Button colorScheme={'linkedin'} w={'100%'}>
                <Typography variant="subtitle1">LinkedIn</Typography> <LinkedInIcon  fontSize="default" style={{marginLeft: "5px"}}/>
              </Button>
              </a>
            </Stack>
        </Stack>
      </Flex>
      )
}
