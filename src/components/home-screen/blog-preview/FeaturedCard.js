import React, { useState, useEffect } from 'react'
import { Grid, Button, Divider, Typography, hexToRgb } from '@material-ui/core'
import { motion, AnimatePresence } from 'framer-motion'

export default function FeaturedCard(props) {
    const {title, content} = props.post;
    const { shouldExit, callback } = props;


    return (
        <Grid item xs={10} md={5} xl={3} style={{justifyContent: 'flex-end', marginLeft:'2em'}}>
                <motion.div initial={{scale: 0}} transition={{duration: 0.25}} animate={{scale: shouldExit ? 0 : 1}} onAnimationComplete={(callback) ? callback : ()=>{}} positionTransition={{duration: 0.25}} style={{height: '100%'}}>
                    <div style={{borderRadius: "1.5em", height: '100%', width: "100%", marginBottom: '1em', background: '#ffffff', boxShadow: '-10px 10px 20px #d9d9d9, 10px -10px 20px #ededed'}}>
                        <Grid container style={{}}>
                            <Grid item xs={12}>
                                <img src='testim.jpg' style={{width: '100%', borderTopLeftRadius: '1em', borderTopRightRadius: '1em'}} alt='Article Imagery' />
                            </Grid>
                            <Grid item xs style={{alignItems: 'flex-start', margin: '2em 2em 0 2em'}}>
                                <Grid container>
                                    <Grid container>
                                        <Grid item xs={12} style={{display: 'flex', justifyContent: 'center'}}>
                                                <Typography variant="h5" style={{fontWeight: 'bold', textTransform:'uppercase', marginTop:'-0.5em'}}>{title}</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container style={{marginTop: '0.5em', marginBottom: '0.5em'}}>
                                        <Grid item xs={12}>
                                            <Typography variant='body1' style={{fontSize: '1em', textAlign: 'justify'}}>{content.substring(0, 350) + '...'}  <Button color='primary' style={{fontWeight:'bold'}}>Read More</Button></Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                </motion.div>
        </Grid>
    )
}
