const { log } = require('console');
const express = require('express');
const path = require('path');
const app = express();
const port = 2006;

app.use(express.json());
app.use(express.static('public'));

app.get('/', (res,req)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.post('api/data', (odp,pyt) =>{
    const {imie, email} = pyt.body;
    console.log(`Otrzymano dane:`, {imie, email});

    odp.json({message: "Otrzymano dane!", receivedData: {imie, email}});
    
})

app.listen(port, () => {
    console.log(`Serwer nasłuchuje na porcie ${port}`);
})