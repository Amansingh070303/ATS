/*const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
//const crypto = require('crypto');
const path = require('path');
const hbs = require('hbs');
const indexRoutes = require('./routes/index');
const authRoutes = require('./routes/auth');

const app = express();

// Connect to MongoDB
mongoose.connect("mongodb+srv://amansingh07032003:aman123@cluster0.yujjsaj.mongodb.net/ATS", {
  useNewUrlParser: true,
  useUnifiedTopology: true
  
});



// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
//
app.use(session({
  secret: "aman123",
  resave: false,
  saveUninitialized: true
}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use('/', indexRoutes);
app.use('/auth', authRoutes);

// Start Server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});*/

const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const bodyParser = require('body-parser');
const hbs = require('hbs');
const path = require('path');

const app = express();

mongoose.connect("mongodb+srv://amansingh07032003:aman123@cluster0.yujjsaj.mongodb.net/sriit", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'aman123',
    resave: false,
    saveUninitialized: true
}));

app.use(express.static(path.join(__dirname, 'public')));
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));

const indexRoutes = require('./routes/index');
const authRoutes = require('./routes/auth');

app.use('/', indexRoutes);
app.use('/auth', authRoutes);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
