const dotenv = require('dotenv');
dotenv.config();

// Loads the variables from the .env file and exports them.
module.exports = {
    mongodb: {
        database_url: process.env.MONGODB_DATABASE_URL,
        database: process.env.MONGODB_DATABASE_NAME
    },
    secrets: {
        hash: process.env.HASH_SECRET,
        jwt: process.env.JWT_SECRET
    },
    react_build_folder: process.env.REACT_BUILD_FOLDER
};