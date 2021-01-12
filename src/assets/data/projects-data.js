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
      "Utilized GCP Maps and Directions APIs to optimize package delivery routes",
    ],
    categories: ["Full-Stack"],
    programmingLanguages: ["JavaScript/JSX", "Python", "HTML", "CSS/SASS"],
    frameworksLibraries: ["React", "Redux", "Bootstrap", "Django"],
    toolsTechnologies: ["Git", "PostgreSQL", "GCP", "REST API", "Heroku"],
    machineLearning: [],
    source: "https://github.com/ryantran2165/office-supply-depot-frontend",
    demo: "https://office-supply-depot-frontend.netlify.app",
  },
  {
    image: bjjPredictorImg,
    title: "BJJ Predictor",
    date: "Jun. 2020 – Aug. 2020",
    description: [
      "Built full-stack web app with React frontend and Flask REST API backend that predicts the winner of Brazilian Jiu-Jitsu matches with 70% accuracy using deep neural networks",
      "Performed full machine learning workflow: web scraping with Scrapy, data exploration with Seaborn, data cleaning with pandas, model training with TensorFlow, and deployment with AWS (Elastic Beanstalk, DynamoDB, EC2, S3)",
    ],
    categories: ["Full-Stack", "Machine Learning"],
    programmingLanguages: ["JavaScript/JSX", "Python", "HTML", "CSS/SASS"],
    frameworksLibraries: ["React", "Bootstrap", "Flask"],
    toolsTechnologies: ["Git", "Linux", "AWS", "REST API", "NoSQL"],
    machineLearning: ["TensorFlow", "Keras", "scikit-learn", "NumPy", "pandas"],
    source: "https://github.com/ryantran2165/bjj-predictor",
    demo: "https://www.ryanlongtran.com/bjj-predictor",
  },
  {
    image: connect4aiImg,
    title: "Connect 4 AI",
    date: "Aug. 2020 – Dec. 2020",
    description: [
      "Implemented Connect 4 AI web app with varying difficulties using deep Q-learning and minimax",
      "Trained deep Q-network using self-play reinforcement learning with limited computational resources",
    ],
    categories: ["Machine Learning"],
    programmingLanguages: ["JavaScript/JSX", "HTML", "CSS/SASS"],
    frameworksLibraries: ["React", "Bootstrap"],
    toolsTechnologies: ["Git", "GCP"],
    machineLearning: ["TensorFlow"],
    source: "https://github.com/ryantran2165/connect4-ai",
    demo: "https://www.ryanlongtran.com/connect4-ai",
  },
  {
    image: digitRecognizerImg,
    title: "Digit Recognizer",
    date: "Jan. 2020 – Aug. 2020",
    description: [
      "Created web app that recognizes user-drawn digits with 90% accuracy using self-implemented feedforward (FFNN) and convolutional (CNN) neural networks",
      "Solidified understanding of fundamental machine learning theory and mathematics behind FFNNs and CNNs",
    ],
    categories: ["Machine Learning"],
    programmingLanguages: ["JavaScript/JSX", "HTML", "CSS/SASS"],
    frameworksLibraries: ["React", "Bootstrap"],
    toolsTechnologies: ["Git"],
    machineLearning: [],
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
    categories: ["Game"],
    programmingLanguages: ["C#"],
    frameworksLibraries: [],
    toolsTechnologies: ["Git", "Unity"],
    machineLearning: [],
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
    categories: ["Full-Stack"],
    programmingLanguages: ["JavaScript/JSX", "SQL", "HTML", "CSS/SASS", "PHP"],
    frameworksLibraries: ["Bootstrap"],
    toolsTechnologies: ["Git", "Linux", "MySQL", "Heroku"],
    machineLearning: [],
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
    categories: ["Machine Learning"],
    programmingLanguages: ["JavaScript", "HTML", "CSS/SASS"],
    frameworksLibraries: ["React", "Bootstrap"],
    toolsTechnologies: ["Git"],
    machineLearning: [],
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
    categories: ["Machine Learning"],
    programmingLanguages: ["JavaScript/JSX", "HTML", "CSS/SASS"],
    frameworksLibraries: ["React", "Bootstrap"],
    toolsTechnologies: ["Git"],
    machineLearning: [],
    source: "https://github.com/ryantran2165/infinite-monkey",
    demo: "https://www.ryanlongtran.com/infinite-monkey",
  },
  {
    image: faviconImg,
    title: "Personal Website",
    date: "Oct. 2019 – Present",
    description: [
      "Created website with React as a portfolio for my projects and career",
    ],
    categories: [],
    programmingLanguages: ["JavaScript/JSX", "HTML", "CSS/SASS"],
    frameworksLibraries: ["React", "Bootstrap"],
    toolsTechnologies: ["Git"],
    machineLearning: [],
    source:
      "https://github.com/ryantran2165/ryantran2165.github.io/tree/source",
    demo: "",
  },
  {
    image: constructionImg,
    title: "Mobile Game",
    date: "Jun. 2016 – Present",
    description: [
      "Developing action, role-playing, strategy 2D mobile game",
      "It's a rather ambitious project, so it's not going to be finished any time soon",
      "Currently put on hold to focus on machine learning and AI",
    ],
    categories: ["Game"],
    programmingLanguages: ["Java"],
    frameworksLibraries: [],
    toolsTechnologies: ["Git"],
    machineLearning: [],
    source: "",
    demo: "",
  },
];

export default ProjectData;
