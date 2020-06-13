import bjjPredictorImg from "../assets/bjj_predictor.jpg";
import handwrittenDigitsImg from "../assets/handwritten_digits_neural_network.jpg";
import donutDashImg from "../assets/donut_dash.jpg";
import cryptoOnlineImg from "../assets/crypto_online.jpg";
import polynomialRegressionImg from "../assets/polynomial_regression_gradient_descent.jpg";
import linearRegressionImg from "../assets/linear_regression_gradient_descent.jpg";
import infiniteMonkeyImg from "../assets/infinite_monkey_genetic_algorithm.jpg";
import faviconImg from "../assets/favicon.jpg";
import constructionImg from "../assets/under_construction.jpg";

const ProjectData = [
  {
    image: bjjPredictorImg,
    title: "BJJ Predictor",
    description:
      "Predicts the winner between two fighters in a BJJ match. I learned many new technologies for this project: TensorFlow, Keras, Flask (REST API), Jupyter Notebook, AWS (DynamoDB, Elastic Beanstalk, EC2, S3), Scrapy, Python, and NoSQL. The machine learning model I used is a DNN with two hidden layers and one dropout layer, achieving a test accuracy of 85% on average. When predicting with fighters that have fought before, the model's output makes sense most of the time. However, when the fighters have never fought before, the model's output may not agree as often with human opinion. My goal is to improve the model to output a result that the vast majority of BJJ practitioners would agree with.",
    tags: [
      "AWS",
      "CSS",
      "Flask",
      "HTML",
      "JavaScript",
      "Jupyter Notebook",
      "Keras",
      "Linux",
      "Machine Learning",
      "NoSQL",
      "Python",
      "React",
      "REST API",
      "Scrapy",
      "TensorFlow",
    ],
    source: "https://github.com/ryantran2165/bjj-predictor",
    demo: "https://www.ryanlongtran.com/bjj-predictor",
  },
  {
    image: handwrittenDigitsImg,
    title: "Handwritten Digits Neural Network",
    description:
      "Recognizes user-inputted handwritten digits using a neural network implemented by hand. The architecture is a feedforward neural network with 3 layers (784 input, 30 hidden, 10 output neurons), mini batch stochastic gradient descent, L2 regularization, cross entropy loss function, ReLU activations for hidden units, softmax output layer, and standardized inputs. Future improvements include batch normalization, gradient descent with momentum, automated hyperparameter optimization, and switching to a convolutional neural network.",
    tags: ["CSS", "HTML", "JavaScript", "Machine Learning", "React"],
    source: "https://github.com/ryantran2165/handwritten-digits-neural-network",
    demo: "https://www.ryanlongtran.com/handwritten-digits-neural-network",
  },
  {
    image: donutDashImg,
    title: "Donut Dash",
    description:
      "Collaborated with a fantastic artist (shoutout to Matt Slade!) to create and publish a polished Unity game. Chase the donut thief in this randomly generated, infinite 2D platformer! Eat coffee and donuts to increase or decrease your weight/speed, but watch out for obstacles!",
    tags: ["C#", "Game", "Unity"],
    source: "https://github.com/ryantran2165/donut-dash",
    demo: "https://ryantran2165.itch.io/donut-dash",
  },
  {
    image: cryptoOnlineImg,
    title: "Crypto Online",
    description:
      "Web app for encrypting/decrypting from text input or text file. Includes user login/registration through sessions and a MySQL database and three ciphers: simple substitution, double transposition, and RC4. Using Heroku free tier, so the server is a bit slow and finicky.",
    tags: [
      "Cryptography",
      "CSS",
      "HTML",
      "JavaScript",
      "Linux",
      "MySQL",
      "PHP",
      "SQL",
    ],
    source: "https://github.com/ryantran2165/crypto-online",
    demo: "https://crypto-online.herokuapp.com",
  },
  {
    image: polynomialRegressionImg,
    title: "Polynomial Regression Gradient Descent",
    description:
      "Performs polynomial regression using gradient descent on the user-inputted data points, graphs the polynomial, and displays the polynomial equation. This project is the ancestor to the Linear Regression Gradient Descent project.",
    tags: ["CSS", "HTML", "JavaScript", "Machine Learning", "React"],
    source:
      "https://github.com/ryantran2165/polynomial-regression-gradient-descent",
    demo: "https://www.ryanlongtran.com/polynomial-regression-gradient-descent",
  },
  {
    image: linearRegressionImg,
    title: "Linear Regression Gradient Descent",
    description:
      "Performs linear regression using gradient descent on the user-inputted data points, graphs the line, and displays the line equation. This project is the predecessor to the Polynomial Regression Gradient Descent project.",
    tags: ["CSS", "HTML", "JavaScript", "Machine Learning", "React"],
    source:
      "https://github.com/ryantran2165/linear-regression-gradient-descent",
    demo: "https://www.ryanlongtran.com/linear-regression-gradient-descent",
  },
  {
    image: infiniteMonkeyImg,
    title: "Infinite Monkey Genetic Algorithm",
    description:
      'Uses a genetic algorithm, modeled after Darwin\'s theory of evolution, to arrive at a target phrase through the operations of mutation, crossover, and selection. "The infinite monkey theorem states that a monkey hitting keys at random on a typewriter keyboard for an infinite amount of time will almost surely type any given text" -Wikipedia.',
    tags: ["CSS", "HTML", "JavaScript", "Machine Learning", "React"],
    source: "https://github.com/ryantran2165/infinite-monkey-genetic-algorithm",
    demo: "https://www.ryanlongtran.com/infinite-monkey-genetic-algorithm",
  },
  {
    image: faviconImg,
    title: "Personal Website",
    description: "This! My personal website created with React and Bootstrap.",
    tags: ["CSS", "HTML", "JavaScript", "React"],
    source:
      "https://github.com/ryantran2165/ryantran2165.github.io/tree/source",
    demo: "",
  },
  {
    image: constructionImg,
    title: "Mobile Game",
    description:
      "A mobile, action, role-playing, strategy game I've been developing on my own for the past 3 years using libGDX. It's a rather ambitious project, so it's not going to be released any time soon. It's also currently put on hold to focus on machine learning. Source is in a private repository, but I'd be more than happy to share code samples if requested.",
    tags: ["Game", "Java"],
    source: "",
    demo: "",
  },
];

export default ProjectData;
