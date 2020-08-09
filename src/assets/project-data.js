import bjjPredictorImg from "../assets/bjj_predictor.jpg";
import digitRecognizerImg from "../assets/digit_recognizer.jpg";
import donutDashImg from "../assets/donut_dash.jpg";
import cryptoOnlineImg from "../assets/crypto_online.jpg";
import polynomialRegressionImg from "../assets/polynomial_regression.jpg";
import linearRegressionImg from "../assets/linear_regression.jpg";
import infiniteMonkeyImg from "../assets/infinite_monkey.jpg";
import faviconImg from "../assets/favicon.jpg";
import constructionImg from "../assets/under_construction.jpg";

const ProjectData = [
  {
    image: bjjPredictorImg,
    title: "BJJ Predictor",
    description:
      "Predicts the winner of BJJ matches. Uses two separate DNN models depending on whether two fighters have fought before. If a head-to-head record exists, the model uses that record as the primary predictor variable. This is because in BJJ, and in nearly every other sport, certain players tend to do well against certain players and horribly against others, for no apparent reason; this model has an accuracy of about 90%. If no head-to-head record exists, the model uses each fighters' personal win/loss records as the predictor variables; this model has an accuracy of about 70%. Due to the random nature of sports, it is hard to get any more accurate.",
    languages: ["Python", "JavaScript", "HTML", "CSS", "NoSQL"],
    technologies: ["Linux", "React", "Flask", "REST API", "AWS", "Bootstrap"],
    machineLearning: [
      "TensorFlow",
      "Keras",
      "scikit-learn",
      "pandas",
      "NumPy",
      "SciPy",
      "Matplotlib",
      "Seaborn",
      "Jupyter Notebook",
      "Scrapy",
    ],
    concepts: ["Machine Learning"],
    source: "https://github.com/ryantran2165/bjj-predictor",
    demo: "https://www.ryanlongtran.com/bjj-predictor",
  },
  {
    image: digitRecognizerImg,
    title: "Digit Recognizer",
    description:
      "Recognizes user-inputted handwritten digits using feedforward and convolutional neural networks implemented by hand. Shows a side-by-side comparison between the predictions made by the FFNN and CNN. Implementing this from the ground up really helped solidify my understanding of FFNN's, CNN's, and backpropagation.",
    languages: ["JavaScript", "HTML", "CSS"],
    technologies: ["React", "Bootstrap"],
    machineLearning: [],
    concepts: ["Machine Learning"],
    source: "https://github.com/ryantran2165/digit-recognizer",
    demo: "https://www.ryanlongtran.com/digit-recognizer",
  },
  {
    image: donutDashImg,
    title: "Donut Dash",
    description:
      "Collaborated with a fantastic artist (shoutout to Matt Slade!) to publish a polished Unity game. Chase the donut thief in this randomly generated, infinite 2D platformer! Eat coffee and donuts to increase or decrease your weight/speed, but watch out for obstacles!",
    languages: ["C#"],
    technologies: ["Unity"],
    machineLearning: [],
    concepts: ["Game"],
    source: "https://github.com/ryantran2165/donut-dash",
    demo: "https://ryantran2165.itch.io/donut-dash",
  },
  {
    image: cryptoOnlineImg,
    title: "Crypto Online",
    description:
      "Web app for encrypting/decrypting from text input or text file. Includes user login/registration through sessions and a MySQL database and three ciphers: simple substitution, double transposition, and RC4. Using Heroku free tier, so the server is a bit slow and finicky.",
    languages: ["JavaScript", "HTML", "CSS", "PHP", "SQL"],
    technologies: ["Linux", "MySQL", "Bootstrap"],
    machineLearning: [],
    concepts: ["Cryptography"],
    source: "https://github.com/ryantran2165/crypto-online",
    demo: "https://crypto-online.herokuapp.com",
  },
  {
    image: polynomialRegressionImg,
    title: "Polynomial Regression",
    description:
      "Performs polynomial regression using gradient descent on the user-inputted data points, graphs the polynomial, and displays the polynomial equation. This project is the ancestor to the Linear Regression project.",
    languages: ["JavaScript", "HTML", "CSS"],
    technologies: ["React", "Bootstrap"],
    machineLearning: [],
    concepts: ["Machine Learning"],
    source: "https://github.com/ryantran2165/polynomial-regression",
    demo: "https://www.ryanlongtran.com/polynomial-regression",
  },
  {
    image: linearRegressionImg,
    title: "Linear Regression",
    description:
      "Performs linear regression using gradient descent on the user-inputted data points, graphs the line, and displays the line equation. This project is the predecessor to the Polynomial Regression project.",
    languages: ["JavaScript", "HTML", "CSS"],
    technologies: ["React", "Bootstrap"],
    machineLearning: [],
    concepts: ["Machine Learning"],
    source: "https://github.com/ryantran2165/linear-regression",
    demo: "https://www.ryanlongtran.com/linear-regression",
  },
  {
    image: infiniteMonkeyImg,
    title: "Infinite Monkey",
    description:
      'Uses a genetic algorithm, modeled after Darwin\'s theory of evolution, to arrive at a target phrase through the operations of mutation, crossover, and selection. "The infinite monkey theorem states that a monkey hitting keys at random on a typewriter keyboard for an infinite amount of time will almost surely type any given text" -Wikipedia.',
    languages: ["JavaScript", "HTML", "CSS"],
    technologies: ["React", "Bootstrap"],
    machineLearning: [],
    concepts: ["Machine Learning"],
    source: "https://github.com/ryantran2165/infinite-monkey",
    demo: "https://www.ryanlongtran.com/infinite-monkey",
  },
  {
    image: faviconImg,
    title: "Personal Website",
    description: "This! My personal website to track my career progression.",
    languages: ["JavaScript", "HTML", "CSS"],
    technologies: ["React", "Bootstrap"],
    machineLearning: [],
    concepts: [],
    source:
      "https://github.com/ryantran2165/ryantran2165.github.io/tree/source",
    demo: "",
  },
  {
    image: constructionImg,
    title: "Mobile Game",
    description:
      "A mobile, action, role-playing, strategy game I've been developing on my own for the past 3 years using libGDX. It's a rather ambitious project, so it's not going to be released any time soon. It's also currently put on hold to focus on machine learning. Source is in a private repository, but I'd be more than happy to share code samples if requested.",
    languages: ["Java"],
    technologies: [],
    machineLearning: [],
    concepts: ["Game"],
    source: "",
    demo: "",
  },
];

export default ProjectData;
