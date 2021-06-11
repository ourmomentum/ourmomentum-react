import React, { useState, useEffect } from 'react'
import { Grid, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme} from '@material-ui/core/styles'
import {AnimatePresence, AnimateSharedLayout} from 'framer-motion';
import {Button, SimpleGrid} from "@chakra-ui/react";


export default function CardsContainer(props) {
    const cardNum = props.cardNum
    const [prevNum, setPrevNum] = useState(props.cardNum);
    const [cards, setCards] = useState([]);
    const theme = useTheme();
    const [maxCards, setMaxCards] = useState(1);
    const threeCards = useMediaQuery(theme.breakpoints.up('xl'));
    const twoCards = useMediaQuery(theme.breakpoints.up('md'));

    useEffect(()=>{
        if (threeCards) {
            setMaxCards(3);
        } else if (twoCards) {
            setMaxCards(2);
        } else {
            setMaxCards(1);
        }
   
    }, [threeCards, twoCards]);

    useEffect(() => {
        const lenCards = props.children.length;
        const changedCards = [];
        for (let i = 0; i < maxCards; i++) {
            if (cardNum + i < lenCards) {
                changedCards.push(props.children[cardNum + i]);
            } else {
                changedCards.push(props.children[cardNum + i - lenCards]);
            }

        }
        setCards(changedCards);
    }, [props.children, props.cardNum])


    return (
        <SimpleGrid columns={[1, 1, 2, 3]} spacing={16}>
                {cards}
        </SimpleGrid>
    )
}
