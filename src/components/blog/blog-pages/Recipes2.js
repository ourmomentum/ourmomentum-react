import React from 'react';
import { Grid, Typography } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles';
import BlogPostPage from '../BlogPostPage'
import recipe2 from '../images/recipes_2.png'
import steak from '../images/garlic_steak.png'


export default function Recipes2(){
  return(
    <div>
      <BlogPostPage title="3 Recipes from My Mom to You: Part 2" date="August 7, 2020" writers="Seungbin Kang. Edited by Tanae Rao and Jordanne Stewart" artists="Blossom Neo" img={recipe2} />,

      <div style={{textAlign: 'left', margin: '20vw',marginTop: '0'}}>
        <Typography variant="p" style={{fontSize: '1.5vw', textAlign: 'center'}}>
          Ready in <b> 60 minutes </b>
          <br /><br />
          Serves <b> 1 person </b>
          <br /><br />
          Difficulty meter <b> Medium Rare </b>
          <br /><br />
          Calories <b> Approximately 575 </b>
          <br /><br />
        </Typography>

        <Typography variant="h4" style={{fontWeight: 'bold'}}> Introduction </Typography>
        <Typography variant="p" style={{fontSize: '1.5vw', textAlign: 'center'}}>
          To me, one of the best things about staying at home all day is the chance to be able to spend time with family and learn new skills.
          <br /><br />
          This is a step up from the last recipe, however, it is very doable! It tastes amazing, and I was astonished at how it turned out!
          <br /><br />
        </Typography>

        <img src={steak} style={{width: '25vw', margin: '5vw'}} alt="img" />


        <Typography variant="h4" style={{fontWeight: 'bold'}}> Ingredients </Typography>
        <Typography variant="p" style={{fontSize: '1.5vw'}}>
          <ul>
            <li> 1 ribeye steak, 6 cm thick </li>
            <li> Salt and pepper </li>
            <li> 3 tablespoons vegetable oil </li>
            <li> 4 tablespoons unsalted butter </li>
            <li> 4 cloves garlic, peeled </li>
            <li> 2 sprigs fresh rosemary </li>
            <li> 2 sprigs fresh thyme </li>
          </ul>
        </Typography>

        <Typography variant="h4" style={{fontWeight: 'bold'}}> Preparation </Typography>
        <Typography variant="p" style={{fontSize: '1.5vw'}}>
          <ol>
            <li> Preheat the oven to 95 degrees Celsius. </li>
            <li> Generously season all sides of the steak with salt and pepper. </li>
            <li> Prepare a sheet of baking paper on a wire rack. </li>
            <li> Transfer the steak onto the baking paper, then bake for about 40 minutes to an hour until the internal temperature reads about 51 degrees Celsius. Please note that this is for a medium-rare steak — for a medium to well-done steak, increase baking time. </li>
            <li> Heat the vegetable oil in a pan skillet until smoking. </li>
            <li> Remove the steak from the oven. Place the steak onto the pan and sear on each side until golden brown. </li>
            <li> Add butter, garlic, rosemary, and thyme into the pan. Swirl. </li>
            <li> After 30 seconds, transfer the garlic and herbs onto the steak and baste the steak with the butter using a large spoon. Do this for about 30 seconds before flipping the steak to the other side for 15 seconds of basting. </li>
            <li> Turn the steak on its side and cook to render off any excess fat. </li>
            <li> Remove from the pan and rest the steak on a dry room temperature surface for about 10 minutes before consuming! </li>
          </ol>

        <Typography variant="h4" style={{fontWeight: 'bold'}}> Seungbin’s Tips </Typography>
          Slicing the steak before resting it for some time will result in a lot of the juices leaking out! Do not do that; be patient!

          Another major tip is to not overcook the butter and herbs (as I did). By doing so, it leaves a bitter taste which throws off the fragrance and aroma which is usually associated with steaks.

          Another big tip is to have the steak medium-rare. It is the best (and only) way to cook it!
        </Typography>
      </div>
    </div>
  );
}
