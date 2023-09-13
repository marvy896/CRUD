const dotenv = require('dotenv');
dotenv.config({path: './config/config.env'});
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const cors = require('cors')

// connect to database
const connectDB = require('./Database/connect');

// routes
const person = require('./routes/person');

app.use(cors())

// swagger
const swaggerUI = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerDocument = YAML.load('./swagger.yaml')



app.get('/', (req, res) => {
    res.send('<h1>HNG-Stgae2 CRUD API </h1><a href="/api-docs">Documentation</a>')
  });

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

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