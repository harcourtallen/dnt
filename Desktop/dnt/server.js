/*
 * Initialise Express
 */
const express = require('express');
const path = require('path');
const Pusher = require('pusher');
const app = express();
app.use(express.static(path.join(__dirname)));

/*
 * Initialise Pusher
 */
const pusher = new Pusher({
  appId: 'YOUR_APP_ID',
  key: 'YOUR_APP_KEY',
  secret: 'YOUR_APP_SECRET',
  cluster: 'eu',
  encrypted: true
});

/*
 * Define app routes and reponses
 */
app.get('/', (req,res) => {  
  res.sendFile('dnt.html', {root: __dirname});
});

app.get('/vote', (req, res) => {
  let item = req.query.item_id;
  pusher.trigger('counter', 'vote', {item: item});
  res.status(200).send();
});

/*
 * Run app
 */
const port = 5000;
app.listen(port, () => { console.log(`App listening on port ${port}!`)});



// const express = require('express');
// const path = require('path');
// const Pusher = require('pusher');
// const app = express();
// app.use(express.static(path.join(__dirname)));

// const pusher = new Pusher({
//     appId: 'YOUR_APP_ID',
//     key: 'YOUR_APP_KEY',
//     secret: 'YOUR_APP_SECRET',
//     cluster: 'us2',
//     encrypted: true
//   });

// app.get('/', (req,res_) => {
//     res.sendFile('index.html', {root: __dirname});
// });

// app.get('/vote', (req, res) => {
//     let item = req.query.item_id;
//     pusher.trigger('counter', 'vote', {item: item});
//     res.status(200).send();
// })

// const port = 5000;

// app.listen(port, () => {console.log(`App listening on port ${port}!`)});
