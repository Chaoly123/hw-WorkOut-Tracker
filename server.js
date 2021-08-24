const express = require("express");
const logger = require('morgan');
const mongoose =  require("mongoose");

const PORT = process.env.PORT || 3001

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

app.use(require('./routes/api'));
app.use(require('./routes/index'));

const config = { userNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedToplogy: true,
    useFindAndModify: false
}

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', config);

app.listen(PORT, () => {
    console.log(`App is a go ${PORT}!!!` );
});