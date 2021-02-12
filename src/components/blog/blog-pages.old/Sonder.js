import React from 'react';
import { Grid, Typography } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles';
import BlogPostPage from '../BlogPostPage'
import sonder from '../images/sonder.jpg'

export default function Sonder(){
  return(
    <div>
      <BlogPostPage title="Sonder" date="July 17, 2020" writers="Anusha Riaz. Edited by Amelia Zawadzka and Marc Scocca" artists="Ava Davis" img={sonder}/>,
          <div style={{textAlign: 'left', margin: '20vw',marginTop: '0'}}>

          <Typography variant="p" style={{fontSize: '1.5vw'}}>
            The snow from the night before crunches under the soles of your shabby, brown boots as lone snowflakes catch on your eyelashes. The wind is chilly, and you shiver, fruitlessly intertwining your fingers to generate some form of warmth. You sit down on a cold bench waiting for the last bus and glance at the empty road and the street lights flickering above as frost swirls around you and the other stragglers of the night. You bring your knees up to your chest and huddle into yourself, burying your chin into your scarf. In the distance, you hear the last of the bells and the faint laughter of children as they run home after curfew; angels in the snow exist as the only reminder that they were ever there.

            You bury your reddening nose in the crook of your elbow and look over at the young woman leaning on the rough brick wall across the street, under the blinking, green pedestrian light. She brings a lit cigarette to her rouge-painted lips and runs a gloved finger through her cropped, black hair. Her heavy-duty boots sink into the snow, and you wonder how her fishnet leggings got ripped below the knees. As if hearing your thoughts, she glances at you, and, before you can look away, gives you a kind smile, which you hesitantly return. As you hear tyres skid on the road, you bring your feet back to the ground and look up to see the midnight bus looming over you. The doors open with a screech, and you shake the snow off your feet before stepping on. You nod at the driver, a dishevelled man with tired eyes and sunken features, and make your way down the narrow aisle covered in muddy footprints and snow.
            <br /><br />
            The only empty seat is next to a young boy wearing all white, his forehead pressed against the window. He doesn’t acknowledge your presence, and you notice his tear-streaked cheeks and reddened eyes. You’re torn: should you ask him if he’s okay? Deciding against it, you notice goosebumps on your neck and arms. Someone’s eyes are on you. You turn to see an older woman in a long trench coat looking at you. Heart thudding behind your ribs, you meet her icy green eyes as she opens her mouth as if to say something, but the bus halts. A flurry of passengers leaves the bus, including the woman who drops a note on your lap as she passes your seat.
            <br /><br />
            Despite the lack of heating on the bus, you feel yourself sweating as your hands shakily pick up the paper. You unfold it and read the message scrawled in ink: “Do you understand yet?” The note drops back onto your lap, and you whip your head around. More eyes are piercing you with their gazes now. Swallowing the lump in your throat, you look around at the other passengers. They seem to be looking straight through you, almost as if you are not even there. Fear crawls up your throat, and you shakily tap the boy next to you on his shoulder despite yourself. He turns to look at you with glassy eyes and a weak smile.
            <br /><br />
            “What’s going on?” you ask him, your voice low and shaky.
            <br /><br />
            He frowns, confused. You shake your head. It must just be paranoia.
            <br /><br />
            All at once, it hits you.
            <br /><br />
            The theory that you have allowed yourself to know that all that exists in this world is the self that you have created; the lie that you have told yourself all your life is crumbling before you. You can not wrap your head around why it is now that you know, but you do know. You understand, and you are not scared. You look around the bus again; everyone seems to be busy doing something else now, whether it be gazing out the window at the falling snow, chuckling with the person next to them, or listening to music in their own little world. The boy next to you hums something under his breath, quietly enough that you’re sure he thinks you didn’t hear it. You smile to yourself, shut your eyes, and let tranquillity wash over you.
          </Typography>
        </div>
      </div>
  );
}
