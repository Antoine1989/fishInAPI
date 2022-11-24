const pool = require('../../db');
const queries=require('./queriesPecheur');

const getPecheurs =(req,res)=>{
    pool.query(queries.getPecheurs, (error,results)=>{
    if (error) throw error;
    res.status(200).json(results.rows);

    })
};
const getPecheurById=(req,res)=>{
    const id= parseInt(req.params.id);
    pool.query(queries.getPecheurById,[id],(error,results)=>{
        if (error) throw error;
    res.status(200).json(results.rows);
    })
}

const addPecheur=(req,res)=>{
    const {nom,adresse,password}=req.body;
        //ajout en bdd
    pool.query(queries.addPecheur,[nom,adresse,password],(error,results)=>{
        if (error) throw error;
    res.status(200).send("Un nouveau pêcheur a été ajouté avec succès");
    })
}

const removePecheur=(req,res)=>{
    const id=parseInt(req.params.id);

      pool.query(queries.getPecheurById,[id],(error,results)=>{
      const noSpotFound= !results.rows.length;
        if(noSpotFound){
        res.send("Le pêcheur n'existe pas en bdd");
    }
    pool.query(queries.removePecheur,[id],(error,results)=>{
        if (error) throw error;
        res.status(200).send("Pêcheur supprimé avec succès");
    
    })
 });
};

module.exports={
    getPecheurs,
    getPecheurById,
    addPecheur,
    removePecheur
};