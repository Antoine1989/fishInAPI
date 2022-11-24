const {Router}=require ("express");
const controller=require('./controller');
const router= Router();

//1 er test pour vérifier q'uon utilise bien la route
/*router.get("/",(req,res)=>{
    res.send("using api route");
});*/

//On fait ensuite le test avec notre controller fraichement créé

router.get("/", controller.getPoissons);
router.post("/", controller.addPoisson);
router.get("/:id",controller.getPoissonById);
router.delete("/:id",controller.removePoisson);

module.exports=router;