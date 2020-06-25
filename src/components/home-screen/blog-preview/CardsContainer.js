import React, { useState, useEffect } from 'react'
import { Grid, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme} from '@material-ui/core/styles'
import { AnimatePresence } from 'framer-motion';

export default function CardsContainer(props) {
    const cardNum = props.cardNum
    const [cards, setCards] = useState([]);
    const theme = useTheme();
    const [maxCards, setMaxCards] = useState(1);
    const threeCards = useMediaQuery(theme.breakpoints.up('lg'));
    const twoCards = useMediaQuery(theme.breakpoints.up('md'));
    const [prevCard, setPrevCard] = useState(props.cardNum);

    useEffect(()=>{
        if (threeCards) {
            setMaxCards(3);
        } else if (twoCards) {
            setMaxCards(2);
        } else {
            setMaxCards(1);
        }
   
    }, [threeCards, twoCards]);



    const useStyles = makeStyles({
        card: {
            height: '100%'
        }
    })

    useEffect(()=> {
        layOutCards();
    }, [cardNum, maxCards])

    const layOutCards = () => {
        let currentCard = cardNum;
        if (props.children.length > 2){
            const cardsOrdered = [];
            for (let i = 0; i < maxCards; i++) {
                if (currentCard + i >= props.children.length) {
                    currentCard = -i;
                }
                cardsOrdered.push(props.children[currentCard + i](i))
                cardsOrdered.push(<Grid item xs />)
            }
            console.log(prevCard)
            setCards(cardsOrdered);
        } else {
            return 'Too little articles for card layout';
        }
    }
    return (
        <Grid container>
            <Grid item xs />
                    {cards}
            <Grid item xs />
        </Grid>
    )
}
