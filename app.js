/*import */ 

 require('dotenv').config()
 const express = require ("express")
 var bodyParser = require('body-parser');

 const mongoose = require("mongoose")
 const bcrypt = require ("bcrypt")
 const jwt = require ("jsonwebtoken")

 //CREDENTIALS 
const dbUser = process.env.DB_USER 
const dbPassword = process.env.DB_PASS 

// DATA BASE




 const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 //CONFIG JSON RESPONSE 
//  app.use (express.json)


// IMPORT MODELS 

    

app.get("/url", (req, res, next) => {
  res.json(["Tony","Lisa","Michael","Ginger","Food"]);
 });

// //Open Route - Public Route

 app.get('/', (req, res, next) => {
  console.log(res.toString())
    res.status(200).json({ msg: "Gerando uma api para o mongo atlas via and Postman" })
    
 })


// //REGISTER USER 
app.post('/auth/register', async (req, res, next) => {
await mongoose
   .connect(
    `mongodb+srv://${dbUser}:${dbPassword}@cluster0.xwo4to8.mongodb.net/?retryWrites=true&w=majority`
   )
   .then(() => {
     console.log("Conectou ao Banco")
 })
 .catch((err) => console.log(err))
  console.log(req.body)
  const {name, email, password, confirmpassword} = req.body

  res.status(202).json(req.body)
// // VALIDATIONS

if (!name) {
  return res.status(202).json({ msg: `nome é obrigatório`})   
}

if (!email) {
  return res.status(202).json({ msg: `Email é obrigatória`})   
}

if (!password) {
  return res.status(202).json({ msg: `Senha é obrigatória`})   
}

if (!confirmpassword) {
  return res.status(202).json({ msg: `as senhas não conferem`})   
}

}) 

// Check duplicity email/account 


app.listen(3000, () => {
  console.log("Server running on port 3000");
 });


