# React & Express Full Stack Template

Full Stack Template using _React_ and _Express_ that has user authentication using _jwt_. The application uses _Mongoose_ & _MongoDB_ for the database.

## Prerequisites

Install the dependencies using `npm install` and then create a **.env** file in the root folder.

These parameters are mandatory in the **.env** file.

| Parameters            | Description                                     |
| --------------------- | ----------------------------------------------- |
| MONGODB_DATABASE_URL  | Connection string to your MongoDB               |
| MONGODB_DATABASE_NAME | Name of the Database in MongoDB                 |
| HASH_SECRET           | Random string used for hasing, (your secret)    |
| JWT_SECRET            | Random string used for jwt, (your secret)       |
| ADMIN_SECRET          | Bearer token for admin api calls, (your secret) |

&nbsp;

###### Example of how the file would look like:

```
MONGODB_DATABASE_URL = mongodb://username:password@host:port/database?options...
MONGODB_DATABASE_NAME = myDatabase
HASH_SECRET = BNTI7KCUJL5N4MSNVY6DBH5RL1M469M5
JWT_SECRET = BV9G9MAV6LYD8U6YIBS07AYHVB8QOXF2
ADMIN_SECRET = 5N4MSNVY6DBH5RL1M469M507AY
```

&nbsp;

## Package.json Scripts

| Scripts          | Description                   |
| ---------------- | ----------------------------- |
| npm run frontend | Runs the frontend in dev mode |
| npm run backend  | Runs the backend              |
| npm run build    | Builds the frontend           |

To run the application in production mode, run `npm run build` then `npm run backend`, now you can view it in the browser!
