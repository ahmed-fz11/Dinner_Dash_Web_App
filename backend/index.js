import express from 'express';
import mongoose from 'mongoose'

const dbURI = 'mongodb://localhost:27017/mydatabase';
const app = express()
const port = 3000;

mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true});
