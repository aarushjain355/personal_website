import WeatherBot from '../assets/WeatherBot.jpg'
import NBA from '../assets/NBA.png'
import Carla from "../assets/carla.png"
import Trevor from "../assets/Trevor.png"
import DeliveryBot from "../assets/DeliveryBot.jpg"
import Blackjack from "../assets/Blackjack.jpg"
import Hangman from "../assets/hangman.png"
import RC_CAR from "../assets/RC_CAR.jpg"
import DesktopGUI from "../assets/desktop_app.png"


export const data=[
    {
        id:1,
        name:"WeatherBot",
        image:WeatherBot,
        description: "\nWeatherBot is an autonomous vehicle that is able to navigate around the city of your choice. Simply choose the city you wish and the robot will extract the weather in that city at the current time and proceed to navigate around the environment based on the weather. Weaterbot implements a unique PID loop which sends controlled output signals to the motors with the constants being dependent on the weather. This project was built using Arduino, ROS, Tkinter, Python, and C++. The hardware components used were 5 digital IR sensors, 4 dc motors, 1 l298n motor driver, a buzzer, a led, and a servo motor. In order to extract weather information, a third party call was madeto the OpenWeatherAPI."
    },
    {
        id:2,
        name:"AutoBot\n",
        image:Carla,
        description: "\nAutoBot is an advanced autonomous path planning, navigation, and controls system developed with ROS and tested with CARLA. The system integrates the gmapping and amcl packages from the ROS framework which perform Simulataneous Localization and Mapping (SLAM) techniques to create a map of the environment. After this task, Djikstra's algorithm is applied to create a global path to the destination and navigates towards each checkpoint of the path with the help of a local path planner called the Dynamic Window Approach. Throughout the navigation, the system also rapidly self improves by applying Particle Swarm Optimization (PSO) to the DWA weights after each iteration. In the future, I would like to implement this on an STM32 microcontroller after the CARLA testing is completed."
    },
    {
        id:3,
        name:"DeliveryBot",
        image:DeliveryBot,
        description: "\nDeliveryBot is your very own personal delivery bot which delivers items to students to different rooms on various floors of a pre-determined building. The robot was built using an EV3 robotics kit and used perphierals such as dc motors, ultrasonic sensors, touch sensors, and color sensors. The platform used to write code for the robot was RobotC. To enhance obstacle avoidance, a PID control module was implemented and allowed the robot to safely navigate around dynamic obstacles."
    },
    {
        id:4,
        name:"Trevor",
        image:Trevor,
        description: "\nTrevor is your very own personal fitness and nutrition fitness app that aims to customize a full workout and diet plan given the personal information of the user. The app requires the user to register an account to keep track of their information and uses JWT authentication to authenticate incoming users. The user interface was designed with React while the backend was handled by Django. To aid with the customization process, the backend handles external api calls to various nutrition and fitness apis to provide the very best meal and workout plans."
    },
    {
        id:5,
        name:"Blackjack",
        image:Blackjack,
        description: "\nBlackjack is a custom variation of the traditional blackjack game created using Java and can be played on the terminal window. This project was made to showcase my skills in an object-oriented programming language and showcases my skills from creating custom classes and objects to concepts like inheritence, polymorphism, and encapsulation. The project files includes a total of 5 classes which are each in charge of controlling an aspect of the game where some extend others for added functionality. One particular aspect of the game is the system outputs a joke to the user when they are hit in which the jokes come from a text file containing jokes from the internet."
    },
    {
        id:6,
        name:"Hangman",
        image:Hangman,
        description: "\nHangman is a variation of the hangman game programmed in java and can be played on the terminal. This project was built to showcase my skills in string manipulation and function creation. The game includes three main levels which are easy, medium, and difficult. There are also different categories from which the word to be guessed can be chosen from. The three main categories are Animals, Food, and Sports and each have files that contain a list of words related to the category, one of which will be randomly chosen. For every incorrect letter or word attempt the user had, the program would output an updated picture of the handman to the console using slashes and periods. At the end, depending on the outcome, the user woudl receive a custom victory or defeat message."
    },
    {
        id:7,
        name:"NBA Player Position Predictor",
        image:NBA,
        description: "\nA model imported from the scikit-learn library and trained with data imported from the espn website. Given the regular season statistics of each individual player, this model is able to predict the position they play."
    },

    {
        id:8,
        name:"RC Car",
        image:RC_CAR,
        description: "\nRC Car is a joystick controlled car built in a team of 3 under 90 mins in a team challenge. In order to make the car move, we utilized a dc motor which controlled 3 wheels and moved the car back and forth while integrating a servo motor at the front to steer the car left and right. To program the car, we integrated the ESP8266 microcontroller to control the DRV8833 H-bridge motor driver and run the motors. On the firmware side, we used the Arduino IDE and the websocket library to create a custom wifi network and allow for the car to be remotely controlled by a joystick provided by the web interface. At the end of the challenge, all the car were tested against each other in an obstacle course and our team ended up recording the fasted time."
    },

    {
        id:9,
        name:"Arty",
        image:DesktopGUI,
        description: "\nArty is a software desktop application which allows users to enter foods they would like to see cartoon images of and then get to view 5 cartoon versions of the food they entered. The application uses Tkinter for creating GUI interface that interacts with users, the OpenSplash API to retrieve 5 images with the keyword the users ented being passed as an argument, and opencv to perform image processing operations to convert it into a cartoon version of itself. The opencv portion of the project reads the images downloaded by the script retrieving them from the API and first performs a median blurring operation to identify all the edges. It then quantizes the image by simplifying it to a specified number of colors to make it simpler. Finally, it combines the two by blurring the image bilateraly and downloads the image into the directory for the GUI to access and display to the user."
    },


]