const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/userRoutes');
const authRoute = require('./routes/authRoute');
const productRoute = require('./routes/productRoutes');
const cartRoute = require('./routes/cartRoute');
const orderRoute = require('./routes/orderRoute');
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config()



const app = express();

app.use(express.json());
app.use(cors());


mongoose.connect('mongodb+srv://BddTry23:Heytest123@expressapi.qmwbdgl.mongodb.net/?retryWrites=true&w=majority',
  {  useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));



app.use( "/api/auth", authRoute );
app.use( "/api/users", userRoute );
app.use( "/api/products", productRoute );
app.use( "/api/carts", cartRoute );
app.use( "/api/orders", orderRoute );
 

module.exports = app;