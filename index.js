const express = require(`express`);
const app = express();
const PORT = 2000;

app.use(logger);

app.get(`/`, (req, res) => {
    res.send(`Home Page`)
});

app.get(`/user`, (req, res) => {
    res.send(`User Page`)
});

app.listen(2000, () => {
    console.log(`Server Running`);
})
function logger(req, res, next) {
    console.log(`Log`);
    next();
}