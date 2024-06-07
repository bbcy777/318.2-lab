const express = require(`express`);
const app = express();
const PORT = 2000;

//44 serving static files
app.use(express.static(`public`));
app.use(express.urlencoded({extended: true}));

//create routes folder to move all`/users` url
const userRouters = require(`./routes/users.js`)
app.use(`/users`, userRouters);

//use the ejs template
app.set(`view engine`, `ejs`);

//logger function to try middleware
app.use(logger);



app.get(`/`, (req, res) => {
    // res.render(`index`)
    res.send(`Home page without render. It's not showing with render`)
});

// app.get(`/user`, (req, res) => {
//     res.send(`User Page`)
// });

app.listen(2000, () => {
    console.log(`Server Running`);
})

//log function when url is refreshed
function logger(req, res, next) {
    console.log(`Log`);
    next();
}