var express = require('express');
const mysql = require('mysql');
const dbinfo = require('../db/config')


const conact = mysql.createConnection(dbinfo);
const tnm = 'people'


var router = express.Router();

router.get('/', (req, res)=>{
    conact.query('SELECT * FROM people', (e, r)=>{
        if (e) throw e;
        res.send(r)
    })
})
// router.get('/re', (req, res)=>{
//     res.send('나는 리액트파일의 하위라우터 re입니다.')
//  })
//  router.get('/re/re', (req, res)=>{
//     res.send('전부다 나에요')
//  })


module.exports = router;