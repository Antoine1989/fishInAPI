const {Router}=require ("express");
const controller=require('./controllerPecheur');
const router= Router();

//1 er test pour vérifier q'uon utilise bien la route
/*router.get("/",(req,res)=>{
    res.send("using api route");
});*/

//On fait ensuite le test avec notre controller fraichement créé

router.get("/", controller.getPecheurs);
router.post("/", controller.addPecheur);
router.get("/:id",controller.getPecheurById);
router.delete("/:id",controller.removePecheur);

module.exports=router;