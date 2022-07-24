const Application = require("../models/Application");
const express = require("express");
const sharp = require("sharp");
const jwt = require("jsonwebtoken");
// const auth = require("../middleware/auth.js");
const multer = require("multer");
const router = new express.Router();


router.post('/applicationForm', async(req, res)=>{

  console.log(req.body);
  const application = new Application(req.body) ;
  
  try{
  console.log(application);
  application.save()
  res.status(201).send(application) ;
  }catch(e){
    res.status(400).send();
  }
})

router.get('/applicationForm', async(req, res)=>{

  console.log('get')
  const applications = await Application.find({});
  res.send(applications) ;
})

module.exports = router;