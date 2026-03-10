import CrowdsurferImage from "@/assets/CrowdsurferImage.jpg";
import GitTissuesImage from "@/assets/GitTissuesImage.jpg";
import LockedImage from "@/assets/LockedImage.jpg";
import ScriptSenseImage from "@/assets/ScriptSenseImage.jpg";

export default [
    {
        id: 1,
        image: CrowdsurferImage,
        projectTitle: "CrowdSurfer",
        projectDescription: "Developed a React Native mobile app that tracks user locations to determine a building's live occupancy. Built Node.js microservices with Express.js to manage location data, containerized services with Docker, and integrated a cloud-based NoSQL backend with CI/CD pipelines for continuous testing and deployment.",
        projectLink: "https://github.com/MarcoDava/CrowdSurfer",
    },
    {
        id: 2,
        image: GitTissuesImage,
        projectTitle: "Git Tissues",
        projectDescription: " Built a full-stack web app that automates Git issue assignment and workflow tracking using GraphQL APIs. Implemented backend endpoints in Node.js, integrated with GitHub REST APIs, and improved CI/CD efficiency through automated backend task scheduling.",
        projectLink: "https://github.com/MarcoDava/ConUHacks",
    },
    {
        id: 3,
        image: LockedImage,
        projectTitle: "Locked App",
        projectDescription: "Developed a full-stack web application to track habits and rate productivity with a data-driven dashboard. Created backend APIs in Node.js for user authentication with MySQL and containerized services using Docker, following clean modular architecture and reusable React components.",
        projectLink: "https://github.com/MarcoDava/PomodoroTimer",
    },
    {
        id: 4,
        image: ScriptSenseImage,
        projectTitle: "ScriptSense",
        projectDescription: "Created a handwriting recognition web app achieving ~80% accuracy using TensorFlow with a MongoDB backend. Deployed services on AWS with REST APIs for scalable storage and retrieval, and applied CI practices and observer design patterns to enhance reliability.",
        projectLink: "https://github.com/MarcoDava/Handwriting_Recognition_Project",
    },
    {
        id: 5,
        image: "https://marcodava.github.io/pictures/simple-playing-cards-isolated-on-white-background-vector.jpg",
        projectTitle: "Basra",
        projectDescription: "An interactive card game played on the console with a computer player algorithm, coded using C.",
        projectLink: "https://github.com/MarcoDava/Basra-Card-Game",
    },
    {
        id: 6,
        image: "https://marcodava.github.io/pictures/tic-tac-toe-game-symbol-icon-in-line-style-design-isolated-on-white-background-editable-stroke-free-vector.jpg",
        projectTitle: "Tic Tac Toe",
        projectDescription: "An interactive console game with an automatic computer player.",
        projectLink: "https://github.com/MarcoDava/Tic-Tac-Toe",
    },
    {
        id: 7,
        image: "https://marcodava.github.io/pictures/Qbot.png",
        projectTitle: "Q-Bot Pathing",
        projectDescription: "Coded a Roomba to follow a line around in a loop and dump an object at a specified location using Python.",
        projectLink: "NA",
    },
    {
        id: 8,
        image: "https://marcodava.github.io/pictures/QArm.jpg",
        projectTitle: "Q-Arm Algorithm",
        projectDescription: "Coded a robot arm to transfer medical containers into autoclaves, capable of being controlled by a user.",
        projectLink: "https://github.com/MarcoDava/RobotArmPythonProgram",
    },
    {
        id: 9,
        image: "https://user-images.githubusercontent.com/36328597/43992265-c0a304ca-9d31-11e8-89d3-931ca3e3227f.png",
        projectTitle: "Boston Housing Price Prediction",
        projectDescription: "Predicts Boston Housing prices using a vectorized gradient descent algorithm which takes in various features to predict the Median value of owner-occupied homes.",
        projectLink: "https://github.com/MarcoDava/SimpleLinearRegressionModel",
    },
    {
        id: 10,
        image: "",
        projectTitle: "Networkify",
        projectDescription: "Built a full-stack platform that transforms raw LinkedIn connection exports into an interactive 2D/3D network graph using Python, FastAPI, Next.js, Three.js, and Neo4j to reveal hidden referral paths to target companies. Engineered an AI-powered outreach system that combines Backboard.io (GPT-4o-mini) and Gemini API to generate context-aware, personalized messages grounded in the user’s graph data and mutual connections. Implemented secure authentication with Auth0 and activity tracking to deliver a production-grade submission.",
        projectLink: "",
    },
    {
        id: 11,
        image: "",
        projectTitle: "MockRot",
        projectDescription: "Built a full-stack web application during Mac-a-thon’s 24-hour hackathon that educates users to interview based on a job description, where the interviewer inherits a persona defined by the user and powered by Gemini. Utilized ElevenLabs to output text-to-speech using the persona’s voice and speech-to-text to receive user input. Implemented RAG with Backboard.io, improving response time by 50% and applying persistent memory with Gemini.",
        projectLink: "",
    },
];