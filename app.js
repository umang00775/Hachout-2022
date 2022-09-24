const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const https = require('https');
const session = require('express-session');
const passport = require('passport');
const bcrypt = require('bcrypt');
const app = express();
const port = 3000 || process.env.PORT;

// Setting :)
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

/* From disk */
const data = require('./javascript/data.js');

app.get('/',(req,res)=>{
    // res.sendFile(__dirname + '/static//index.html');
    res.render('home',{data:data});
});

app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
});

app.get('/jobs', (req,res)=>{
    res.render('jobSearch', {data: data.jobs});
});


app.get('/certificate', (req,res)=>{
    const date = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    const fullDate = date + "/" + month + "/" + year;
    const certData = {
        goodName:"Umang Rathod",
        courseName: "Full stack web development",
        date: fullDate,
    }
    res.render('certificateGenerator', {certData: certData});
});


app.get('/courses', (req,res)=>{
    res.render('courses', {data : data});
});

app.get('/loan', (req,res)=>{
    res.render('loanApplication');
});


app.get('/login', (req,res)=>{
    res.render('login');
});


app.get('/helpline', (req,res)=>{
    res.render('helpline');
});