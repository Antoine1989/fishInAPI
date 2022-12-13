const getPoissons= 'SELECT *  FROM "Poisson" p INNER JOIN "Spot" s ON p.spot_id=s.spot_id WHERE s.spot_id = $1 ';//INNER JOIN "User" u ON  p.user_id=u.user_id  INNER JOIN "Spot" s ON s.user_id=u.user_id AND s.spot_id=p.spot_id' ;
const getPoissonById='SELECT * FROM "Poisson" WHERE poisson_id = $1';
const addPoisson='INSERT INTO "Poisson" (nom,technique,quantite,poids,longueur,date_peche,maree,coef,commentaires,photo,spot_id,user_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)';
const removePoisson='DELETE FROM "Poisson" WHERE poisson_id = $1';
const updatePoisson='UPDATE "Poisson" SET nom = $1 WHERE poisson_id=$2';

module.exports={
    getPoissons,
    getPoissonById,
    addPoisson,
    removePoisson,
    updatePoisson
};


//'SELECT *  FROM "Poisson" p INNER JOIN "Spot" s ON s.spot_id=$1 WHERE p.spot_id = s.spot_id ' Cette requête est bonne en bdd