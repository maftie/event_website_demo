# Event Website Demo

Simple demo of a MERN CRUD app utilizing Redux that allows users to register accounts, login, purchase tickets for events, and create events provided that their account is flagged as an eligible event creator. 

## Running the web-app

The best way to run this locally is to build this project into a docker image and run it via the following command;

```
docker run [name of your image here] -p 3001:3001
```

You can attempt to run this via the start-prod script;

```
npm run start-prod
```

However, there appear to be compatability issues that I have not yet had a chance to explore depending on your version of Node.

## To-Do/Known Issues

- Fix Issue Regarding 422 Unprocessable Entity response when attempting to create an event
- Deploy to Heroku
