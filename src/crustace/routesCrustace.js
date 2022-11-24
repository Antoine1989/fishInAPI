const {Router}=require ("express");
const controller=require('./controllerCrustace');
const router= Router();

//1 er test pour vérifier q'uon utilise bien la route
/*router.get("/",(req,res)=>{
    res.send("using api route");
});*/

//On fait ensuite le test avec notre controller fraichement créé

router.get("/", controller.getCrustaces);
router.post("/", controller.addCrustace);
router.get("/:id",controller.getCrustaceById);
router.delete("/:id",controller.removeCrustace);

module.exports=router;