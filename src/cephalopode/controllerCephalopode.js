const pool = require('../../db');
const queries=require('./queriesCephalopode');

const getCephalopodes =(req,res)=>{
    pool.query(queries.getCephalopodes, (error,results)=>{
    if (error) throw error;
    res.status(200).json(results.rows);

    })
};
const getCephalopodeById=(req,res)=>{
    const id= parseInt(req.params.id);
    pool.query(queries.getCephalopodeById,[id],(error,results)=>{
        if (error) throw error;
    res.status(200).json(results.rows);
    })
}

const addCephalopode=(req,res)=>{
    const {nom,technique,quantite,poids,longueur,
            date,maree,coef,commentaire,photo,spot_id,user_id}=req.body;
        //ajout en bdd
    pool.query(queries.addCephalopode,[nom,technique,quantite,poids,longueur,
        date,maree,coef,commentaire,photo,spot_id,user_id],(error,results)=>{
        if (error) throw error;
    res.status(200).send("Un nouveau céphalopode a été ajouté avec succès");
    })
}

const removeCephalopode=(req,res)=>{
    const id=parseInt(req.params.id);

      pool.query(queries.getCephalopodeById,[id],(error,results)=>{
      const noPoissonFound= !results.rows.length;
        if(noPoissonFound){
        res.send("Le céphalopode n'existe pas en bdd");
    }
    pool.query(queries.removeCephalopode,[id],(error,results)=>{
        if (error) throw error;
        res.status(200).send("Céphalopode supprimé avec succès");
    
    })
 });
};

const updateCephalopode=(req,res)=>{
    const id = parseInt(req.params.id);
    const {nom}=req.body;

    pool.query(queries.getCephalopodeById,[id],(error,results)=>{
        const noCephalopodeFound= !results.rows.length;
        if(noCephalopodeFound){
        res.send("Le céphalopode n'existe pas en bdd");
        }
        pool.query(queries.updateCephalopode,[nom,id],(error,results)=>{
            if (error) throw error;
            res.status(200).send("Céphalopode mis à jour avec succès");
        }
        )
    })
}


module.exports={
    getCephalopodes,
    getCephalopodeById,
    addCephalopode,
    removeCephalopode,
    updateCephalopode
};