import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import bodyparser from 'body-parser'
import crudOperations from './routes/CrudOperations.js'

const app=express()

app.use(cors())
app.use(bodyparser.json())

const PORT = process.env.PORT || 5000
const DB='DB=mongodb://localhost:27017/crud'
mongoose.connect(DB,{useNewUrlParser: true,useUnifiedTopology: true})
.then(()=>{app.listen(PORT,()=>console.log(`Server connected to ${PORT}`))})
.catch(error => console.error)

app.use('/',crudOperations)






