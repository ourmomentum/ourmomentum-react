import React from 'react';
import { Grid, Typography } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles';
import BlogPostPage from '../BlogPostPage'
import fledging from '../images/fledging.jpg'

export default function Fledging(){
  return(
    <div>
      <BlogPostPage title="Fledging" date="July 3, 2020" writers="Farida Amr. Edited by Rachelle Kasilag and Isabella Romine" artists="Cai Xia Lee" img={fledging} link='/blog/fledging'/>
          <div style={{textAlign: 'left', margin: '20vw',marginTop: '0'}}>

          <Typography variant="p" style={{fontSize: '1.5vw'}}>
          Soft grasses tickle
          <br /><br />

          The bare soles of my feet.
          <br /><br />

          A playful dance that I
          <br /><br />

          Never even noticed
          <br /><br />

          In my giggling rush
          <br /><br />

          Towards home.
          <br /><br />

          Yearning to grasp
          <br /><br />

          Treasured glimpses of mother
          <br /><br />

          Putting on pearls and big-girl shoes.
          <br /><br />

          Fluffed up pillows
          <br /><br />

          Covered in worn teddy bears.
          <br /><br />

          Easy sleep that I
          <br /><br />

          Never even noticed
          <br /><br />

          In my giggling rush
          <br /><br />

          Towards my father’s office.
          <br /><br />

          Elated to try on
          <br /><br />

          His fragile reading glasses
          <br /><br />

          And leaf through all the papers
          <br /><br />

          About grown up things, in grown up words.
          <br /><br />

          Awkward hallway smiles
          <br /><br />

          From a boy with a pimpled face.
          <br /><br />

          Bright eyes that I
          <br /><br />

          Never even noticed
          <br /><br />

          In my giggling rush
          <br /><br />

          Towards the bathroom.
          <br /><br />

          Excited to share
          <br /><br />

          A stolen tube of lip gloss
          <br /><br />

          That tasted of cherry and adulthood.
          <br /><br />

          Rickety lunch tables
          <br /><br />

          Rocked by howling laughter.
          <br /><br />

          Ethereal moments that I
          <br /><br />

          Never even noticed
          <br /><br />

          In my giggling rush
          <br /><br />

          Towards the Head Office.
          <br /><br />

          Unable to stand
          <br /><br />

          The wait for a cap and gown,
          <br /><br />

          My golden getaway ticket to maturity.
          <br /><br />

          The weight of days
          <br /><br />

          Leaves tender indents on my heart
          <br /><br />

          And anxious twitches in my eyes.
          <br /><br />

          I find myself longing.
          <br /><br />

          Longing for
          <br /><br />

          Soft grasses,
          <br /><br />

          Fluffed up pillows,
          <br /><br />

          Hallway smiles,
          <br /><br />

          Lunch tables.
          <br /><br />

          Longing for the
          <br /><br />

          slipping diamond droplets.
          <br /><br />

          A wasting away that I
          <br /><br />

          Never even noticed.
          </Typography>
        </div>
      </div>
  );
}
