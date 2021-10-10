const express = require('express');
const app = express();
const PORT = 3000;

//////////////// ROUTES/ CONTROLLERS ///////////

// index
app.get('/budgets', (req, res)=>{
    res.send("Hello World");
});

// NEW
app.get('/budgets/new', (req, res) => {
    res.send("");
});

// CREATE

app.post('/budgets/', (req, res) => {
    res.send("");
});

// SHOW
app.get('/budgets/:index', (req, res) => {
    res.send("");
});


//////////////// LISTER //////////////////////////

app.listen(PORT, ()=>{
    console.log('This APP is listening on port:', PORT)
})