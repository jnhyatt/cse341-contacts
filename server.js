import express from 'express';
import cors from 'cors';
import mongoClient from './db/connect.js';

const app = express();
const port = process.env.PORT || 8080;
const server = app
    .use(cors())
    // .use('/professional', professional)
    .listen(port, () => {
        console.log(`listening on port ${port}`);
    });

// Gracefully close MongoDB connection on server shutdown (ctrl+C)
process.on('SIGINT', async () => {
    console.log('\nClosing MongoDB connection...');
    await mongoClient.close();
    server.close(() => process.exit(0));
});
