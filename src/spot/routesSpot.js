const {Router}=require ("express");
const controller=require('./controllerSpot');
const router= Router();

//1 er test pour vérifier q'uon utilise bien la route
/*router.get("/",(req,res)=>{
    res.send("using api route");
});*/

//On fait ensuite le test avec notre controller fraichement créé

router.get("/", controller.getSpots);
router.post("/", controller.addSpot);
router.get("/:id",controller.getSpotById);
router.delete("/:id",controller.removeSpot);

module.exports=router;