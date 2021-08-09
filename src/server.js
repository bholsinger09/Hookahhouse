import express from 'express';


const app = express();



app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req,res) => res.send('Hello back'));
app.post('/' , (req,res) => res.send(`data ${req.body.name}`));

app.listen(8000, ()=> console.log(' Listening on port 8000'));