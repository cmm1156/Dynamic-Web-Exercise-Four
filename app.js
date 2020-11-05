const express = require('express');

const app = express();

const port = process.env.POST || 4000;

const indexRoute = require('routes/index.js')

app.use("/", indexRoute);

app.listen(port, () => console.log('Exercise Four is running at localhost: ${port}')
);