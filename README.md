# Steps to Create and Deploy:

## set up local

### in your browser

1. fork this repo

### in your terminal

1. clone your fork of this repo onto your local computer somewhere outside the class repo
1. `cd` into the local repo
1. don't forget to run `npm install`

### local postgres

1. open your postgres app and start the db server

#### if you deleted your old "contacts" database from class

1. in your terminal, if running `psql` gives you "command not found", run `ln -s /Applications/Postgres.app/Contents/Versions/latest/bin/psql /usr/local/bin/psql`

1. in the postgres app, double click one of the existing databases to enter `psql`
1. once inside `psql`, run:
    1. `CREATE DATABASE contacts;`
    1. `\c contacts`
    1. `CREATE TABLE people (id SERIAL, name VARCHAR(16), age INT);`
    1. `INSERT INTO people ( name, age ) VALUES ( 'Matt', 38 );`
    1. `INSERT INTO people ( name, age ) VALUES ( 'Sally', 54 );`
    1. `INSERT INTO people ( name, age ) VALUES ( 'Zanthar', 4892 );`

### in your terminal

1. run `nodemon`

### in your browser

go to http://localhost:3000/ to view local app (note this uses your local database)

confirm all CRUD functionality

## set up heroku

### in your terminal

1. run `heroku create` (take note of the app name for later)

### in your browser

1. go to heroku.com in your browser and sign in
1. find this newly created heroku app in your list of available apps and click on it
1. go to resources to use the `Add-ons` search bar
1. search for postgres and choose Heroku Postgres
1. choose "Hobby Dev - Free"
1. click provision

### in your terminal

1. run `heroku pg:psql`
1. once inside heroku's psql, run
    1. `CREATE TABLE people (id SERIAL, name VARCHAR(16), age INT);`
    1. `INSERT INTO people ( name, age ) VALUES ( 'Matt', 38 );`
    1. `INSERT INTO people ( name, age ) VALUES ( 'Sally', 54 );`
    1. `INSERT INTO people ( name, age ) VALUES ( 'Zanthar', 4892 );`
1. exit heroku psql with `\q`
1. run `git push heroku master`
1. run `heroku open` to see app (note this uses your heroku postgres database, which will have different data than your local db)

## Rerunning local after initial set up

Open Postgres app and start the db

In terminal:

1. Go to repo root dir
1. Run `nodemon`

In Browser go to http://localhost:3000/
