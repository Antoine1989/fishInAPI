const express =require('express');
const poissonRoutes=require('./src/poisson/routes');
const crustaceRoutes=require('./src/crustace/routesCrustace');
const cephalopodeRoutes=require('./src/cephalopode/routesCephalopode');
const spotRoutes=require('./src/spot/routesSpot');
const pecheurRoutes=require('./src/pecheur/routesPecheur');
const res = require('express/lib/response');
const app =express();
const port=3001;

app.use(express.json());

app.get ("/",(req,res) =>{
    res.send("Hello World!")
});

app.use('/api/v1/pecheurs', pecheurRoutes);
app.use('/api/v1/pecheurs/:id/spots', spotRoutes);
app.use('/api/v1/pecheurs/:id/spots/:id/poissons', poissonRoutes);
app.use('/api/v1/crustaces', crustaceRoutes);
app.use('/api/v1/cephalopodes', cephalopodeRoutes);


app.listen(port,()=>console.log(`app listening on port ${port}`));
