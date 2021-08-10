import express from 'express';
//import bodyParcer from 'body-parser';



const app = express();


//depreciated
//app.use(bodyParcer.json());


app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req,res) => res.send('Hello back'));
//app.post('/' , (req,res) => res.send(`${req.body.name}`));//this results in undefined
app.post('/' , (req,res) => res.send(req.body.name)); // this results in :  1 and req.body results in {} empty object



app.listen(8000, ()=> console.log(' Listening on port 8000'));