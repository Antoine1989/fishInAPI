const pool = require('../../db');
const queries=require('./queriesSpot');

const getSpots =(req,res)=>{
    pool.query(queries.getSpots, (error,results)=>{
    if (error) throw error;
    res.status(200).json(results.rows);

    })
};
const getSpotById=(req,res)=>{
    const id= parseInt(req.params.id);
    pool.query(queries.getSpotById,[id],(error,results)=>{
        if (error) throw error;
    res.status(200).json(results.rows);
    })
}

const addSpot=(req,res)=>{
    const {nom,ville,user_id}=req.body;
        //ajout en bdd
    pool.query(queries.addSpot,[nom,ville,user_id],(error,results)=>{
        if (error) throw error;
    res.status(200).send("Un nouveau spot a été ajouté avec succès");
    })
}

const removeSpot=(req,res)=>{
    const id=parseInt(req.params.id);

      pool.query(queries.getSpotById,[id],(error,results)=>{
      const noSpotFound= !results.rows.length;
        if(noSpotFound){
        res.send("Le spot n'existe pas en bdd");
    }
    pool.query(queries.removeSpot,[id],(error,results)=>{
        if (error) throw error;
        res.status(200).send("Spot supprimé avec succès");
    
    })
 });
};

module.exports={
    getSpots,
    getSpotById,
    addSpot,
    removeSpot
};