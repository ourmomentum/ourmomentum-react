// HELP
import React from 'react';
import MomentumFooter from '../footer/MomentumFooter';
import { Grid, Typography } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles';
import BlogPost from './BlogPost'
import { BrowserRouter, Route } from 'react-router-dom';

import { Link } from 'react-router-dom'
import brightSide from './images/bright_side.jpg'
import recipe2 from './images/recipes_2.png'
import nostalgia from './images/nostalgia.png'
import sonder from './images/sonder.jpg'
import recipe1 from './images/recipes_1.png'
import fledging from './images/fledging.jpg'
import clearSkies from './images/clear_skies.png'
import economy from './images/money.jpg'

import Sonder from './blog-pages/Sonder'
import Recipes2 from './blog-pages/Recipes2'
import Nostalgia from './blog-pages/Nostalgia'
import Brightside from './blog-pages/Brightside'
import Recpies1 from './blog-pages/Recipes1'
import Fledging from './blog-pages/Fledging'
import ClearSkies from './blog-pages/ClearSkies'
import Economic from './blog-pages/Economic'

export default function Blog(){
    const margin = {
      // display: 'flex',
      // justifyContent: 'center',
      // flexDirection: 'column',
      margin: '120px'
    };

    const imgSize = {
      width: '40vw',
      display: 'flex',
      justifyContent: 'center',
      margin: '30px'
    }

    return(
      <BrowserRouter>

        <Grid>

          <center>
            <Typography variant="h1" style={{fontWeight:'bold', textAlign: 'center', fontSize: '6vw', marginTop: '5vw'}}> Blog </Typography>
            <Typography variant="p" style={{fontStyle: "oblique", marginTop: '50px', textAlign: 'center', fontSize: '2vw'}}> Catch up on the latest Momentum stories and pieces here. </Typography>

            <div style={{margin, marginTop: '0'}}>
              <BlogPost title="3 Recipes from My Mom to You: Part 2" date="August 7, 2020" writers="Seungbin Kang. Edited by Tanae Rao and Jordanne Stewart" artists="Blossom Neo" img={recipe2} link='/blog/recipes2'/>
            </div>

            <div style={margin}>
              <BlogPost title="Anthology of Discovered Nostalgia" date="July 31, 2020" writers="Natalie Chen. Edited by Rachelle Kasilag and Isabella Romine" artists="Özge Ahretlikoglu" img={nostalgia} link='/blog/nostalgia'/>
            </div>

            <div style={margin}>
              <BlogPost title="On the Bright Side" date="July 24, 2020" writers="Atrayee Dutt. Edited by Eden Gringart and Jordanne Stewart" artists="Thanh Le" img={brightSide} link='/blog/brightside'/>
            </div>

            <div style={margin}>
              <BlogPost title="Sonder" date="July 17, 2020" writers="Anusha Riaz. Edited by Amelia Zawadzka and Marc Scocca" artists="Ava Davis" img={sonder} link='/blog/sonder'/>
            </div>

            <div style={margin}>
              <BlogPost title="3 Recipes from My Mom to You: Part 1" date="July 10, 2020" writers="Seungbin Kang. Edited by Tanae Rao and Jordanne Stewart" artists="Alice Schroeder" img={recipe1} link='/blog/recipes1'/>
            </div>

            <div style={margin}>
              <BlogPost title="Fledging" date="July 3, 2020" writers="Farida Amr. Edited by Rachelle Kasilag and Isabella Romine" artists="Cai Xia Lee" img={fledging} link='/blog/fledging'/>
            </div>

            <div style={margin}>
              <BlogPost title="Clear Skies" date="June 26, 2020" writers="Aniket Duggal. Edited by Eden Gringart and Amelia Zawadzka" artists="Rochelle Yuan" img={clearSkies} link='/blog/clearskies'/>
            </div>

            <div style={margin}>
              <BlogPost title="The Economy Isn’t Just About Supply and Demand – It’s About Confidence, Too" date="June 19, 2020" writers="Elyse Barg. Edited by Chaya Kimbell and Tanae Rao" artists="Alice Schroeder" img={economy} link='/blog/economy'/>
            </div>

          </center>


        </Grid>
        <Route path="/blog/recipes2" component={Recipes2}/>
        <Route path="/blog/nostalgia" component={Nostalgia}/>
        <Route path="/blog/sonder" component={Sonder}/>
        <Route path="/blog/brightside" component={Brightside}/>
        <Route path="/blog/recipes1" component={Recpies1}/>
        <Route path="/blog/fledging" component={Fledging}/>
        <Route path="/blog/clearskies" component={ClearSkies}/>
        <Route path="/blog/economy" component={Economic}/>

      </BrowserRouter>



      // <MomentumFooter />;
    );
}
