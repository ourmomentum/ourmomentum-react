import React from 'react'
import { Grid, Typography, CardMedia } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles';

export default function EditorsNote() {
    const theme = useTheme();

    return (
        <div>    
            <Grid container>
                <Grid item xs={12} style={{display: 'flex', justifyContent: 'center', paddingTop:'6em', paddingBottom:'0em'}}>
                    <Typography variant='h4' style={{fontWeight:'bold', letterSpacing: '0.25em'}}>A NOTE FROM OUR EDITOR</Typography>
                </Grid>
            </Grid>

            <Grid container>
                <Grid item xs />    
                <Grid item xs={6} style={{display: 'flex', justifyContent: 'left', paddingTop:'3em', paddingBottom:'0em'}}>
                    <Typography variant='body1' style={{textAlign:'justify'}}>
                        Dear Reader,<br /><br />
                        <span style = {{color: '#51AF9D', fontWeight:'bold', float: 'left', fontSize: '3em', lineHeight: '1em', /*paddingTop: '4px', padding-right: '8px';*/  paddingRight: '0.15em'}}>W</span>
                        <span style={{fontWeight:'bold', fontStyle:'italic'}}>hat does it mean to be human?</span> This perplexing philosophical vertigo never fails to leave us reeling. It is a question that entails no easy answer, yet one that I believe we must pursue through the art of storytelling. 
                        <br /><br />
                        Humanity is shaped by how we communicate with each other; the tales we tell define us. I have always sought the examination of the humanities and arts (STEM is valid too) as a medium for sharing narratives that span centuries of human experience. In times of tumult – a global pandemic, social unrest, economic recession, and an insurmountable surge of uncertainty – I was driven to form a collective that harnesses such a passion for storytelling in all its myriad forms, engaging with unflinching honesty and passion for ideas we care about.
                        <br /><br />
                        However, I am a firm believer in the idea that one must be wary of surrounding themselves with people who think homogenously. Especially in a society plagued by the resentment provoked by diversity and discordance, my intellectual paradise is not only one that possesses an indomitable spirit and unabashed enthusiasm for storytelling but is also one that actively challenges notions that are deemed ordinary. A collective that thinks for themselves, appreciates ingenuity, and purposely strays away from the natural order of things would allow us and our readers to develop worldly perspectives in ways homogenous thought cannot. Everyone’s story deserves to be heard.
                        <br /><br />
                        Borne out of the artistic freedom, diversity, and enthusiasm that propels us to create, Momentum Magazine is a platform for free artistic expression, social contemplation, and celebration of dissent. Rather than having one overarching focus, Momentum delves into various social and cultural matters evident across the globe through thought-provoking issue-specific themes and writing prompts. Our mission is to confront such matters with urgency and a desire for transformation and help others gain the momentum to do the same.
                        <br /><br />
                        To understand what it truly means to be human, we must come to understand one another. To do that, I want to hear as many of your tales as I can. And as your tales blaze down and stare into my eyes, I will also be writing my own, weaving our stories together into one collective tapestry.
                        <br /><br />
                        When I was younger, I loved losing myself in stories. And here at Momentum, the stories never end.
                        <br /><br />
                        Sincerely,
                        <br />
                        <img src='RissaSignature.PNG' style={{width: '10em'}} alt='Rissa Signature' />
                        < br />
                        Rissa Kei Chua
                        <br />
                        Founder and Editor – in – Chief
                    </Typography>
                </Grid>
                <Grid item xs />
            </Grid>
        </div>
    )
}
