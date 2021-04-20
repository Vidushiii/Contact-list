const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//middleware always have app.use
app.use(express.urlencoded());
//static files makes page beautiful
app.use(express.static('assets'));

app.get('/', function (req, res) {
    return res.render('home', {
        title: "contact-information",
        contactlist: contact_List
    });
});

var contact_List = [
    {
        name: "vidu",
        phone: "990866677"
    },
    {
        name: "udit",
        phone: "866677"
    },
    {
        name: "ishant",
        phone: "7844423"
    }
]


app.get('/practice', function (req, res) {
    return res.render('practice', {
        title: "practice"
    });
});

app.post('/create_contact', function (req, res) {
    contact_List.push(req.body);
    return res.redirect('/');
});

app.listen(port, function (err) {
    if (err) {
        console.log("errorr errorr", err);
    }
    console.log('working on port no. ', port);
});
