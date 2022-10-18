const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});