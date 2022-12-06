const pool = require('../../db');
const queries=require('./queriesCrustace');

const getCrustaces =(req,res)=>{
    pool.query(queries.getCrustaces, (error,results)=>{
    if (error) throw error;
    res.status(200).json(results.rows);

    })
};
const getCrustaceById=(req,res)=>{
    const id= parseInt(req.params.id);
    pool.query(queries.getCrustaceById,[id],(error,results)=>{
        if (error) throw error;
    res.status(200).json(results.rows);
    })
}

const addCrustace=(req,res)=>{
    const {nom,technique,quantite,poids,longueur,
            date,maree,coef,commentaire,photo,spot_id,user_id}=req.body;
        //ajout en bdd
    pool.query(queries.addCrustace,[nom,technique,quantite,poids,longueur,
        date,maree,coef,commentaire,photo,spot_id,user_id],(error,results)=>{
        if (error) throw error;
    res.status(200).send("Un nouveau crustacé a été ajouté avec succès");
    })
}

const removeCrustace=(req,res)=>{
    const id=parseInt(req.params.id);

      pool.query(queries.getCrustaceById,[id],(error,results)=>{
      const noPoissonFound= !results.rows.length;
        if(noPoissonFound){
        res.send("Le crustacé n'existe pas en bdd");
    }
    pool.query(queries.removeCrustace,[id],(error,results)=>{
        if (error) throw error;
        res.status(200).send("Crustacé supprimé avec succès");
    
    })
 });
};

const updateCrustace=(req,res)=>{
    const id = parseInt(req.params.id);
    const {nom}=req.body;

    pool.query(queries.getCrustaceById,[id],(error,results)=>{
        const noCrustaceFound= !results.rows.length;
        if(noCrustaceFound){
        res.send("Le crustace n'existe pas en bdd");
        }
        pool.query(queries.updateCrustace,[nom,id],(error,results)=>{
            if (error) throw error;
            res.status(200).send("Crustace mis à jour avec succès");
        }
        )
    })
}


module.exports={
    getCrustaces,
    getCrustaceById,
    addCrustace,
    removeCrustace,
    updateCrustace
};