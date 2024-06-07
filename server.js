const express = require(`express`);
const app = express();
const PORT = 2000;

app.set(`view engine`, `ejs`)
app.use(logger);

app.get(`/`, (req, res) => {
    res.render(`index`)
});

app.get(`/user`, (req, res) => {
    res.send(`User Page`)
});

app.listen(PORT, () => {
    console.log(`Server Running`);
})
function logger(req, res, next) {
    console.log(`Log`);
    next();
}