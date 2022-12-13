const express =require('express');
const poissonRoutes=require('./src/poisson/routes');
const crustaceRoutes=require('./src/crustace/routesCrustace');
const cephalopodeRoutes=require('./src/cephalopode/routesCephalopode');
const spotRoutes=require('./src/spot/routesSpot');
const pecheurRoutes=require('./src/pecheur/routesPecheur');
const res = require('express/lib/response');
const app =express();
const port=3001;
const req = require('express/lib/request');
const { send } = require('express/lib/response');
const id= function(req,res){
    let idSPot=req.pa
}

app.use(express.json());

app.get ("/",(req,res) =>{
    res.send("Hello World!")
});

app.use('/api/v1/pecheurs', pecheurRoutes);
app.use('/api/v1/spots', spotRoutes);
//Routes poisson
app.use('/api/v1/spots/:id/poissons', poissonRoutes,function (req,res){
    const id=req.params.id   
res.send(id)});

app.use('/api/v1/crustaces', crustaceRoutes);
app.use('/api/v1/cephalopodes', cephalopodeRoutes);


app.listen(port,()=>console.log(`app listening on port ${port}`));
