# Contact API

## Instructions:

Create a new folder contacts_api:

1- Create a new file server.js

2- Init your project npm init -y => inside the contacts_api folder

3- Add your .gitignore file, make sure to add node_modules/ and .env

4- Install your dependencies (express, dotenv, mongoose)

5- Create your Express server

6- Create the mongoConfig file to connect to your database (give your database a new name in the MongoDB URI in your .env file)

7- Create the contactsRouter that will handle all the requests to the endpoint '/contacts

8- Create the Schema / Model

9- When you're using Postman to test your new API, create a new Collection so that you can organize all of the request.

## Schema:

name: type: String, required: true

email: type: String,

phone: type: String, required: true

contactType: type: String, default: 'personal'

created_at: type: Date, default: Date.now()
