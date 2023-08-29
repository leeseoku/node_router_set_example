var express = require('express');
const app = express();
const PORT = 8002;

const reactjs = require('./router/reactdb')

app.get('/', (req, res)=>{
   res.sendFile(__dirname+"/html/index.html")
})

app.use('/re', reactjs)

app.use((req, res)=>{
   res.status(404).sendFile(__dirname+"/html/no.html")
})



app.listen(8002	, ()=>{
    console.log(PORT,'정상구동')
})