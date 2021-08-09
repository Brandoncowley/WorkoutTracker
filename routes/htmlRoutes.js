const db = require("../models")
const path = require("path");

module.exports = (app) => {
//get the index
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});
//get the exercises
app.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
});
//get the stats
app.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
});
}