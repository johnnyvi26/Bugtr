const express = require('express');
const app = express();
const PORT = 3000;
const Budget = require('./models/budget');




//////////////// MIDDLEWARE /////////////////////
//body parser middleware: give us access to req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));





//////////////// ROUTES/ CONTROLLERS ///////////

// index
app.get('/budgets', (req, res)=>{
    res.render('index.ejs', {
        budgets: Budget,
        bankAccount: 0,
    });
});

// NEW
app.get('/budgets/new', (req, res) => {
    res.render('new.ejs');
});

// CREATE

app.post('/budgets', (req, res) => {
    Budget.push(req.body);
    res.redirect("/budgets");
});

// SHOW
app.get('/budgets/:index', (req, res) => {
    res.render('show.ejs',{
        budget: Budget[req.params.index],
    });
});


//////////////// LISTER //////////////////////////

app.listen(PORT, ()=>{
    console.log('This APP is listening on port:', PORT)
});