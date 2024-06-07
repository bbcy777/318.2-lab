const express = require("express");
const router = express.Router();

const users = [
    {
        first_name: `John`,
        last_name: `Doe`,
        email: `johndoe@example.coom`
    },
    {
        first_name: `Alice`,
        last_name: `Smith`,
        email: `alicesmith@example.com`,
    },
];

router
    .route(`/`)
    .get((req, res) => {
        res.send(users);
    })
    .post((req, res) => {
        const isValid = true;
        if(isValid) {
            users.push({first_name: req.body.firstName});
            res.redirect(`/users/${users.length - 1}`);
        } else {
            console.log(`Error`);
            res.render(`users/new`, {first_name: req.body.firstName})
        }
        // console.log(req.body.firstName);
        // res.send(`Create User`);
    });

router.get(`/new`, (req, res) => {
    res.render(`users/new`, {firstName: `first name`});
})

router
    .route(`/:id`)
    .get((req, res) => {
        console.log(req.user);
        res.send(`Get User With ID: ${req.params.id}`);
    })
    .put((req, res) => {
        res.send(`Updated Usre With ID: ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`Deleted User With ID: ${req.params.id}`)
    });

router.param(`id`, (req, res, next, id) => {
    req.user = users[id];
    next()
})

module.exports = router;
