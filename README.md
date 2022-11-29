#  Table of Running Races

A simple table that fetches events' data from database with filter available.


**How to run this app:** 
First, you should create a PostgreSQL database with Russian locale and fill it with data from dump. Dump file is located in /server/db and called running_events_dump.sql

Second, you need to set up environment variables for server, in one of two options:
1. Create an .env file in /server folder based on .env.template. And run:
$ cd server
$ node -r dotenv/config ./db/db.js
2. Manually add environment variables as command line options, like this: 
$ cd server
$ node -r dotenv/config ./db/db.js dotenv_config_<option>=<value>
All the needed variables you can find in .env.template.

### Technologies used:
- React
- Node.js
- Express
- PostgreSQL

![The running events of Ukraine](Screenshot.jpg)
