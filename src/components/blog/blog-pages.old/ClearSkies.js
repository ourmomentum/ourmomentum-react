import React from 'react';
import { Grid, Typography } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles';
import BlogPostPage from '../BlogPostPage'
import clearSkies from '../images/clear_skies.png'

export default function ClearSkies(){
  return(
    <div>
      <BlogPostPage title="Clear Skies" date="June 26, 2020" writers="Aniket Duggal. Edited by Eden Gringart and Amelia Zawadzka" artists="Rochelle Yuan" img={clearSkies}/>
          <div style={{textAlign: 'left', margin: '20vw',marginTop: '0'}}>

          <Typography variant="p" style={{fontSize: '1.5vw'}}>
            A lot of you reading this right now will be able to resonate with my next sentence. College applications SUCK. There are no two ways about it. Yeah, it’s fun to “carve your own path in life”, finally “gain some autonomy” and stand on your own two feet after 18 years, but there is nothing remotely enjoyable about sending your grades to universities from when you were making musical.ly’s in your bedroom to now when you’re making tiktoks in your bedroom (yay character development!). And as if that isn’t enough, you need to make sure you have four encyclopedias worth of extracurriculars to win over the college admissions officer who has already read 400 other applications with nearly identical grades, activities, and essays, and who would rather listen to a Jacob Sartorius album three times over than read another application about how someone started a Robotics club in their local 50-student school. There are no two ways about it; college applications SUCK.
            <br /><br />

            Now imagine all of this, but with the additional stress of having ABSOLUTELY NO IDEA what you want to major in, let alone where you want to go. Welcome to my world. Now, I’m sure a lot of you are in a similar predicament as me, and I hope my experience helps you feel a little less alone in this daunting process. I’m your average Indian kid, complete with the ambitious parents, an overachieving family and academically god-tier friends (as my parents never fail to remind me). Because of my unique combination where not only am I Indian but….okay that’s pretty much the only factor… I was very, very, very heavily encouraged to major in Computer Science. And for two, nearly three years, I actually bought into this idea. Don’t get me wrong, I love Computer Science, but so does Uncle Arjun’s son and Divya Aunty’s pet frog. Simply put, I was surrounded by like-minded individuals, except they were willing to kill for that computer science undergrad at MIT and frankly, Computer Science was always just a hobby to me anyway. I was still on the fence about what I really wanted to major in and ended up going into the IB Diploma (International Baccalaureate Diploma), a rigorous two-year program that requires students to take six subjects, three at Higher Level (equivalent to an AP) and three at Standard Level. I chose Higher Level English Literature, Physics, and Economics as well as Standard Level Maths Analysis, Geography, and Spanish ab initio. Inadvertently, I had opted to take one of the most STEM-based courses (Physics) as well as liberal arts-type courses (English) our school had to offer as Higher Levels which definitely did not help my case in narrowing down a major whatsoever. Not to mention, my lack of Higher Level Maths and the fact that I only took one science meant that my chances of getting into an Ivy League University for Computer Science were minuscule (because, obviously, it’s Ivy or disappointment-to-your-family in my household).

            <br /><br />

            I kept putting off this thought, hoping I would just magically stumble upon a new mathematical proof to secure that seat at Stanford until my school sent out an email saying we had to come up with a presentation, due in a week, about our top five university choices we would like to go to. This was mandatory, and my parents were not going to let me slack off. I spent the next six days, slacking off. Before I knew it, it was the night before the presentation was due, and the gravity of my situation fell on me. If I was not going to come up with a major I genuinely had a shot at by tomorrow, I would not be getting any help from my counsellors anymore; this was going to differentiate all of the students who really cared about their futures from those who just wanted to go to the beach with their friends during a global lockdown. And for a kid like me, I needed all the counsellor help I could get.
            <br /><br />

            Tabs were flying open, my fingers were gliding across the keys, and my eyes were skiing across the screen. “Best majors for kids interested in computer science, but not really” “what to major in if I literally have no idea what I want to do in life” “Do my parents love me”. 9 PM, 10 PM, 11 PM. I was on Google for nearly four hours, and the closest thing I had to a major was a major mental breakdown. My brain was at its breaking point, and if I stumbled upon one more story of an Asian kid with a 4.0 GPA, I was gonna stab myself with a chopstick. I was on the verge of calling it a night and crying myself to sleep when I heard my mom talking on the phone in the hallway.
            <br /><br />

            “This pandemic is really going to ruin the global economy”. The global…economy…
            <br /><br />

            EUREKA!
            <br /><br />

            The only course I have that is neither entirely STEM nor liberal arts. My third Higher Level Course. The one class that requires mathematical AND English skills but neither at the level of a full-fledged Math or English degree. The subject my mom literally teaches as a professor at university! Economics! It felt like a movie, but in that one instant, I shot upright and threw my laptop open. Within the next hour and a half not only had I decided upon a specific degree, but I had also curated a list of ten different possible universities I was interested in, AND I discovered that a major in Economics works PERFECTLY with a minor in computer science. I had just killed two birds with one stone.
            <br /><br />

            Looking back, Economics was like that one nerdy girl in every high school movie no one paid attention to until she took her glasses off and BAM! All of a sudden, every guy could not stop looking at her. Except Economics was the girl and I was every…high schooler…okay, maybe that wasn’t the best analogy, but you get the idea! Economics is by no means an easy degree, despite what I said about its Math and English skills, it’s just the perfect blend between my Asian parents’ ambitions and my American schools’ “choose your own path in life” idea they instilled in me.
            <br /><br />

            The application process can seem incredibly daunting and isolating and can leave a lot of students alone and frustrated. If you are one of those students, just know that you are not alone, and there are millions of other people going through the exact same struggle as you. If you are scared and confused because your decision in the next few months will “change your life forever”, understand that university is not a life-or-death scenario. Instead, it is merely a stepping stone into helping you become the best person you can possibly be. So whatever you end up choosing, you’ll be just fine.
          </Typography>
        </div>
      </div>
  );
}
