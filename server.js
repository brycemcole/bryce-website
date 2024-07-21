const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index.ejs');
    });

app.get('/projects', (req, res) => {
    res.render('projects.ejs');
    });

app.get('/contact', (req, res) => {
    res.render('contact.ejs');
    });

app.get('/blog', (req, res) => {
        res.render('blog.ejs');
        });
app.listen(3000, () => {
    console.log('Server is running on port 3000');
    }
);