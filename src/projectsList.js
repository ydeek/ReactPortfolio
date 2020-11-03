
// All images required for the Carousel
import simpleResume from "./images/simpleResume.png";
import reelTime from "./images/reelTime.png";
import googleBooks from "./images/googlebooks.png";
import fureverHome from "./images/fureverHome.png";
import clicky from "./images/clicky.png";
import friendFinder from "./images/friendFinder.png";
import bamazon from "./images/bamazon.jpg";
import liri from "./images/liri-node-app.png";


const items = [
  {
    id: 1,
    src: simpleResume,
    altText: "Simple Resume",
    caption: "Create and save your own resume.",
    link: "https://github.com/ydeek91/SimpleResume",
    live: "https://group1-simple-resume.herokuapp.com/"
  },
  {
    id: 2,
    src: recipeRoulette,
    altText: "Recipe Roulette",
    caption: "Check out the following project for suggested random food and drinks recipes",
    link: "https://albie140.github.io/Recipe-Roulette",
    live: "https://github.com/ydeek91/Recipe-Roulette"
  },
  {
    id: 3,
    src: googleBooks,
    altText: "Google Books",
    caption: "This is an app that allows a user to search for books using the Google Books API. Each book populated features the title, authors, an image and a summary for the user to view. By utilizing the Mongoose library, the user has the choice to save the book to a Mongo database, and then remove it later if they wish, from the Saved Books page.",
    link: "https://github.com/seanbelverstone/Google-Books",
    live: "https://google-books-mongoose.herokuapp.com/"
  },
  {
    id: 4,
    src: fureverHome,
    altText: "FurEver Home",
    caption: "I was lucky enough to work with the same group people as I did during 'Fridge Chef' and we grew even further as an adaptable team. We had the option to build the app in React, which we took upon ourselves to attempt. We are happy with the result but do believe that it requires further editing to reach its full potential. The idea for this app was birthed through a strong passion for helping animals and their adoption, as too many are forgotten in shelters. Please adopt!",
    link: "https://github.com/seanbelverstone/FurEver-Home",
    live: "https://furever-home-app.herokuapp.com/"
  },
  {
    id: 5,
    src: clicky,
    altText: "Halo Themed Clicky Game",
    caption: "I found this one very enjoyable! Built entirely in React, much like this portfolio, I was introduced to the complexities of working in almost an entirely new language. I'm hoping to make all further projects in React as it's very intuitive, logical and fun to work in!",
    link: "https://github.com/seanbelverstone/Clicky-Game",
    live: "https://clicky-game-sb.herokuapp.com/"
  },
  {
    id: 6,
    src: friendFinder,
    altText: "Friend Finder",
    caption: "This app is very similar to 'Which character are you most like?' quizzes that were popular during the Internet's first boom. I enjoyed making this as I got to utilise my favorite film series again - Lord of the Rings. The math required for this app to work properly was challenging but I'm glad to say I overcame it.",
    link: "https://github.com/seanbelverstone/Friend-Finder",
    live: "https://fellowship-finder-application.herokuapp.com/"
  },
  {
    id: 7,
    src: bamazon,
    altText: "Bamazon",
    caption: "A CLI shopping application much like the famous website with a similar name. Users are able to place orders and deplete stock inventory, all of which is stored on a MYSQL server. The app also uses inquirer (which I LOVE) to guide the user through their experience.",
    link: "https://github.com/seanbelverstone/Bamazon",
    live: "https://github.com/seanbelverstone/Bamazon"
  },
  {
    id: 8,
    src: liri,
    altText: "LIRI - Node App",
    caption: "LIRI is much like the iPhone's SIRI, but it uses language interpretation rather than speech! LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies and will work through Node's command line input. This was my first, purely back-end application. It opened my eyes to a wider world of programming.",
    link: "https://github.com/seanbelverstone/liri-node-app",
    live: "https://github.com/seanbelverstone/liri-node-app"
  }
];

export default items;