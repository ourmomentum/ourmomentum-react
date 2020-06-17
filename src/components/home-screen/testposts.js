import firebase from './Firebase'


function ReturnListOfPosts(){
  var posts = [];
  console.log(posts)
  firebase.database().ref('posts').once('value').then(function(snapshot) {
    console.log(snapshot.val());
    })
  return(posts);
}



export default ReturnListOfPosts();

// [
//     {
//         "title": "AI Generates Story For Testing",
//         "content": "This is a story about new money going to old media and then to cable. \n Now, we've seen this again and again: New money into old media. Cable companies now own lots of TV stations. Google and Facebook now control a lot of the internet. And the advertising business has its own new role — as the gold mine for new customers for just about everyone. \n No worries about \"real journalism\" \nLast night on PBS NewsHour, New York Times columnist Paul Krugman responded to the barrage of criticism he's received from Clinton and Sanders supporters this week for calling Clinton \"candidate Clinton,\" and declaring his intention to support her. Krugman attacked Sanders, arguing that Sanders doesn't have the credibility to support Hillary Clinton, and dismissing the Vermont senator"
//     },
//
//     {
//         "title": "Look! It generated another one",
//         "content": "Dogs are not out of the question, but their use in testing/production still relies on some of the caveats described earlier. Most applications, though, will not have a need for actual service dogs. Service dogs may help more than aid in understanding the public at large. Caregivers with many dogs can still do work that requires patient and focused attention."
//     },
//
//     {
//         "title": "And Another One!",
//         "content": "\"We are all for better pay and better pensions for our employees,\" Allaire said in a statement. \"However, if that also means higher taxes and higher debt for our school system, we will not negotiate. \"As part of the public employee deal, the city is giving employees a slight raise to 9.5 percent, then they would see their full-year pay increase to 10.5 percent if nothing changed between now and 2016. Allaire estimated the city would end up with a 7.5 percent funding increase next year\""
//     },
//
//     {
//         "title": "This Is Sort Of Getting Tiring",
//         "content": "How about this, this is the last example I'll write and we'll call it a day. The last thing we're going to do is writing a custom constructor, it'll be a little bit trickier, but if you're interested, I've written a basic one here. \nYour constructor will be called with two arguments. A const variable. It can contain any type of value. Let's say, one of those arguments is a reference to some type. There's two ways you can deal with that. You can call this() with the type of value you want or you can call this.get() . Let's see what they look like."
//     },
//
//     {
//         "title": "Susan is confused",
//         "content": "Why are there two 'issue one: eureka banners? Is this onyl my problem?? Wait jk I fixed it on my side i think -- there were two  <Route exact path = / component = {Landing}> in App.js. i deleted the second one. Also will these be linked to any issues? like are these boxes going to be buttons?? can I have my temp playground back :(. It can be a temporary button. Wait... I can do localhost3000/susanspalygrpudn right? hold on let me try. Also i am amazed by how this looks"
//     }
//
// ]
