const getPoissons= 'SELECT * FROM "Poisson"';
const getPoissonById='SELECT * FROM "Poisson" WHERE poisson_id = $1';
const addPoisson='INSERT INTO "Poisson" (nom,technique,quantite,poids,longueur,date_peche,maree,coef,commentaires,photo,spot_id,user_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)';
const removePoisson='DELETE FROM "Poisson" WHERE poisson_id = $1';

module.exports={
    getPoissons,
    getPoissonById,
    addPoisson,
    removePoisson
};