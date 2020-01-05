# Event Website Demo

Simple demo of a MERN CRUD app utilizing Redux that allows users to register accounts, login, purchase tickets for events, and create events provided that their account is flagged as an eligible event creator. The styling is not intended to be attractive as it was part of my first foray into grasping basic bootstrap functionality. Similarly, many sass files were simply created in my attempts to wrap my head around the 7 in 1 file structure and sass in general, and are not intended to be used. 

## Running the web-app

The best way to run this locally is to build this project into a docker image and run it via the following command;

```
docker run [name of your image here] -p 3001:3001
```

You can attempt to run this via the start-prod script;

```
npm run start-prod
```