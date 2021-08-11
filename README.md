# Unit 18 Homework: Workout Tracker

For this assignment, we were asked to create a workout tracker, using a Mongo database with a Mongoose schema and handle routes with Express. The app should keep track of past workouts, and display data in a graph format


Check out the [deployed app here!](https://ancient-garden-53272.herokuapp.com/?id=61133edb619fea0015af8a76)

## User Story

* As a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.

## Business Context

A consumer will reach their fitness goals more quickly when they track their workout progress.

## Creating the App

My primary task with this assigment was to link MongoDB Atlas to my app, which was deployed on Heroku, and make sure that all of the routes and models were set up correctly on the back end. Installing the correct dependencies included an 'npm install' of Express, Mongoose, and Morgan.

## Troubleshooting

The hardest part of this project was of course correctly creating and mapping the routes; this took some time, as I ran into issues correctly exporting files; some simple typos in my routes created some complications as well! I know that I spent more time code reviewing myself than I actually did writing the routes...
I also created stress for myself in the linking of my project to Heroku. This was a reminder to slow down and double check my code! One extra character in my project name on Heroku prevented all my code pushes from being picked up!