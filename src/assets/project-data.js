import handwrittenDigitsImg from "../assets/handwritten_digits_neural_network.jpg";
import linearRegressionImg from "../assets/linear_regression_gradient_descent.jpg";
import infiniteMonkeyImg from "../assets/infinite_monkey_genetic_algorithm.jpg";
import faviconImg from "../assets/favicon.jpg";
import constructionImg from "../assets/under_construction.jpg";

const ProjectData = [
  {
    image: handwrittenDigitsImg,
    title: "Handwritten Digits Neural Network",
    description:
      "Demo of recognizing handwritten digits using a neural network made from scratch. The architecture is stochastic gradient descent on a feedforward neural network with 3 layers (784 input, 30 hidden, 10 output neurons), a mean squared error cost function, and a sigmoid activation function. Future improvements include using a cross-entropy cost function, a ReLU activation function, a softmax output layer, He/Xavier/Kaiming initialization, batch normalization, and regularization. Training data acquired from the MNIST database.",
    tags: ["JavaScript", "HTML", "CSS"],
    source: "https://github.com/ryantran2165/handwritten-digits-neural-network",
    demo: "https://www.ryanlongtran.com/handwritten-digits-neural-network/"
  },
  {
    image: linearRegressionImg,
    title: "Linear Regression Gradient Descent",
    description:
      "Demo of linear regression using gradient descent. This demo graphs a line of best fit to the user-inputted data set. It uses gradient descent to tweak the slope and y-intercept values of the line until it reaches a local minimum error/cost. Future project ideas include a similar demo but with multiple linear regression or polynomial regression instead.",
    tags: ["JavaScript", "HTML", "CSS"],
    source:
      "https://github.com/ryantran2165/linear-regression-gradient-descent",
    demo: "https://www.ryanlongtran.com/linear-regression-gradient-descent/"
  },
  {
    image: infiniteMonkeyImg,
    title: "Infinite Monkey Genetic Algorithm",
    description:
      'Demo of the infinite monkey theorem using a genetic algorithm. "The infinite monkey theorem states that a monkey hitting keys at random on a typewriter keyboard for an infinite amount of time will almost surely type any given text" -Wikipedia. This demo uses a genetic algorithm, modeled after Darwin\'s theory of evolution, to arrive at a target phrase through the operations of mutation, crossover, and selection.',
    tags: ["JavaScript", "HTML", "CSS"],
    source: "https://github.com/ryantran2165/infinite-monkey-genetic-algorithm",
    demo: "https://www.ryanlongtran.com/infinite-monkey-genetic-algorithm/"
  },
  {
    image: faviconImg,
    title: "Personal Website",
    description: "This! My personal website created with React and Bootstrap.",
    tags: ["JavaScript", "HTML", "CSS"],
    source:
      "https://github.com/ryantran2165/ryantran2165.github.io/tree/source",
    demo: ""
  },
  {
    image: constructionImg,
    title: "Mobile Game",
    description:
      "A mobile, action, role-playing, strategy game I've been developing on my own for the past 3 years using libGDX, a cross-platform game development framework. Estimated release date is 2021! Currently under private repo, but I'd be more than happy to share code samples if requested.",
    tags: ["Java"],
    source: "",
    demo: ""
  }
];

export default ProjectData;
