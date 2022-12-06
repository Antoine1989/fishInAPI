const {Router}=require ("express");
const controller=require('./controllerCephalopode');
const router= Router();

//1 er test pour vérifier q'uon utilise bien la route
/*router.get("/",(req,res)=>{
    res.send("using api route");
});*/

//On fait ensuite le test avec notre controller fraichement créé

router.get("/", controller.getCephalopodes);
router.post("/", controller.addCephalopode);
router.get("/:id",controller.getCephalopodeById);
router.delete("/:id",controller.removeCephalopode);
router.put("/:id",controller.updateCephalopode);

module.exports=router;