
// All images required for the Carousel
import simpleResume from "./images/simpleResume.png";
import recipeRoulette from "./images/project.png";
import noteTaker from "./images/notetaker.png";
import eatBurger from "./images/burger.png";
import quizCode from "./images/quizcode.PNG";
import passwordGenerator from "./images/password.PNG";


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
    src: noteTaker,
    altText: "Note Taker",
    caption: "Take your notes, save and or delete them",
    link: "https://github.com/ydeek91/NoteTaker",
    live: "https://yazand-note-taker.herokuapp.com/"
  },
  {
    id: 4,
    src: eatBurger,
    altText: "Eat That Burger",
    caption: "Pick your favorite burger and devour it",
    link: "https://github.com/ydeek91/burger",
    live: "https://ydeek-burger-sql.herokuapp.com/"
  },
  {
    id: 5,
    src: quizCode,
    altText: "Quiz Code",
    caption: "Test your knowledge in javascript by using this application",
    link: "https://github.com/ydeek91/QuizCode",
    live: "https://ydeek91.github.io/QuizCode/"
  },
  {
    id: 6,
    src: passwordGenerator,
    altText: "Password Generator",
    caption: "This app allows users to generate random password",
    link: "https://github.com/ydeek91/PasswordGenerator",
    live: "https://ydeek91.github.io/PasswordGenerator/"
  }
];

export default items;