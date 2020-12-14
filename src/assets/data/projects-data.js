import officeSupplyDepotImg from "../images/office_supply_depot.jpg";
import bjjPredictorImg from "../images/bjj_predictor.jpg";
import connect4aiImg from "../images/connect4_ai.jpg";
import digitRecognizerImg from "../images/digit_recognizer.jpg";
import donutDashImg from "../images/donut_dash.jpg";
import cryptoOnlineImg from "../images/crypto_online.jpg";
import polynomialRegressionImg from "../images/polynomial_regression.jpg";
import linearRegressionImg from "../images/linear_regression.jpg";
import infiniteMonkeyImg from "../images/infinite_monkey.jpg";
import faviconImg from "../images/favicon.jpg";
import constructionImg from "../images/under_construction.jpg";

const ProjectData = [
  {
    image: officeSupplyDepotImg,
    title: "Office Supply Depot",
    description:
      "Full-stack e-commerce website with a React frontend and Django REST API backend that includes product search/filter/sort, user signup/signin with JWT authentication, cart/checkout, driver/delivery route optimization, and admin operations functionality.",
    languages: ["JavaScript/JSX", "Python", "HTML", "CSS/SASS"],
    frameworksLibraries: ["React", "Redux", "Bootstrap", "Django"],
    toolsTechnologies: ["GCP", "Git", "Heroku", "PostgreSQL", "REST API"],
    machineLearning: [],
    categories: ["Full-Stack"],
    source: "https://github.com/ryantran2165/office-supply-depot-frontend",
    demo: "https://office-supply-depot-frontend.netlify.app",
  },
  {
    image: bjjPredictorImg,
    title: "BJJ Predictor",
    description:
      "Full-stack web app with a React frontend and Flask REST API backend that predicts the winner of Brazilian Jiu-Jitsu matches. Uses two separate DNN models depending on whether two fighters have previously fought because certain fighters tend to do significantly better/worse against certain others. If a head-to-head record exists, a model that uses that head-to-head record as the primary predictor variable is used; this model has an accuracy of about 90%. If no head-to-head record exists, a model that uses win/loss records as the primary predictor variables is used; this model has an accuracy of about 70%.",
    languages: ["JavaScript/JSX", "Python", "HTML", "CSS/SASS"],
    frameworksLibraries: ["React", "Bootstrap", "Flask"],
    toolsTechnologies: ["AWS", "Git", "Linux", "NoSQL", "REST API"],
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
    categories: ["Machine Learning", "Full-Stack"],
    source: "https://github.com/ryantran2165/bjj-predictor",
    demo: "https://www.ryanlongtran.com/bjj-predictor",
  },
  {
    image: connect4aiImg,
    title: "Connect 4 AI",
    description:
      "Web app implementation of Connect 4 with varying AI difficulties using Q-learning, NeuroEvolution of Augmenting Topologies (NEAT), and minimax.",
    languages: ["JavaScript/JSX", "HTML", "CSS/SASS"],
    frameworksLibraries: ["React", "Bootstrap"],
    toolsTechnologies: ["Git"],
    machineLearning: ["TensorFlowJS"],
    categories: ["Machine Learning"],
    source: "https://github.com/ryantran2165/connect4-ai",
    demo: "https://www.ryanlongtran.com/connect4-ai",
  },
  {
    image: digitRecognizerImg,
    title: "Digit Recognizer",
    description:
      "Web app that recognizes user-drawn digits using self-implemented feedforward and convolutional neural networks. Shows a side-by-side comparison between the predictions made by the FFNN and CNN.",
    languages: ["JavaScript/JSX", "HTML", "CSS/SASS"],
    frameworksLibraries: ["React", "Bootstrap"],
    toolsTechnologies: ["Git"],
    machineLearning: [],
    categories: ["Machine Learning"],
    source: "https://github.com/ryantran2165/digit-recognizer",
    demo: "https://www.ryanlongtran.com/digit-recognizer",
  },
  {
    image: donutDashImg,
    title: "Donut Dash",
    description:
      "Collaborated with an artist to develop and publish a 2D Unity platformer game. Chase the donut thief in this randomly generated, infinite 2D platformer! Eat coffee and donuts to increase or decrease your weight/speed, but watch out for obstacles!",
    languages: ["C#"],
    frameworksLibraries: [],
    toolsTechnologies: ["Git", "Unity"],
    machineLearning: [],
    categories: ["Game"],
    source: "https://github.com/ryantran2165/donut-dash",
    demo: "https://ryantran2165.itch.io/donut-dash",
  },
  {
    image: cryptoOnlineImg,
    title: "Crypto Online",
    description:
      "Full-stack cryptography web app supporting 3 ciphers and secure user login/registration using sessions.",
    languages: ["JavaScript/JSX", "SQL", "HTML", "CSS/SASS", "PHP"],
    frameworksLibraries: ["Bootstrap"],
    toolsTechnologies: ["Git", "Linux", "MySQL", "Heroku"],
    machineLearning: [],
    categories: ["Full-Stack"],
    source: "https://github.com/ryantran2165/crypto-online",
    demo: "https://crypto-online.herokuapp.com",
  },
  {
    image: polynomialRegressionImg,
    title: "Polynomial Regression",
    description:
      "Web app that performs and graphs polynomial regression using gradient descent on user-inputted data points. This project is the ancestor to Linear Regression.",
    languages: ["JavaScript", "HTML", "CSS/SASS"],
    frameworksLibraries: ["React", "Bootstrap"],
    toolsTechnologies: ["Git"],
    machineLearning: [],
    categories: ["Machine Learning"],
    source: "https://github.com/ryantran2165/polynomial-regression",
    demo: "https://www.ryanlongtran.com/polynomial-regression",
  },
  {
    image: linearRegressionImg,
    title: "Linear Regression",
    description:
      "Web app that performs and graphs linear regression using gradient descent on user-inputted data points. This project is the predecessor to Polynomial Regression.",
    languages: ["JavaScript/JSX", "HTML", "CSS/SASS"],
    frameworksLibraries: ["React", "Bootstrap"],
    toolsTechnologies: ["Git"],
    machineLearning: [],
    categories: ["Machine Learning"],
    source: "https://github.com/ryantran2165/linear-regression",
    demo: "https://www.ryanlongtran.com/linear-regression",
  },
  {
    image: infiniteMonkeyImg,
    title: "Infinite Monkey",
    description:
      "Web app that uses a genetic algorithm to evolve a target phrase, somewhat emulating the infinite monkey theorem.",
    languages: ["JavaScript/JSX", "HTML", "CSS/SASS"],
    frameworksLibraries: ["React", "Bootstrap"],
    toolsTechnologies: ["Git"],
    machineLearning: [],
    categories: ["Machine Learning"],
    source: "https://github.com/ryantran2165/infinite-monkey",
    demo: "https://www.ryanlongtran.com/infinite-monkey",
  },
  {
    image: faviconImg,
    title: "Personal Website",
    description:
      "This! My personal website serving as a portfolio of my projects and career.",
    languages: ["JavaScript/JSX", "HTML", "CSS/SASS"],
    frameworksLibraries: ["React", "Bootstrap"],
    toolsTechnologies: ["Git"],
    machineLearning: [],
    categories: [],
    source:
      "https://github.com/ryantran2165/ryantran2165.github.io/tree/source",
    demo: "",
  },
  {
    image: constructionImg,
    title: "Mobile Game",
    description:
      "A mobile, action, role-playing, strategy game I've been developing on my own using libGDX since 2016. It's a rather ambitious project, so it's not going to be released any time soon. It's also currently put on hold so I can focus on AI and machine learning.",
    languages: ["Java"],
    frameworksLibraries: [],
    toolsTechnologies: ["Git"],
    machineLearning: [],
    categories: ["Game"],
    source: "",
    demo: "",
  },
];

export default ProjectData;
