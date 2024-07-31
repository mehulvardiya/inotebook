const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/?directConnection=true"; // Use your MongoDB URI

const connectToMongo = async () => {
    try {
        console.log('Attempting to connect to MongoDB...');
        await mongoose.connect(mongoURI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
        process.exit(1);  // Exit the process with a failure code
    }
};

module.exports = connectToMongo;
