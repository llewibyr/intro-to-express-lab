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

  const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
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

app.get('/shoes/:index', (req, res) => {
   let filteredShoes = shoes;
   const min_price = req.query.min_price;
   const max_price = req.query.max_price;
   const type = req.query.type;

      if (min_price)  {
        filteredShoes = filteredShoes.filter(shoe => shoe.price >= parseFloated(min_price));
   }
      if (max_price) {
        filteredShoes = filteredShoes.filter(shoe => shoe.price <= parseFloat(max_price));
   } 
      if (type) {
        filteredShoes = filteredShoes.filter(shoe => shoe.type === type);

   }
})

// start the listener method
app.listen(5500, () => console.log('The server is running'))