const express = require('express');
/* const db = require('./config/connection'); */
/* const path = require('path'); */
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});