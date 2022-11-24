const pool = require('../../db');
const queries=require('./queries');

const getPoissons =(req,res)=>{
    pool.query(queries.getPoissons, (error,results)=>{
    if (error) throw error;
    res.status(200).json(results.rows);

    })
};
const getPoissonById=(req,res)=>{
    const id= parseInt(req.params.id);
    pool.query(queries.getPoissonById,[id],(error,results)=>{
        if (error) throw error;
    res.status(200).json(results.rows);
    })
}

const addPoisson=(req,res)=>{
    const {nom,technique,quantite,poids,longueur,
            date,maree,coef,commentaire,photo,spot_id,user_id}=req.body;
        //ajout en bdd
    pool.query(queries.addPoisson,[nom,technique,quantite,poids,longueur,
        date,maree,coef,commentaire,photo,spot_id,user_id],(error,results)=>{
        if (error) throw error;
    res.status(200).send("Un nouveau poisson a été ajouté avec succès");
    })
}

const removePoisson=(req,res)=>{
    const id=parseInt(req.params.id);

      pool.query(queries.getPoissonById,[id],(error,results)=>{
      const noPoissonFound= !results.rows.length;
        if(noPoissonFound){
        res.send("Le poisson n'existe pas en bdd");
    }
    pool.query(queries.removePoisson,[id],(error,results)=>{
        if (error) throw error;
        res.status(200).send("Poisson supprimé avec succès");
    
    })
 });
};

module.exports={
    getPoissons,
    getPoissonById,
    addPoisson,
    removePoisson
};