import { config } from 'dotenv';
config({path: './config/config.env'});
import express from 'express';
import { json } from 'body-parser';

const app = express();
app.use(json());
import cors from 'cors';

// connect to database
import connectDB from './database/connect';

// routes
import person from './routes/person';

app.use(cors())

// swagger
import { serve, setup } from 'swagger-ui-express';
import { load } from 'yamljs';
const swaggerDocument = load('./swagger.yaml')



app.get('/', (req, res) => {
    res.send('<h1>HNG-Stgae2 CRUD API </h1><a href="/api-docs">Documentation</a>')
  });

app.use('/api-docs', serve, setup(swaggerDocument))

app.use('/api', person);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server listening on port ${port}`);
        });
    } catch (err) {
        console.log(err);
    }
};

start();

