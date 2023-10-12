import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express'
const app = express()

import morgan from 'morgan';

if(process.env.NODE_ENV === 'development') {
   app.use(morgan('dev')); 
}

app.use(express.json());

app.get('/', (req, res) => { // home route
    res.send('Hiya');
});

app.post('/', (req, res) => {
    res.json({message: 'Data received', data:req.body});
})


const port = process.env.PORT || 5100;
app.listen(port, () => {
    console.log(`server running on PORT ${port}....`);
});


