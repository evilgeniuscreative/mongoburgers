const express = require('express');
const expressHandlebars = require('express-handlebars');
const mongoose = require('mongoose');
const path = require('path');
const { DATABASE_URL, PORT } = require('./config.js');

const { Topping } = require('./models/toppings.js');
const theToppings = require('./data/toppingslist.js');
const theMeats = require('./data/meatlist.js');

const hbs = expressHandlebars.create({
  defaultLayout: null,
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,
  },
});

const app = express();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//--------------  Import Models  ----------------//

const { Meat } = require('./models/meats');
// const { AllTheToppings } = require('./models/toppings');

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// start server
const startServer = async () => {
  // connect to to DB
  await mongoose.connect(DATABASE_URL);

  // Connection statuses
  // app.on('error', (err) => console.log(err.message + 'is MongoDB not running?'));

  // after connect, turn on server
  app.listen(PORT, function () {
    console.log('Your app is listening on port: ' + PORT);
  });

  //--------------  Routes Middleware  ----------------//

  const meatsRouter = require('./routes/meatsRouter.js');

  app.get('/', (req, res) => {
    res.render('index', { title: 'Mongoburgers', meatsRouter });
  });

  // app.on('connected', () => {
  //   console.log('MongoDB connected on:', DATABASE_URL);
  // });
  // app.on('disconnected', () => {
  //   console.log('MongoDB disconnected from:', DATABASE_URL);
  // });
};

//Meat.insertMany(theMeats.everyMeat);
//Topping.insertMany(theToppings.everyTopping);

startServer();
