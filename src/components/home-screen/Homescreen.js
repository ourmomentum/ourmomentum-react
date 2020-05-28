import React from 'react'
import {Grid} from '@material-ui/core';
import "./Homescreen.css";


export default function HomeScreen() {
    return (
        <div>
            <h1>  {/* this is a comment + please delete my bs whenever */}
                hey efe and muh and gabbee and sindjuha and rahul - susan playing around here
            </h1> {/*this is a header */}


                <p id = "sentenceOne">
                    <i>This</i> will eventually be the <b>home screen.</b>   {/*italics and bold*/}
                </p>


                <p>
                     super<sup>scripts</sup> do be Cool<sub>though</sub>  {/*super and subscripts*/}
                    <hr />  {/*makes a line through the entire screen!!!*/}
                     gang gang new topic pls help i do not know how to make a new file in visual studio code i dont know how else to play around with this
                     <hr />
                     also git pull is not working idk if it is maybe it is working
                </p>


                <p>
                    this is the address to <a href="https://www.nasa.gov/">NASA</a>   {/*linking something*/}
                    <br /> {/*line break with no line*/}
                    how to change color????? here's link to beautiful <a href="LoadingScreen.html">loading screen</a>  {/*can link to another page on same website*/}
                    <br />
                    Will we <del>need</del> <ins>hafta</ins> code in al of this? can we not just copy paste the text in?
                    <hr />

                    <ul class = "class">   {/*unordered list + you can nest lists just start with ul again*/}
                        <li>
                            yay i can make list!
                        </li>
                    </ul>


                    <ol>{/*ordered list*/}
                        <li>
                            numbered
                        </li>
                        <li>
                            list!!!
                        </li>
                    </ol>


                    <dl> {/*this f-cker is a definition,title,description*/}
                        <dt>
                            nyc stock exchange
                        </dt>
                        <dd>
                            flaming pile of garbage wsb stonks?
                        </dd>
                    </dl>
                </p>

           

        </div>
    )
}
