import { config } from 'dotenv';
config({ path: './config/config.env' });
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import yamljs from 'yamljs';
import connectDB from './database/connect.js';
import person from './routes/person.js';
import { serve, setup } from 'swagger-ui-express';
import * as fs from 'fs';
import * as YAML from 'js-yaml';
 

const { json } = bodyParser;
const swaggerDocument = YAML.load(fs.readFileSync('./swagger.yaml', 'utf8'));
const app = express();
app.use(json());
app.use(cors());


app.get('/', (req, res) => {
  res.send('<h1>HNG-Stgae2 CRUD API </h1><a href="/api-docs">Documentation</a>');
});

app.use('/api-docs', serve, setup(swaggerDocument));

app.use('/api', person);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  } catch (err) {
    console.error(err);
  }
};

start();
