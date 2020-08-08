import React from 'react';
import { Grid, Typography } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles';
import BlogPostPage from '../BlogPostPage'
import nostalgia from '../images/nostalgia.png'


export default function Nostalgia(){
  return(
      <div>
        <BlogPostPage title="Anthology of Discovered Nostalgia" date="July 31, 2020" writers="Natalie Chen. Edited by Rachelle Kasilag and Isabella Romine" artists="Özge Ahretlikoglu" img={nostalgia}/>
        <div style={{textAlign: 'left', margin: '20vw',marginTop: '0'}}>


          <Typography variant="h4" style={{fontWeight: 'bold'}}> Introduction </Typography>
            <Typography variant="p" style={{fontSize: '1.5vw'}}>

            If there was ever a moment that was universally imperfect in recent memory, now would be that time.
            <br /><br />
            The world rages on outside, and many of us, even the best of the introverts, feel stir-crazy. As an introvert, I somewhat revel in the indefinite amount of time we have been so graciously granted. I can spend long stretches of time in my own head, my own world. Of course, without the outside world, I must turn to alternative sources of inspiration.
            <br /><br />
            As a habitual over-thinker, the trials and tribulations of my “former”, “normal” life brought on an infinitely repetitive set of ideas (many of them regrets) that filled my mind. Although the challenges set by life were often new (yet nuanced), I found myself running in the same circles: “What if I had studied harder?” “What I joined that club?” “What if my parents put me in therapy earlier?”
            <br /><br />
            During my modest quarantine routine (a cycle of waking up, attending Zoom school, eating lunch, going on TikTok, working out, eating dinner, and sleeping), I often find myself stumbling upon different things that trigger nostalgia. I have taken to re-exploring my house, possessions, and memories.
            <br /><br />
            Although I’ve encountered these things in my past, discovering them in the present gives them new meaning. I’m often surprised by how vivid my memory appears as I find new old things (I guess I discovered that I have a good memory for emotional things). Nostalgia is a feeling that we grow into; our teenage years seem to be the first years that we can reflect on a time that feels long ago.
            <br /><br />
            <Typography variant="h4" style={{fontWeight: 'bold'}}> The Canvas Bug Bag </Typography>

            A couple of weeks ago, as the afternoon stretched out, I searched for a volleyball to play with my sister. I ran downstairs to our dark and dusty garage, rummaging about.
            <br /><br />
            Amidst the dusty heap of old storybooks, shabby sports equipment, and murky containers, I found a small, canvas drawstring bag.
            <br /><br />
            The cream-coloured bag was decorated with brightly coloured, realistic bug: beetles, butterflies, ladybugs, and more.
            <br /><br />
            Although I could not place a specific memory or even name a particular feeling associated with the bag, I knew the bag.
            <br /><br />
            This simple object reminded me of sunshine and elementary school: the days of growing sea monkeys and raising ducklings in our backyard. The days of the stubby carpet on which my sister and I played with plastic dishes and fake pastries.
            <br /><br />
            <Typography variant="h4" style={{fontWeight: 'bold'}}> Summer Senses </Typography>

            They say winters in the Pacific Northwest tend to be on the mild side, but the constant greyness and almost cold temperature make even the best of us forget freshness and colour.
            <br /><br />
            As winter gives way to spring and spring floats into summer, the different sensations of my sunny childhood days come back, like butterflies migrating back to the north for the springtime.
            <br /><br />
            The first sign is when my mother opens the windows in our house. The breeze tickles your face. You can smell how fresh nature is, wafting through the window screen.
            <br /><br />
            The second sign is hearing aeroplanes fly above my house. The lazy hum reminds me of sitting in my sunlit bedroom, straining my ears to listen as I watch dust particles float in the light.
            <br /><br />
            The third sign is the smell of barbecue. Barbecuing mimics the enduring stench of bonfires that drenched my clothes at our family camp out. I can feel the heat on my face as mosquito bites well up, covering my legs.
            <br /><br />
            <Typography variant="h4" style={{fontWeight: 'bold'}}> The Picture of Music </Typography>

            My father fills our afternoons with chilled-out, folksy pop music. As a child, these songs made me yearn to be elsewhere.
            <br /><br />
            Now, as I listen to the musical stylings of Jack Johnson, Sara Bareilles, or Corinne Bailey Rae, I am transported into my memories of daydreaming.
            <br /><br />
            I can feel the dusty handle of my dad’s dark green Honda Civic. As I open the car door, I imagine lying on a couch in a beach house, next to a dark mahogany coffee table. The house lies on a beautiful, rocky beach on the coast of the Pacific Northwest.
            <br /><br />
            The world is sunny as I listen to music.
            <br /><br />

            <Typography variant="h4" style={{fontWeight: 'bold'}}> All in One Place </Typography>

            I find them shoved beneath notebooks, scattered along my desk, piled in my ring holder, and stuffed inside my bookshelf. As soon as I can find all of the ones that I can remember, I dump them out and inspect them, like inspecting a collection of seashells after a day at the beach.
            <br /><br />
            There’s the one I got from the old vending machine.
            <br /><br />
            There are the ones I got from the Climate Strike in Washington Square.
            <br /><br />
            There are the ones I got from the Harry Styles concert last summer.
            <br /><br />
            There’s the one I got from my first soccer tournament in sixth grade.
            <br /><br />
            There’s the one from the Andy Warhol Museum.
            <br /><br />
            There are the ones from my Disneyland trip–an Aquarius Mickey Mouse, even though I’m a Libra.
            <br /><br />
            There’s the one my dad got from Comic-con.
            <br /><br />
            There are the ones I got from marching in the Rose Parade.
            <br /><br />
            Finally, they are all together, the tiny jigsaw pieces that fit into moments of my life.
            <br /><br />

            <Typography variant="h4" style={{fontWeight: 'bold'}}> And thus... </Typography>

            I’ve mostly discovered that this time is precious. The more time that I can spend revisiting myself and my life, the more time I will have to let go, the more time to say goodbye to the things that pull at my heart and remind me of my inner self, the more time to say goodbye to my family who raised me, my friends who supported me, instead of wallowing within myself. Slowly but surely, I feel myself pivot to an uncertain, butterfly-inducing future.
          </Typography>
        </div>
      </div>

  );
}
