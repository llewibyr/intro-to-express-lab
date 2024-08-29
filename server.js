// import express
const express = require('express')

// initialize the app
const app = express()
// Data Array
const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

// define 
app.get('/', (req, res) =>{
    console.log(req)
})

app.get('/greetings/Christy', (req, res) => {

    
   
    res.send(
        '<h1>Hello there, Christy!, ${req.params.firstName}</h1>'

    )
});

app.get("/roll/:numberParam", (req, res) => {
    if(isNaN(Number(req.params.numberParam))) {
        res.send(`<h1 style = 'color: red'>You must specify a number.</h1>`);
    } else {
        res.send(
            `<h1> You rolled a ${Math.floor(Math.random() * 
            (Number(req.params.numberParam) + 1)
        )} </h1>`
        );
    };
});

app.get('/collectibles/:index', (req, res) => {
    const index = Number(req.params.index);
    console.log(index);
    if (isNaN(index) || index < 0 || index >= collectibles.length) {
         res.send(
           `<h1 style = 'color: green'><i>'This item is not yet in stock. Check back soon!'</i></h1>`
       );
    } else {
    const item = collectibles[index];
        res.send(
            `<h1 style = 'color: orange'><i> So, you want the ${item.name}? For  ${item.price}, it can be yours!</i></h1>`
        );
    };
});
// start the listener method
app.listen(5500, () => console.log('The server is running'))