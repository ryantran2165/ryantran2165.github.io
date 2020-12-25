import officeSupplyDepotImg from "../images/office_supply_depot.jpg";
import bjjPredictorImg from "../images/bjj_predictor.jpg";
import connect4aiImg from "../images/connect4_ai.jpg";
import digitRecognizerImg from "../images/digit_recognizer.jpg";
import donutDashImg from "../images/donut_dash.jpg";
import cryptoOnlineImg from "../images/crypto_online.jpg";
import polynomialRegressionImg from "../images/polynomial_regression.jpg";
import infiniteMonkeyImg from "../images/infinite_monkey.jpg";
import faviconImg from "../images/favicon.jpg";
import constructionImg from "../images/under_construction.jpg";

const ProjectData = [
  {
    image: officeSupplyDepotImg,
    title: "Office Supply Depot",
    date: "Oct. 2020 – Dec. 2020",
    description: [
      "Headed group project in developing full-stack e-commerce website with React frontend and Django REST API backend",
      "Includes product search/filter/sort, user signup/signin using JWT authentication, cart/checkout, driver/delivery route optimization, and admin operations functionality",
    ],
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
    date: "Jun. 2020 – Aug. 2020",
    description: [
      "Built full-stack web app with React frontend and Flask REST API backend that predicts the winner of Brazilian Jiu-Jitsu matches",
      "Experienced full machine learning workflow: web scraping with Scrapy, data exploration with Seaborn, data cleaning with pandas, model training with TensorFlow, and deployment with AWS (Elastic Beanstalk, DynamoDB, EC2, S3)",
    ],
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
    date: "Aug. 2020 – Present",
    description: [
      "Implemented Connect 4 AI web app with varying difficulties using Q-learning, NeuroEvolution of Augmenting Topologies (NEAT), and minimax",
    ],
    languages: ["JavaScript/JSX", "HTML", "CSS/SASS"],
    frameworksLibraries: ["React", "Bootstrap"],
    toolsTechnologies: ["Git", "GCP"],
    machineLearning: ["TensorFlowJS"],
    categories: ["Machine Learning"],
    source: "https://github.com/ryantran2165/connect4-ai",
    demo: "https://www.ryanlongtran.com/connect4-ai",
  },
  {
    image: digitRecognizerImg,
    title: "Digit Recognizer",
    date: "Jan. 2020 – Aug. 2020",
    description: [
      "Created web app that recognizes user-drawn digits using self-implemented feedforward and convolutional neural networks",
    ],
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
    date: "Mar. 2020 – May 2020",
    description: [
      "Collaborated with an artist to publish a 2D Unity platformer game",
    ],
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
    date: "Jan. 2020",
    description: [
      "Constructed full-stack cryptography web app supporting 3 ciphers and secure user login/registration using sessions",
    ],
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
    date: "May 2020",
    description: [
      "Created web app that performs and graphs polynomial regression using gradient descent on user-inputted data points",
    ],
    languages: ["JavaScript", "HTML", "CSS/SASS"],
    frameworksLibraries: ["React", "Bootstrap"],
    toolsTechnologies: ["Git"],
    machineLearning: [],
    categories: ["Machine Learning"],
    source: "https://github.com/ryantran2165/polynomial-regression",
    demo: "https://www.ryanlongtran.com/polynomial-regression",
  },
  {
    image: infiniteMonkeyImg,
    title: "Infinite Monkey",
    date: "Dec. 2019",
    description: [
      "Created web app that uses a genetic algorithm to evolve a target phrase, simulating the infinite monkey theorem",
    ],
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
    date: "Oct. 2019 – Present",
    description: [
      "Created website with React to serve as a portfolio of my projects and career",
    ],
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
    date: "Jun. 2016 – Present",
    description: [
      "Developing 2D mobile action, role-playing, strategy game",
      "It's a rather ambitious project, so it's not going to be finished any time soon",
      "Currently put on hold to focus on AI and machine learning",
    ],
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
