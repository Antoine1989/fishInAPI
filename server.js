const express =require('express');
const poissonRoutes=require('./src/poisson/routes');
//const crustaceRoutes=require('./src/crustace/routesCrustace');
const res = require('express/lib/response');
const app =express();
const port=3001;

app.use(express.json());

app.get ("/",(req,res) =>{
    res.send("Hello WOrld!")
});
app.use('/api/v1/poissons', poissonRoutes);
//app.use('/api/v1/crustaces', crustaceRoutes);

app.listen(port,()=>console.log(`app listening on port ${port}`));
