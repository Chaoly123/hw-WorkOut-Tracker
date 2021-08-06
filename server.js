const express = require("express");
const mongoose =  require("mongoose");

const PORT = process.env.PORT || 3001

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

const config = { userNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedToplogy: true,
    useFindAndModify: false
}

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', config);

app.listen(PORT, () => {
    console.log(`App running on ${PORT}` );
});