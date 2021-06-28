const express = require('express');
const sequelize = require('./sequelize');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connected...');
  })
  .catch((err) => {
    console.log('Error: ' + err);
  });

const app = express();

const corsOptions = {
  origin: process.env.DEVELOMPENT_URL,
  credentials: true,
  exposedHeaders: ['auth-token', 'admin'],
};

app.use(cors(corsOptions));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use((req, res, next) => {
  if (req.headers.authorization) {
    jwt.verify(
      req.headers.authorization.split(' ')[1],
      tokenKey,
      (err, payload) => {
        if (err) next();
        else if (payload) {
          for (let user of users) {
            if (user.id === payload.id) {
              req.user = user;
              next();
            }
          }

          if (!req.user) next();
        }
      }
    );
  }

  next();
});

const PORT = 3001;

const indexRoute = require('./routes/index');
const listRoute = require('./routes/list');
const loginRoute = require('./routes/login')
const createTestRoute = require('./routes/createTest')
const questionListRoute = require('./routes/questionList')

app.use('/', indexRoute);
app.use('/list', listRoute);
app.use('/login', loginRoute);
app.use('/createTest', createTestRoute);
app.use('/questionList', questionListRoute);

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, function () {
      console.log('Сервер ожидает подключения...');
    });
  })
  .catch((err) => console.log(err));

app.use(function (req, res, next) {
  next(res.status(404).send('Такой страницы не существует'));
});

module.exports = app;
