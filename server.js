const express =require('express');
const pecheRoutes=require('./src/peche/routes');
const res = require('express/lib/response');
const app =express();
const port=3001;

app.use(express.json());

app.get ("/",(req,res) =>{
    res.send("Hello WOrld!")
});
app.use('/api/v1/peches', pecheRoutes);

app.listen(port,()=>console.log(`app listening on port ${port}`));
