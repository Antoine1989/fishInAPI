const {Router}=require ("express");
const controller=require('./controller');
const controllerSpot=require('../spot/controllerSpot');
const router= Router();
const req = require('express/lib/request');

/*const id =(req,res)=>{
    //test
    const idSpot= parseInt(req.params.id);
   return idSpot;
}*/
//const idSpot=controller.idSpot;
//1 er test pour vérifier q'uon utilise bien la route
/*router.get("/",(req,res)=>{
    res.send("using api route");
});*/

//On fait ensuite le test avec notre controller fraichement créé

router.get("/", controller.getPoissons);
//router.get(function (req,res){"/"+controller.idSpot+"/", controller.getPoissons});
//router.get('/'+req.params.id+'/',async function (req,res){( controller.getPoissons,{'id':req.params.id})});
//router.get('/'+req.params.id+'/', controller.getPoissons,{'id':req.params.id});
router.post("/", controller.addPoisson);
router.get("/:idPoisson",controller.getPoissonById);
router.delete("/:idPoisson",controller.removePoisson);
router.put("/:idPoisson",controller.updatePoisson);
module.exports=router;