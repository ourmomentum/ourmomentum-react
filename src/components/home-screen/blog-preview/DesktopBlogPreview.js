import React, { useState, useEffect } from 'react'
import { Paper, Grid, Button, Divider, Icon } from '@material-ui/core'
import DesktopBlogContent from './FeaturedCard'
import { motion, AnimatePresence } from 'framer-motion'


export default function DesktopBlogPreview(props) {

    const { type } = props;
    const [rotation, setRotation] = useState(0);

    useEffect(()=>{
        if (type === 0) {
            setRotation(-45);
        } else if (type === 2) {
            setRotation(45);
        }
    }, [])

    return (
        <Grid item xs={10} md={5} lg={3}>
                <motion.div initial={{scale: 0}} animate={{scale: 1}} transition={{}} positionTransition={{duration: 0.25}} style={{height: '100%'}}>
                    <Paper style={{borderRadius: "1em", height: '100%', width: "100%", marginBottom: '1em'}} elevation={5}>
                        <Grid container style={{}}>
                                <DesktopBlogContent post={props.post}/>
                        </Grid>
                    </Paper>
                </motion.div>
        </Grid>
    )
}
